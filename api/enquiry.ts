/**
 * Vercel Function: receives the contact-page enquiry form and emails it to the
 * business through Resend (https://resend.com).
 *
 * Environment variables (Vercel → Project → Settings → Environment Variables):
 *   RESEND_API_KEY  required. API key from a Resend account.
 *   ENQUIRY_FROM    required. Sender on a domain verified in Resend,
 *                   e.g. "Hind Zero Waste website <website@hindzerowaste.com>".
 *   ENQUIRY_TO      optional. Comma-separated recipients; defaults to sales@hindzerowaste.com.
 *
 * Until RESEND_API_KEY and ENQUIRY_FROM are set the function answers 503 and
 * the form shows its error state with phone and email, never a false success.
 */

type Env = Partial<Record<'RESEND_API_KEY' | 'ENQUIRY_FROM' | 'ENQUIRY_TO', string>>;

const FIELDS = {
  name: { label: 'Name', max: 120, required: true },
  organisation: { label: 'Organisation', max: 160 },
  phone: { label: 'Phone', max: 40, required: true },
  email: { label: 'Email', max: 160 },
  city: { label: 'City / State', max: 120 },
  capacity: { label: 'Capacity (TPD)', max: 80 },
  requirement: { label: 'Requirement', max: 160, required: true },
  message: { label: 'Message', max: 4000 },
  lang: { label: 'Page language', max: 5 },
} as const;

type Field = keyof typeof FIELDS;
type Enquiry = Record<Field, string>;

const json = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
  });

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

export function validate(input: Record<string, unknown>): { ok: true; data: Enquiry } | { ok: false; fields: Field[] } {
  const data = {} as Enquiry;
  const bad: Field[] = [];
  for (const [key, rule] of Object.entries(FIELDS) as [Field, (typeof FIELDS)[Field]][]) {
    const raw = input[key];
    const value = typeof raw === 'string' ? raw.trim() : '';
    if (('required' in rule && rule.required && !value) || value.length > rule.max) bad.push(key);
    data[key] = value;
  }
  if (data.phone && (data.phone.replace(/\D/g, '').length < 7 || !/^[+\d\s().-]+$/.test(data.phone))) bad.push('phone');
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) bad.push('email');
  return bad.length ? { ok: false, fields: [...new Set(bad)] } : { ok: true, data };
}

export async function handleEnquiry(request: Request, env: Env, send: typeof fetch = fetch): Promise<Response> {
  if (request.method !== 'POST') return json(405, { ok: false, error: 'method_not_allowed' });

  let input: Record<string, unknown>;
  try {
    const type = request.headers.get('content-type') ?? '';
    input = type.includes('application/json')
      ? await request.json()
      : Object.fromEntries((await request.formData()).entries());
  } catch {
    return json(400, { ok: false, error: 'bad_request' });
  }

  // Spam trap: real visitors never see or fill this field.
  if (typeof input.website === 'string' && input.website.trim()) return json(200, { ok: true });

  const result = validate(input);
  if (!result.ok) return json(422, { ok: false, error: 'invalid', fields: result.fields });

  if (!env.RESEND_API_KEY || !env.ENQUIRY_FROM) return json(503, { ok: false, error: 'not_configured' });

  const e = result.data;
  const rows = (Object.keys(FIELDS) as Field[]).filter((k) => e[k]);
  const text = rows.map((k) => `${FIELDS[k].label}: ${e[k]}`).join('\n');
  const html = `<table cellpadding="6" style="font:15px/1.5 sans-serif;border-collapse:collapse">${rows
    .map(
      (k) =>
        `<tr><th align="left" valign="top" style="color:#5e554e">${FIELDS[k].label}</th><td>${escapeHtml(e[k]).replace(/\n/g, '<br>')}</td></tr>`,
    )
    .join('')}</table>`;

  try {
    const res = await send('https://api.resend.com/emails', {
      method: 'POST',
      headers: { authorization: `Bearer ${env.RESEND_API_KEY}`, 'content-type': 'application/json' },
      body: JSON.stringify({
        from: env.ENQUIRY_FROM,
        to: (env.ENQUIRY_TO || 'sales@hindzerowaste.com').split(',').map((s) => s.trim()).filter(Boolean),
        reply_to: e.email || undefined,
        subject: `Website enquiry: ${e.requirement}${e.organisation ? ` – ${e.organisation}` : ''}`,
        text,
        html,
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) {
      console.error('Resend rejected enquiry', res.status, await res.text().catch(() => ''));
      return json(502, { ok: false, error: 'send_failed' });
    }
  } catch (err) {
    console.error('Enquiry send failed', err);
    return json(502, { ok: false, error: 'send_failed' });
  }

  return json(200, { ok: true });
}

export function POST(request: Request) {
  return handleEnquiry(request, process.env as Env);
}

export function GET() {
  return json(405, { ok: false, error: 'method_not_allowed' });
}
