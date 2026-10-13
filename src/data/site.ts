// Company facts used across the site. Phone numbers and address are exactly as
// on the current hindzerowaste.com; see CONTENT-REVIEW.md before launch.

export const site = {
  name: 'Hind Zero Waste Management Pvt. Ltd.',
  shortName: 'Hind Zero Waste',
  url: 'https://www.hindzerowaste.com',
  tagline: 'Innovative solid waste management solutions · Sustainable waste processing · Bio-mining experts',
  founded: 2017,
  formerName: 'Hind Agro and Chemicals',
  phones: ['+91 96370 01919', '+91 94051 70239', '+91 87999 26002'],
  emails: {
    sales: 'sales@hindzerowaste.com',
    info: 'info@hindzerowaste.com',
    marketing: 'marketing@hindzerowaste.com',
  },
  address: {
    lines: ['Hind Group, H406, Fourth Floor', 'Govind Excellency, 6th Lane, Rajarampuri'],
    city: 'Kolhapur',
    postcode: '416008',
    region: 'Maharashtra',
    country: 'India',
  },
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=Govind+Excellency+6th+Lane+Rajarampuri+Kolhapur+416008',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/hind-zero-waste-management-pvt-ltd/' },
    { label: 'Instagram', href: 'https://www.instagram.com/hindgroup.waste_management/' },
    { label: 'YouTube', href: 'https://www.youtube.com/channel/UCxfhha7Iv5jutaeXTjxkIlQ' },
    { label: 'Facebook', href: 'https://facebook.com/p/Hind-Agro-Chemicals-100063770114850/' },
  ],
  downloads: {
    brochure:
      'https://assets.zyrosite.com/Yg2j8a0zDrtZWaXb/broucher--hind-zero-waste-management-9pxhyDBSMpQlRCH0.pdf',
    profile:
      'https://assets.zyrosite.com/Yg2j8a0zDrtZWaXb/hind-zero-waste-management--company-profile-ILlwsSs2czycCNIu.pdf',
  },
} as const;

export const telHref = (phone: string) => `tel:${phone.replace(/[^+\d]/g, '')}`;

// Headline figures, as stated in the company brochure and profile.
export const figures = [
  { value: '87+', label: 'Bio-mining projects executed across India' },
  { value: '300+', label: 'Baling machines supplied and commissioned' },
  { value: '400+', label: 'Clients across India and South Africa' },
  { value: '2017', label: 'Founded in Kolhapur, Maharashtra' },
] as const;

export const credentials = ['ISO 9001:2015 certified', 'GeM registered OEM', 'Compliant with SWM Rules 2016'] as const;

// States named in the brochure and company profile as having operating plants or projects.
export const footprint = [
  'Maharashtra',
  'Rajasthan',
  'Telangana',
  'Delhi',
  'Uttar Pradesh',
  'Himachal Pradesh',
  'Punjab',
  'Karnataka',
  'Goa',
  'Gujarat',
  'Andhra Pradesh',
  'Madhya Pradesh',
] as const;

// Delivery model, from the "Our USPs" page of the company profile.
export const approach = [
  {
    title: 'Design & engineering',
    text: 'Site study, waste characterisation and a plant layout sized to your tonnage, land and budget.',
  },
  {
    title: 'Manufacturing & procurement',
    text: 'Trommels, separators, shredders, balers and conveyors built in-house, with every component specified for 24×7 duty.',
  },
  {
    title: 'Erection & commissioning',
    text: 'Our engineers install, integrate and commission the line on site, then train your operators.',
  },
  {
    title: 'Operation & maintenance',
    text: 'Long-term O&M and after-sales support, including AMC contracts and spares, keep the plant running at capacity.',
  },
] as const;
