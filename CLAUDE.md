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
- Design tokens live in `src/styles/global.css`; reuse them. Keep colour restrained: light sections use quiet warm neutrals (`--paper`, `--sage`, `--sky`, `--mineral`, `--lavender`, `--clay-wash` are all near-ivory tints), cards are near-white; charcoal (`bg-ink on-dark`) is reserved for showpiece sections (home projects, home process story), home machinery sits on deep olive with a faint grid and the closing band is solid clay. Charcoal `--ink`/`--navy` is for text, clay `--saffron` #a84f32 for primary buttons (`btn btn--accent`, white text, 5.5:1) and highlights, light clay `--saffron-2` for accents on dark, olive `--green-ink` #566b35 for small labels, lime only for brand marks.
- Typography: serif for heroes and section statements; semibold sans for machine names, specs and technical values.
- The enquiry form posts to `api/enquiry.ts` (Vercel Function, Resend). Never show success unless the send succeeded.

## Commands
- `npm run dev`, `npm run build`, `npm run check` (astro check, must be 0 errors).
- A hook in `.claude/settings.json` runs build + check before every `git commit` and blocks on failure.

## Strata redesign (Oct 2026, branch `redesign`)
The home page (`src/views/HomeStrata.astro`, used by `/`, `/hi/`, `/mr/`) runs on a new system; the other pages still use `Base.astro` and `global.css` until they are moved over. The old `src/views/Home.astro` is kept for rollback.
- Layout `src/layouts/Strata.astro` with `components/strata/StrataHeader.astro` and `StrataFooter.astro`. Tokens and base classes in `src/styles/strata.css`; home sections in `src/styles/strata-home.css`. Type is Archivo (variable width; headings at `font-stretch: 125%`), Noto Sans Devanagari for Hindi and Marathi (headings drop back to normal width there).
- The page is a dig through a dumpsite: each section is a `.stratum` with a `.tone-*` class (dark: overburden, humus, ash, field; light: silt, reclaimed, paper) and a ragged top edge. Neighbouring sections never share a tone and dark and light alternate. Hindi and Marathi have no Insights section, so the closing band switches to `tone-reclaimed` there to keep the alternation.
- Safety orange `--safety` is for action fills only, always with charcoal text (`s-btn s-btn--go`, 6:1). Focus rings are orange on dark tones and charcoal on light ones (`--focus`). The four fraction colours (`--f-fines`, `--f-recyclables`, `--f-rdf`, `--f-inerts`) mark the bio-mining outputs and nothing else.
- Motion is React islands with Motion (`motion/react`) in `src/components/strata/*.tsx`: `StrataHero` (client:load), `TheSort` (client:idle, the signature scene), `MachineReel`, `ProcessCore`, `WordsScrub` (client:visible). Every island renders its full content on the server; `html:not(.js) [data-m]` forces reveal elements visible. Scenes pin only at `(min-width: 1000px) and (min-height: 700px) and (prefers-reduced-motion: no-preference)` and follow the scroll through a spring; otherwise they show their finished state. Figures are always shown still (no counting up).
- No italic accent words, all-caps eyebrows, monospace labels, arrows in buttons or rows of stat tiles. The one heading accent is the tricolour "India" (`.india`).
