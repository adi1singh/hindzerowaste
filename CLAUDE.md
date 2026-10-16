# Hind Zero Waste Management website

Astro static site for hindzerowaste.com. Pushing to `main` deploys to Vercel (hindzerowaste.vercel.app).

## Where content lives
- `src/data/*.ts`: site facts (phones, emails, address, figures), products, services, projects, clients.
- `src/i18n/ui.ts`: UI strings for en / hi / mr. `src/i18n/content.ts`: translated service/project copy.
- `src/views/*.astro`: page bodies with per-locale copy objects; `src/pages/` (+ `hi/`, `mr/`) are thin wrappers.
- `src/content/blog/*.md`: Insights articles.

## Rules
- Keep English, Hindi and Marathi in sync: any copy change on a translated page needs all three.
- Never invent facts, figures, promises or client names. Anything unconfirmed goes in `CONTENT-REVIEW.md`.
- Keep page URLs matching the old site (SEO). Add redirects in `astro.config.mjs` if a URL must change.
- Keep the real logo, phone numbers and client logos.
- Design tokens live in `src/styles/global.css`; reuse them. Keep colour restrained: light sections use quiet warm neutrals (`--paper`, `--sage`, `--sky`, `--mineral`, `--lavender`, `--clay-wash` are all near-ivory tints), cards are near-white; charcoal (`bg-ink on-dark`) is reserved for showpiece sections (home projects, home process story) and the closing band is solid clay. Charcoal `--ink`/`--navy` is for text, clay `--saffron` #a84f32 for primary buttons (`btn btn--accent`, white text, 5.5:1) and highlights, light clay `--saffron-2` for accents on dark, olive `--green-ink` #566b35 for small labels, lime only for brand marks.
- Typography: serif for heroes and section statements; semibold sans for machine names, specs and technical values.
- The enquiry form posts to `api/enquiry.ts` (Vercel Function, Resend). Never show success unless the send succeeded.

## Commands
- `npm run dev`, `npm run build`, `npm run check` (astro check, must be 0 errors).
- A hook in `.claude/settings.json` runs build + check before every `git commit` and blocks on failure.
