// Interface text in English, Hindi and Marathi.
// Hindi and Marathi translations are drafts for the client's review (see CONTENT-REVIEW.md).

export const languages = {
  en: { label: 'English', short: 'EN', htmlLang: 'en-IN' },
  hi: { label: 'हिंदी', short: 'हिं', htmlLang: 'hi-IN' },
  mr: { label: 'मराठी', short: 'मरा', htmlLang: 'mr-IN' },
} as const;

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    'nav.machinery': 'Machinery',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.insights': 'Insights',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.showMachinery': 'Show machinery menu',
    'nav.showServices': 'Show services menu',
    'nav.close': 'Close',
    'nav.allMachinery': 'View all machinery',
    'nav.allServices': 'View all services',
    'nav.machineryIntro': 'Engineered and manufactured in-house for continuous duty in waste processing.',
    'nav.servicesIntro': 'Turnkey plants, from design and manufacture to commissioning and long-term operation.',
    'cta.quote': 'Request a quote',
    'cta.call': 'Call us',
    'cta.explore': 'Explore machinery',
    'top.credentials': 'ISO 9001:2015 certified · GeM registered OEM',
    'footer.blurb':
      'Designing, manufacturing and commissioning waste-processing machinery and turnkey plants for India’s cities and industries since 2017.',
    'footer.company': 'Company',
    'footer.contact': 'Contact',
    'footer.office': 'Registered office',
    'footer.privacy': 'Privacy policy',
    'footer.terms': 'Terms & conditions',
    'footer.rights': 'All rights reserved.',
    'footer.brochure': 'Download brochure',
    'footer.profile': 'Company profile',
    'lang.label': 'Language',
    'lang.onlyEnglish': 'This page is available in English.',
    'skip': 'Skip to content',
  },
  hi: {
    'nav.machinery': 'मशीनरी',
    'nav.services': 'सेवाएँ',
    'nav.projects': 'परियोजनाएँ',
    'nav.about': 'हमारे बारे में',
    'nav.insights': 'लेख',
    'nav.contact': 'संपर्क',
    'nav.menu': 'मेनू',
    'nav.showMachinery': 'मशीनरी मेनू दिखाएँ',
    'nav.showServices': 'सेवाएँ मेनू दिखाएँ',
    'nav.close': 'बंद करें',
    'nav.allMachinery': 'सभी मशीनें देखें',
    'nav.allServices': 'सभी सेवाएँ देखें',
    'nav.machineryIntro': 'कचरा प्रसंस्करण में लगातार काम के लिए हमारे अपने कारखाने में डिज़ाइन और निर्मित।',
    'nav.servicesIntro': 'डिज़ाइन और निर्माण से लेकर कमीशनिंग और दीर्घकालीन संचालन तक, टर्नकी प्लांट।',
    'cta.quote': 'कोटेशन माँगें',
    'cta.call': 'कॉल करें',
    'cta.explore': 'मशीनरी देखें',
    'top.credentials': 'ISO 9001:2015 प्रमाणित · GeM पंजीकृत OEM',
    'footer.blurb':
      '2017 से भारत के शहरों और उद्योगों के लिए कचरा प्रसंस्करण मशीनरी और टर्नकी प्लांट का डिज़ाइन, निर्माण और कमीशनिंग।',
    'footer.company': 'कंपनी',
    'footer.contact': 'संपर्क',
    'footer.office': 'पंजीकृत कार्यालय',
    'footer.privacy': 'गोपनीयता नीति',
    'footer.terms': 'नियम और शर्तें',
    'footer.rights': 'सर्वाधिकार सुरक्षित।',
    'footer.brochure': 'ब्रोशर डाउनलोड करें',
    'footer.profile': 'कंपनी प्रोफ़ाइल',
    'lang.label': 'भाषा',
    'lang.onlyEnglish': 'यह पृष्ठ अंग्रेज़ी में उपलब्ध है।',
    'skip': 'मुख्य सामग्री पर जाएँ',
  },
  mr: {
    'nav.machinery': 'यंत्रसामग्री',
    'nav.services': 'सेवा',
    'nav.projects': 'प्रकल्प',
    'nav.about': 'आमच्याबद्दल',
    'nav.insights': 'लेख',
    'nav.contact': 'संपर्क',
    'nav.menu': 'मेनू',
    'nav.showMachinery': 'यंत्रसामग्री मेनू दाखवा',
    'nav.showServices': 'सेवा मेनू दाखवा',
    'nav.close': 'बंद करा',
    'nav.allMachinery': 'सर्व यंत्रे पाहा',
    'nav.allServices': 'सर्व सेवा पाहा',
    'nav.machineryIntro': 'कचरा प्रक्रियेतील सततच्या कामासाठी आमच्याच कारखान्यात डिझाइन व निर्मिती.',
    'nav.servicesIntro': 'डिझाइन व निर्मितीपासून कमिशनिंग व दीर्घकालीन संचालनापर्यंत, टर्नकी प्लांट.',
    'cta.quote': 'कोटेशन मागवा',
    'cta.call': 'कॉल करा',
    'cta.explore': 'यंत्रसामग्री पाहा',
    'top.credentials': 'ISO 9001:2015 प्रमाणित · GeM नोंदणीकृत OEM',
    'footer.blurb':
      '2017 पासून भारतातील शहरे व उद्योगांसाठी कचरा प्रक्रिया यंत्रसामग्री आणि टर्नकी प्लांटचे डिझाइन, निर्मिती व कमिशनिंग.',
    'footer.company': 'कंपनी',
    'footer.contact': 'संपर्क',
    'footer.office': 'नोंदणीकृत कार्यालय',
    'footer.privacy': 'गोपनीयता धोरण',
    'footer.terms': 'अटी व शर्ती',
    'footer.rights': 'सर्व हक्क राखीव.',
    'footer.brochure': 'ब्रोशर डाउनलोड करा',
    'footer.profile': 'कंपनी प्रोफाइल',
    'lang.label': 'भाषा',
    'lang.onlyEnglish': 'हे पान इंग्रजीत उपलब्ध आहे.',
    'skip': 'मुख्य मजकुराकडे जा',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];

export function t(lang: Lang, key: UIKey): string {
  return ui[lang][key] ?? ui.en[key];
}

/** Pages that exist in all three languages, keyed by their English path. */
export const translatedPaths = ['/', '/about-us', '/services', '/contact-us'] as const;

export function localePath(lang: Lang, enPath: string): string {
  if (lang === 'en') return enPath;
  if ((translatedPaths as readonly string[]).includes(enPath)) {
    return enPath === '/' ? `/${lang}/` : `/${lang}${enPath}`;
  }
  return enPath;
}

/** Product and service names for Hindi and Marathi menus and cards. */
export const localNames: Record<string, { hi: string; mr: string }> = {
  'rotary-trommel-machines': { hi: 'रोटरी ट्रॉमेल स्क्रीन', mr: 'रोटरी ट्रॉमेल स्क्रीन' },
  'air-density-separator': { hi: 'एयर डेंसिटी सेपरेटर', mr: 'एअर डेन्सिटी सेपरेटर' },
  'disc-separator': { hi: 'डिस्क सेपरेटर', mr: 'डिस्क सेपरेटर' },
  'industrial-shredder-machine': { hi: 'श्रेडर मशीन', mr: 'श्रेडर मशीन' },
  'hydraulic-baler-machine': { hi: 'हाइड्रोलिक बेलिंग मशीन', mr: 'हायड्रॉलिक बेलिंग मशीन' },
  'organic-waste-composter-machine': { hi: 'ऑर्गेनिक वेस्ट कम्पोस्टर', mr: 'ऑरगॅनिक वेस्ट कंपोस्टर' },
  'conveyor-and-conveying-system': { hi: 'कन्वेयर सिस्टम', mr: 'कन्व्हेयर सिस्टीम' },
  'industrial-peb-shed': { hi: 'इंडस्ट्रियल PEB शेड', mr: 'इंडस्ट्रियल PEB शेड' },
  'sewer-suction-vehicle': { hi: 'सीवर सक्शन वाहन', mr: 'सीवर सक्शन वाहन' },
  'bio-mining-and-legacy-waste-management': { hi: 'पुराने कचरे का बायो-माइनिंग', mr: 'जुन्या कचऱ्याचे बायो-मायनिंग' },
  'msw-processing-plant': { hi: 'MSW प्रसंस्करण प्लांट', mr: 'MSW प्रक्रिया प्लांट' },
  'material-recovery-facility-mrf-plant': { hi: 'मटेरियल रिकवरी फ़ैसिलिटी (MRF)', mr: 'मटेरियल रिकव्हरी फॅसिलिटी (MRF)' },
  'rdf-afr-plant': { hi: 'RDF और AFR प्लांट', mr: 'RDF व AFR प्लांट' },
};

export function localName(lang: Lang, slug: string, fallback: string): string {
  if (lang === 'en') return fallback;
  return localNames[slug]?.[lang] ?? fallback;
}
