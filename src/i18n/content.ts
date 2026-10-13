// Copy shared by several pages, in English, Hindi and Marathi.
import type { Lang } from './ui';

export const serviceShorts: Record<Lang, Record<string, string>> = {
  en: {
    'bio-mining-and-legacy-waste-management': 'Clearing decades-old dumpsites and returning the land to the city.',
    'msw-processing-plant': 'Integrated plants that turn mixed municipal waste into compost, recyclables and RDF.',
    'material-recovery-facility-mrf-plant': 'Turnkey MRF plants that recover recyclables from mixed dry waste.',
    'rdf-afr-plant': 'Plants that turn waste into kiln-ready alternative fuel for cement and industry.',
  },
  hi: {
    'bio-mining-and-legacy-waste-management': 'दशकों पुराने डंपसाइट साफ़ कर ज़मीन शहर को लौटाना।',
    'msw-processing-plant': 'मिश्रित नगरपालिका कचरे को कम्पोस्ट, रीसायकल योग्य सामग्री और RDF में बदलने वाले एकीकृत प्लांट।',
    'material-recovery-facility-mrf-plant': 'मिश्रित सूखे कचरे से रीसायकल योग्य सामग्री अलग करने वाले टर्नकी MRF प्लांट।',
    'rdf-afr-plant': 'सीमेंट और उद्योगों के लिए कचरे को भट्ठी-योग्य वैकल्पिक ईंधन में बदलने वाले प्लांट।',
  },
  mr: {
    'bio-mining-and-legacy-waste-management': 'दशकांपासून साचलेले कचरा डेपो साफ करून जमीन पुन्हा शहराच्या उपयोगासाठी.',
    'msw-processing-plant': 'मिश्र नागरी कचऱ्याचे कंपोस्ट, पुनर्वापरयोग्य साहित्य आणि RDF मध्ये रूपांतर करणारे एकात्मिक प्लांट.',
    'material-recovery-facility-mrf-plant': 'मिश्र सुक्या कचऱ्यातून पुनर्वापरयोग्य साहित्य वेगळे करणारे टर्नकी MRF प्लांट.',
    'rdf-afr-plant': 'सिमेंट व उद्योगांसाठी कचऱ्याचे भट्टीयोग्य पर्यायी इंधनात रूपांतर करणारे प्लांट.',
  },
};

export const serviceHighlights: Record<Lang, Record<string, string[]>> = {
  en: {
    'bio-mining-and-legacy-waste-management': [
      'Site survey, DPR and controlled excavation',
      'Windrow bio-stabilisation and trommel segregation',
      'Land reclaimed for parks, solar or infrastructure',
    ],
    'msw-processing-plant': ['Up to 90% resource recovery', 'Rejects to landfill below 20%', 'Modular, from 10 TPD to 1,000+ TPD'],
    'material-recovery-facility-mrf-plant': [
      'Recovers 70–90% of recyclables and RDF',
      'Manual to fully automated sorting lines',
      'PAN-India installation and AMC',
    ],
    'rdf-afr-plant': ['Kiln-ready RDF at 50–70 mm', '10 TPH and 20 TPH integrated lines', 'Reduces landfill dependency by 70–80%'],
  },
  hi: {
    'bio-mining-and-legacy-waste-management': [
      'साइट सर्वेक्षण, DPR और नियंत्रित खुदाई',
      'विंडरो बायो-स्थिरीकरण और ट्रॉमेल पृथक्करण',
      'पार्क, सौर ऊर्जा या बुनियादी ढाँचे के लिए ज़मीन की पुनर्प्राप्ति',
    ],
    'msw-processing-plant': ['90% तक संसाधन पुनर्प्राप्ति', 'लैंडफ़िल में 20% से कम अवशेष', 'मॉड्यूलर, 10 TPD से 1,000+ TPD तक'],
    'material-recovery-facility-mrf-plant': [
      '70–90% रीसायकल योग्य सामग्री और RDF की पुनर्प्राप्ति',
      'मैनुअल से पूर्ण स्वचालित छँटाई लाइनें',
      'पूरे भारत में स्थापना और AMC',
    ],
    'rdf-afr-plant': ['50–70 mm आकार का भट्ठी-योग्य RDF', '10 TPH और 20 TPH एकीकृत लाइनें', 'लैंडफ़िल पर निर्भरता 70–80% तक कम'],
  },
  mr: {
    'bio-mining-and-legacy-waste-management': [
      'साइट सर्वेक्षण, DPR आणि नियंत्रित उत्खनन',
      'विंड्रो बायो-स्थिरीकरण आणि ट्रॉमेल विलगीकरण',
      'उद्याने, सौर प्रकल्प किंवा पायाभूत सुविधांसाठी जमीन पुन्हा उपलब्ध',
    ],
    'msw-processing-plant': ['90% पर्यंत संसाधन पुनर्प्राप्ती', 'लँडफिलमध्ये 20% पेक्षा कमी अवशेष', 'मॉड्युलर, 10 TPD पासून 1,000+ TPD पर्यंत'],
    'material-recovery-facility-mrf-plant': [
      '70–90% पुनर्वापरयोग्य साहित्य व RDF ची पुनर्प्राप्ती',
      'मॅन्युअल ते पूर्ण स्वयंचलित वर्गीकरण लाइन',
      'संपूर्ण भारतात उभारणी आणि AMC',
    ],
    'rdf-afr-plant': ['50–70 mm आकाराचे भट्टीयोग्य RDF', '10 TPH आणि 20 TPH एकात्मिक लाइन', 'लँडफिलवरील अवलंबित्व 70–80% पर्यंत कमी'],
  },
};

export const approachSteps: Record<Lang, [string, string][]> = {
  en: [
    ['Design & engineering', 'Site study, waste characterisation and a plant layout sized to your tonnage, land and budget.'],
    ['Manufacturing & procurement', 'Trommels, separators, shredders, balers and conveyors built in-house, every component specified for 24×7 duty.'],
    ['Erection & commissioning', 'Our engineers install, integrate and commission the line on site, then train your operators.'],
    ['Operation & maintenance', 'Long-term O&M, AMC and spares keep the plant running at capacity.'],
  ],
  hi: [
    ['डिज़ाइन और इंजीनियरिंग', 'साइट अध्ययन, कचरे का विश्लेषण और आपकी क्षमता, ज़मीन व बजट के अनुसार प्लांट लेआउट।'],
    ['निर्माण और खरीद', 'ट्रॉमेल, सेपरेटर, श्रेडर, बेलर और कन्वेयर हमारे अपने कारखाने में, 24×7 काम के लिए।'],
    ['स्थापना और कमीशनिंग', 'हमारे इंजीनियर साइट पर लाइन स्थापित और कमीशन करते हैं, फिर आपके ऑपरेटरों को प्रशिक्षण देते हैं।'],
    ['संचालन और रखरखाव', 'दीर्घकालीन O&M, AMC और स्पेयर पार्ट्स से प्लांट पूरी क्षमता पर चलता रहता है।'],
  ],
  mr: [
    ['डिझाइन व अभियांत्रिकी', 'साइट अभ्यास, कचऱ्याचे विश्लेषण आणि तुमची क्षमता, जागा व बजेटनुसार प्लांटचा आराखडा.'],
    ['निर्मिती व खरेदी', 'ट्रॉमेल, सेपरेटर, श्रेडर, बेलर आणि कन्व्हेयर आमच्याच कारखान्यात, 24×7 कामासाठी.'],
    ['उभारणी व कमिशनिंग', 'आमचे अभियंते साइटवर लाइन बसवून कार्यान्वित करतात आणि तुमच्या ऑपरेटरना प्रशिक्षण देतात.'],
    ['संचालन व देखभाल', 'दीर्घकालीन O&M, AMC आणि सुटे भाग यामुळे प्लांट पूर्ण क्षमतेने चालू राहतो.'],
  ],
};

export const consultancyCopy: Record<Lang, { name: string; text: string }> = {
  en: {
    name: 'Zero Waste Consultancy & Implementation',
    text: 'Planning, Detailed Project Reports, plant design and implementation support for municipalities, industries and institutions working towards zero waste to landfill.',
  },
  hi: {
    name: 'शून्य-कचरा परामर्श और कार्यान्वयन',
    text: 'शून्य लैंडफ़िल की ओर बढ़ रहे नगर निकायों, उद्योगों और संस्थानों के लिए योजना, विस्तृत परियोजना रिपोर्ट (DPR), प्लांट डिज़ाइन और कार्यान्वयन सहायता।',
  },
  mr: {
    name: 'शून्य-कचरा सल्ला व अंमलबजावणी',
    text: 'शून्य लँडफिलकडे वाटचाल करणाऱ्या नागरी संस्था, उद्योग आणि संस्थांसाठी नियोजन, सविस्तर प्रकल्प अहवाल (DPR), प्लांट डिझाइन आणि अंमलबजावणी सहाय्य.',
  },
};

/** Shown next to links from a Hindi or Marathi page to an English-only page. */
export const inEnglish: Record<Lang, string> = {
  en: '',
  hi: '(अंग्रेज़ी में)',
  mr: '(इंग्रजीत)',
};

/** Machinery category names for filters and cards. */
export const categoryNames: Record<Lang, Record<string, string>> = {
  en: {},
  hi: {
    'Screening & separation': 'स्क्रीनिंग और पृथक्करण',
    'Size reduction': 'आकार घटाना',
    Compaction: 'कॉम्पैक्शन (बेलिंग)',
    'Organic waste': 'जैविक कचरा',
    'Material handling': 'सामग्री परिवहन',
    Infrastructure: 'बुनियादी ढाँचा',
    Vehicles: 'वाहन',
  },
  mr: {
    'Screening & separation': 'स्क्रीनिंग व विलगीकरण',
    'Size reduction': 'आकार कमी करणे',
    Compaction: 'कॉम्पॅक्शन (बेलिंग)',
    'Organic waste': 'सेंद्रिय कचरा',
    'Material handling': 'साहित्य हाताळणी',
    Infrastructure: 'पायाभूत सुविधा',
    Vehicles: 'वाहने',
  },
};

export const categoryName = (lang: Lang, category: string) => categoryNames[lang][category] ?? category;

export const statusLabels: Record<Lang, Record<string, string>> = {
  en: { Completed: 'Completed', Ongoing: 'Ongoing', Commissioned: 'Commissioned' },
  hi: { Completed: 'पूर्ण', Ongoing: 'जारी', Commissioned: 'कमीशन किया गया' },
  mr: { Completed: 'पूर्ण', Ongoing: 'सुरू', Commissioned: 'कार्यान्वित' },
};

/** Hindi and Marathi wording for the six featured projects, in the same order as featuredProjects. */
export const featuredProjectsLocal: Record<'hi' | 'mr', Record<string, unknown>[]> = {
  hi: [
    { client: 'पिंपरी चिंचवड महानगरपालिका', location: 'मोशी डंपिंग ग्राउंड, महाराष्ट्र', scope: 'पुराने कचरे का बायो-माइनिंग', note: '7,02,900 m³ पूर्ण' },
    { client: 'भिवंडी निज़ामपुर महानगरपालिका', location: 'महाराष्ट्र', scope: 'पुराने कचरे का बायो-माइनिंग' },
    { client: 'दक्षिण दिल्ली नगर निगम (रीकार्ट इनोवेशन्स के लिए)', location: 'भलस्वा डंपिंग ग्राउंड, दिल्ली', scope: 'दो बायो-माइनिंग प्लांट' },
    {
      client: 'तेलंगाना राज्य, क्लस्टर 6',
      location: '14 नगरपालिकाएँ, तेलंगाना',
      scope: 'बायो-माइनिंग और 10 वर्ष का ताज़ा कचरा प्रबंधन',
      scale: '5 लाख टन',
      count: { value: 5, suffix: ' लाख टन' },
    },
    { client: 'जैसलमेर नगर परिषद', location: 'राजस्थान', scope: 'MSW प्रसंस्करण और सैनिटरी लैंडफ़िल: डिज़ाइन, निर्माण और 30 वर्ष संचालन' },
    { client: 'दौसा नगर परिषद', location: 'राजस्थान', scope: 'MSW प्रसंस्करण और सैनिटरी लैंडफ़िल: डिज़ाइन, निर्माण और 30 वर्ष संचालन' },
  ],
  mr: [
    { client: 'पिंपरी चिंचवड महानगरपालिका', location: 'मोशी कचरा डेपो, महाराष्ट्र', scope: 'जुन्या कचऱ्याचे बायो-मायनिंग', note: '7,02,900 m³ पूर्ण' },
    { client: 'भिवंडी निजामपूर महानगरपालिका', location: 'महाराष्ट्र', scope: 'जुन्या कचऱ्याचे बायो-मायनिंग' },
    { client: 'दक्षिण दिल्ली महानगरपालिका (रीकार्ट इनोव्हेशन्ससाठी)', location: 'भलस्वा कचरा डेपो, दिल्ली', scope: 'दोन बायो-मायनिंग प्लांट' },
    {
      client: 'तेलंगणा राज्य, क्लस्टर 6',
      location: '14 नगरपालिका, तेलंगणा',
      scope: 'बायो-मायनिंग आणि 10 वर्षांचे ताज्या कचऱ्याचे व्यवस्थापन',
      scale: '5 लाख टन',
      count: { value: 5, suffix: ' लाख टन' },
    },
    { client: 'जैसलमेर नगर परिषद', location: 'राजस्थान', scope: 'MSW प्रक्रिया व सॅनिटरी लँडफिल: डिझाइन, बांधकाम व 30 वर्षे संचालन' },
    { client: 'दौसा नगर परिषद', location: 'राजस्थान', scope: 'MSW प्रक्रिया व सॅनिटरी लँडफिल: डिझाइन, बांधकाम व 30 वर्षे संचालन' },
  ],
};
