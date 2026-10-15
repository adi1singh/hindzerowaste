# Hind Zero Waste Management: website

A new website for [Hind Zero Waste Management Pvt. Ltd.](https://www.hindzerowaste.com), the Kolhapur-based manufacturer of waste-processing machinery and turnkey bio-mining, MSW, MRF and RDF/AFR plants.

Built with [Astro](https://astro.build) as a fast static site. English throughout, with Hindi and Marathi versions of the key pages.

Before launch, go through **[CONTENT-REVIEW.md](CONTENT-REVIEW.md)**: the facts, figures and translations the client needs to confirm.

## Pages

| Page | Address | Languages |
| --- | --- | --- |
| Home | `/` | EN · HI · MR |
| Services overview | `/services` | EN · HI · MR |
| About, including the project record | `/about-us` (projects at `/about-us#projects`) | EN · HI · MR |
| Contact and enquiry form | `/contact-us` | EN · HI · MR |
| Machinery overview | `/product` | EN |
| 9 machines | e.g. `/rotary-trommel-machines` | EN |
| 4 services | e.g. `/bio-mining-and-legacy-waste-management` | EN |
| Insights and 5 articles | `/waste-management-blogs`, e.g. `/bio-mining-process` | EN |
| Privacy, terms, 404 | `/privacy`, `/terms` | EN |

Hindi pages live under `/hi/` and Marathi under `/mr/`. Every page has a language switch in the top bar. `/projects` redirects to the project record on the About page.

**Addresses match the current site** (for example `/hydraulic-baler-machine` and `/msw-processing-plant`), so Google rankings and shared links keep working after the switch. There are two new pages: `/disc-separator` and `/rdf-afr-plant`.

## Working on the site

Requires Node 22 or newer.

```bash
npm install
npm run dev       # local preview at http://localhost:4321
npm run build     # production build into dist/
npm run preview   # serve the production build
npm run check     # type-check
```

## Where the content lives

| What | File |
| --- | --- |
| Phone numbers, emails, address, social links, headline figures | `src/data/site.ts` |
| Machines: copy, photos, features, specification tables | `src/data/products.ts` |
| Services: copy, process steps, FAQs, capacity tables | `src/data/services.ts` |
| Project record | `src/data/projects.ts` |
| Client logos | `src/assets/clients/` (listed in `src/data/clients.ts`) |
| Articles | `src/content/blog/*.md` |
| Menus, footer and buttons in three languages | `src/i18n/ui.ts` |
| Copy shared by translated pages | `src/i18n/content.ts` |
| Home, About, Services overview and Contact copy (all three languages) | `src/views/*.astro`, in the `copy` object at the top of each file |
| Photos | `src/assets/photos/` (resized and converted to WebP at build time) |
| Brochure and company profile PDFs | `public/downloads/` |

**To add a machine**, add an entry to `products` in `src/data/products.ts`. Its page, menu entries, footer link, contact-form option and sitemap entry are generated automatically.

**To add an article**, add a Markdown file to `src/content/blog/`. Copy the front matter from an existing article; `cover` points to a photo in `src/assets/photos/`. The file name becomes the address.

## Enquiry form

The contact form (EN/HI/MR) posts to `/api/enquiry`, a Vercel Function in `api/enquiry.ts` that validates the enquiry and emails it to the business through [Resend](https://resend.com). The visitor sees a loading state, then either a confirmed success message or an error that keeps everything they typed and gives the phone number and sales email. Success is shown only when the email service accepts the message.

**To switch it on** (until then every submission shows the error state, never a false success):

1. Create a Resend account and verify the `hindzerowaste.com` domain (Resend shows the DNS records to add).
2. In Vercel → Project → Settings → Environment Variables, add:
   - `RESEND_API_KEY`: the Resend API key.
   - `ENQUIRY_FROM`: a sender on the verified domain, e.g. `Hind Zero Waste website <website@hindzerowaste.com>`.
   - `ENQUIRY_TO` (optional): comma-separated recipients; defaults to `sales@hindzerowaste.com`.
3. Redeploy, then send a test enquiry from `/contact-us`.

Fields sent: name, organisation, phone, email, city, capacity, requirement, message, page language, plus a hidden `website` spam trap. The visitor's email (if given) is set as reply-to.

Optional details shown beside the form, each hidden while empty in `src/data/site.ts`: `responseTime` (confirmed reply time, per language), `phoneLabels` (what each number is for), `whatsapp` (only an actively monitored number).

A "Request a quote" button on any machine or service page opens the form with that requirement pre-selected.

## Design

- **Palette:** ivory paper, deep ink and the navy of the logo. The logo's lime and green are reserved for small accents, such as the square markers that echo the four squares of the mark.
- **Type:** Instrument Serif for headings and Inter for text. Devanagari uses Tiro Devanagari Hindi or Marathi for headings and Noto Sans Devanagari for text. All fonts are self-hosted, with no Google Fonts requests.
- **Logo:** the shared vector component `src/components/BrandLogo.astro` uses a recovery loop and leaf. Run `node scripts/brand-assets.mjs` after changing the mark to refresh public SVG, PNG and app icons. Original brand artwork is retained in `src/assets/brand/`.
- **Motion:** a rotating photo slideshow in the home hero, figures that count up as they scroll into view, philosophy words that fill with a Pune skyline as you scroll, sections that rise into view, hover growth on rows and cards, and a scrolling client-logo marquee. All of it is switched off for visitors who ask their device for reduced motion.
- **Navigation:** Machinery and Services in the menu link to their pages; their dropdowns open on hover, or from the small arrow button by keyboard or touch. The machinery and services pages list categories as numbered accordions with Expand all / Collapse all.
- **Video:** product videos load from YouTube only when a visitor presses play.
- **Photo credit:** the Pune city photo (`src/assets/photos/pune-city.jpg`) is by Baikare Sandip, from the [WordPress Photo Directory](https://wordpress.org/photos/photo/18465d1037/), released under CC0 (no attribution required).
- **SEO:** sitemap (`/sitemap-index.xml`), structured data (Organization, Product, Service, FAQ, Article, Breadcrumb), share images and `hreflang` tags between language versions.

## Deploying

The build output is plain static files in `dist/`, so any host works.

- **Vercel or Netlify:** import this repository. The framework is detected as Astro: build command `npm run build`, output directory `dist`.
- **Hostinger or other shared hosting:** run `npm run build` and upload the contents of `dist/` to the web root.

When pointing hindzerowaste.com at the new host, keep the `www.` address as the primary domain (the site's canonical URLs use it).
