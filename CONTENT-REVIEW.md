# Content to confirm with Hind Zero Waste before launch

Everything on the new site comes from the current hindzerowaste.com, the brochure PDF or the company profile PDF. Nothing has been invented. Where those sources disagree, or where something needs the client's sign-off, it is listed here.

## Must confirm

- [ ] **Phone numbers.** The site uses the three numbers from the current website: +91 96370 01919, +91 94051 70239 and +91 87999 26002. The brochure and company profile list different ones: +91 87999 26010, +91 93073 91004 and +91 94051 70239. Which set is current?
- [ ] **Email addresses.** The site shows sales@, info@ and marketing@hindzerowaste.com. On the current site these links are broken: they open info@hindgroupindia.in and hindagrochemicals@gmail.com. Confirm all three mailboxes exist.
- [ ] **Enquiry form.** It is not connected to a form service yet. Until it is, pressing Send opens the visitor's email app with the enquiry addressed to sales@. See "Enquiry form" in README.md.
- [ ] **Headline figures** (from the brochure): 87+ bio-mining projects, 300+ baling machines supplied, and 400+ clients across India and South Africa. The company profile lists only 13 completed bio-mining projects, so the 87+ presumably includes machine supply. Confirm the figures and their wording.
- [ ] **Certifications.** The site states only "ISO 9001:2015 certified" and "GeM registered OEM". The profile text says "ISO 9001, 14001, 45001". The certificate images in the profile show ISO 9001:2015, GMP and an IMS certificate, all issued to Hind Agro and Chemicals. Confirm which certifications are current, and send scans if they should appear on the site.
- [ ] **Project record** (the projects section of the About page, and the home page). It is transcribed from the company profile:
  - Confirm each status and volume. The Moshi figure (7,02,900 m³ of 8,00,000 m³ completed) may be out of date.
  - Bhalaswa is marked "Commissioned". Confirm.
- [ ] **Derived figures on the About page.** "3,30,352 m³ cleared in completed bio-mining projects" is the sum of the 13 completed projects in the profile. "19+ plants installed" and "7 states and union territories" count the profile's list of installed bio-mining plants. "Projects in 12 states" counts the states named in the brochure and profile together.
- [ ] **States** with plants or projects. The list combines the brochure (Maharashtra, Karnataka, Goa, Gujarat, Rajasthan, Andhra Pradesh, Telangana, Madhya Pradesh) and the profile (Himachal Pradesh, Punjab, Delhi, Uttar Pradesh).
- [ ] **Hero photo** (`hero-plant-shed.jpg`, from the brochure). Its caption reads "A segregation and RDF line by Hind Zero Waste". Confirm it is their installation.
- [ ] **Hindi and Marathi translations** are drafts and need a native speaker's review, especially the technical terms. They cover the home, services, about and contact pages, plus menus, footer and product names.

## Inconsistencies in the brochure's technical data

Model tables are shown on product pages as "indicative", as in the brochure. Each item below lists what the brochure says, then what the site shows.

- [ ] **Balers.** Brochure: capacities in the model table are in TPH (0.5 to 50 TPH), while its text says vertical balers are 1 to 10 TPD and horizontal 5 to 100 TPD. Site: both, as in the brochure. Which unit is right?
- [ ] **Organic waste composter.** Brochure: the model table gives 7 to 10 days processing for OWC models, while its text says 24 to 48 hours. Site: 24 to 48 hours for OWC and 7 to 10 days for in-vessel, with the processing-time column removed from the table.
- [ ] **Dry waste shredders.** Brochure: "1250 kg/hr to 20 TPH", but its table runs from 250 kg/h to 10 TPH. Site: "250 kg/h to 20 TPH".
- [ ] **Air density separator.** Brochure: the table's column headings were copied from the trommel table. Site: reads the columns as airflow (m³/h) and fan power, matching the brochure's AFR plant table.
- [ ] **MRF capacity.** Website: 5 to 500 TPD; brochure: 25 to 1,000+ TPD. Site: 5 to 1,000+ TPD.

## New pages (built from the brochure)

- [ ] **Disc Separator** (`/disc-separator`) and **RDF & AFR Plants** (`/rdf-afr-plant`). Both are in the brochure but not on the current website. Does the client want them?

## Corrected or removed from the current site

- The current services page says bio-mining uses microorganisms to recover copper and gold. That describes bio-leaching of ores, not legacy-waste bio-mining. The new site uses the client's own correct description from their bio-mining page and blog.
- Removed the "residential trash collection, commercial dumpster service" template text, the unattributed testimonial and the ★★★★★ ratings.
- Removed Unsplash stock photos and AI-generated images that contain garbled text.
- Removed the old developer credit and the 2024 copyright. The year now updates automatically.
- Fixed spellings, e.g. "Bailing" is now "Baling".
- The MSW plant page lists "Technology and responsibility" (SCADA monitoring, emission control, water recycling, formalising waste pickers), taken from the current MSW page. Confirm the client delivers these.
- The "How we work" steps come from the "Our USPs" page in the company profile. Operator training and AMC come from the current MRF page.

## Assets

- [ ] One client logo is unidentified: a red emblem dated 1912 with Marathi text. Its alt text currently reads "Temple trust (client)". What is its name?
- [ ] The company profile also shows government logos (Maharashtra Jeevan Pradhikaran and others). They can be added to the client wall if the client wants.
- [ ] The company profile PDF still has Canva template text on its cover ("PREPARED FOR HANNAH MORALES 2030") and the older phone numbers. Re-export it before launch. Both PDFs are now served from `/downloads/`.
- [ ] Several brochure photos are low resolution: shredder blades, suction vehicle, PEB shed exterior, inclined conveyor. Higher-resolution originals or a short photo shoot would lift the site further.
- [ ] The Facebook page is still named "Hind Agro Chemicals".
- [ ] The privacy and terms pages carry over the current site's template text, tidied. They mention cookies, though the new site sets none. A legal review is recommended.

## Contact page: waiting on the business

- **Enquiry email service**: Resend account, verified domain and the Vercel environment variables listed in README.md → Enquiry form. Until then the form shows its error state with phone and email.
- **Reply time**: what reply time can we promise (e.g. "within one working day")? Set `responseTime` in `src/data/site.ts` in English, Hindi and Marathi.
- **Phone numbers**: what is each of +91 96370 01919, +91 94051 70239 and +91 87999 26002 for (Sales, Service, General enquiries…)? Set `phoneLabels`.
- **WhatsApp**: is there an actively monitored WhatsApp number? If yes, set `whatsapp`.
- **Trust cue**: the contact page shows "87+ bio-mining projects executed across India" (from the brochure and company profile) with a trommel-line site photo. Confirm the figure is current.
