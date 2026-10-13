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
- Design tokens live in `src/styles/global.css`; reuse them. Palette is earth/clay: `--navy` holds charcoal #2e2a27 and `--saffron` holds clay #c8643b (names kept from the first palette). Text on clay buttons is white for contrast.
- The enquiry form posts to `api/enquiry.ts` (Vercel Function, Resend). Never show success unless the send succeeded.

## Commands
- `npm run dev`, `npm run build`, `npm run check` (astro check, must be 0 errors).
- A hook in `.claude/settings.json` runs build + check before every `git commit` and blocks on failure.
