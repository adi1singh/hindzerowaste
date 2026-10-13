// Turnkey services. Copy from the current website and the company brochure.
// Slugs match the current site; rdf-afr-plant is new (content from the brochure).
import type { Item, Photo, SpecTable } from './products';

import biominingTrommelSite from '../assets/photos/biomining-trommel-site.jpg';
import biominingExcavator from '../assets/photos/biomining-excavator.jpg';
import biominingSiteWide from '../assets/photos/biomining-site-wide.jpg';
import biominingConveyor from '../assets/photos/biomining-conveyor.jpg';
import trommelDumpsite from '../assets/photos/trommel-dumpsite.jpg';
import mrfSortingFloor from '../assets/photos/mrf-sorting-floor.jpg';
import mrfBagging from '../assets/photos/mrf-bagging.jpg';
import sortingConveyor from '../assets/photos/sorting-conveyor.jpg';
import plantLineWide from '../assets/photos/plant-line-wide.jpg';
import mrfBalers from '../assets/photos/mrf-balers.jpg';
import shredderAdsLine from '../assets/photos/shredder-ads-line.jpg';
import heroPlantShed from '../assets/photos/hero-plant-shed.jpg';
import shredderBlades from '../assets/photos/shredder-blades.jpg';
import mrfFlowDiagram from '../assets/photos/mrf-flow-diagram.jpg';

export interface Service {
  slug: string;
  name: string;
  short: string;
  range: string;
  seoTitle: string;
  seoDescription: string;
  lead: string;
  overview: string[];
  images: Photo[];
  figure?: Photo & { caption: string };
  stepsTitle: string;
  steps: Item[];
  outputsTitle?: string;
  outputs?: Item[];
  benefits: string[];
  variantsTitle?: string;
  variants?: Item[];
  table?: SpecTable & { title: string };
  extraTitle?: string;
  extra?: string[];
  faqs?: { q: string; a: string }[];
  machinery: string[];
}

const INDICATIVE =
  'Specifications are indicative and are customised to waste composition, land availability and project requirements.';

export const services: Service[] = [
  {
    slug: 'bio-mining-and-legacy-waste-management',
    name: 'Bio-mining of Legacy Waste',
    short: 'Clearing decades-old dumpsites and returning the land to the city.',
    range: '100 – 450 TPD lines',
    seoTitle: 'Bio-mining & Legacy Waste Management Company in India',
    seoDescription:
      'Scientific bio-mining of legacy dumpsites: site survey, excavation, bio-stabilisation, trommel segregation and land reclamation. 87+ projects, compliant with SWM Rules 2016.',
    lead: 'We clear decades-old dumpsites scientifically: stabilising waste biologically, segregating it mechanically, recovering every usable fraction and handing the land back to the city.',
    overview: [
      'Legacy waste is old, unmanaged waste accumulated at open dumpsites and landfills: decomposed organic matter, plastics, construction debris and inert material. Left alone, these sites pollute soil, air and groundwater, and pose a constant fire risk.',
      'Under the Solid Waste Management Rules 2016, local bodies must clear legacy waste scientifically. Bio-mining does exactly that: waste is excavated, treated with bio-cultures and passed through trommels and separators that recover compost-like material, recyclables, RDF and inerts. What was a dumpsite becomes usable land.',
    ],
    images: [
      { src: biominingTrommelSite, alt: 'Bio-mining trommel line processing legacy waste on a dumpsite' },
      { src: biominingExcavator, alt: 'Excavator feeding legacy waste to a conveyor during bio-mining' },
      { src: biominingSiteWide, alt: 'Bio-mining plant working across a legacy dumpsite' },
      { src: biominingConveyor, alt: 'Discharge conveyor stacking segregated fractions at a bio-mining site' },
    ],
    stepsTitle: 'Our bio-mining process',
    steps: [
      {
        title: 'Site survey and characterisation',
        text: 'GIS mapping, drone surveys and laboratory analysis establish the waste quantity, moisture and organic content, groundwater condition and machinery layout, captured in a Detailed Project Report.',
      },
      {
        title: 'Excavation',
        text: 'Legacy waste is excavated with excavators and loaders under controlled conditions, with water sprinklers for dust suppression, PPE for every worker and care to avoid methane hazards.',
      },
      {
        title: 'Bio-stabilisation',
        text: 'Excavated waste is laid in windrows, sprayed with microbial culture and turned regularly at 40–60% moisture. Over two to four weeks, aerobic decomposition stabilises the organic fraction.',
      },
      {
        title: 'Mechanical segregation',
        text: 'Stabilised waste passes through trommel screens, air density separators, ballistic and magnetic separators that split it into clean output fractions.',
      },
      {
        title: 'Resource recovery',
        text: 'Each fraction goes to its best use, so that as little as possible returns to landfill.',
      },
      {
        title: 'Land reclamation',
        text: 'The cleared site is levelled, compacted and greened, ready for parks, solar plants, processing facilities or other infrastructure.',
      },
    ],
    outputsTitle: 'What a dumpsite becomes',
    outputs: [
      { title: 'Compost-like material', text: 'Fine soil fraction for landfill cover and soil conditioning.' },
      { title: 'Recyclables', text: 'Plastics, metals and glass diverted to authorised recyclers.' },
      { title: 'Refuse-derived fuel', text: 'Combustible fraction supplied to cement kilns and waste-to-energy plants.' },
      { title: 'Inerts', text: 'Used as road base, in construction and for landfill capping.' },
      { title: 'Reclaimed land', text: 'Valuable urban land returned for public use or development.' },
    ],
    benefits: [
      'Eliminates dumpsite hazards: methane, fires, odour and leachate',
      'Prevents groundwater contamination',
      'Recovers valuable urban land',
      'Generates revenue from RDF and recyclables',
      'Supports Swachh Bharat goals and city sanitation rankings',
      'Compliant with CPCB guidelines and SWM Rules 2016',
    ],
    extraTitle: 'Selected bio-mining work',
    extra: [
      'Pimpri Chinchwad Municipal Corporation, Moshi dumping ground: 8,00,000 m³ (ongoing)',
      'Bhiwandi Nizampur Municipal Corporation: 1,39,000 m³ completed',
      'Bhalaswa dumping ground, Delhi: two 300 TPD bio-mining plants supplied',
      'Telangana Cluster 6, 14 municipalities: bio-mining with ten years of fresh waste management',
    ],
    faqs: [
      {
        q: 'How long does a bio-mining project take?',
        a: 'Typically 6 to 24 months, depending on the quantity of legacy waste and the processing capacity deployed.',
      },
      {
        q: 'Can bio-mining pay for itself?',
        a: 'Recovered recyclables and RDF generate revenue, and the reclaimed land has significant value, which together offset much of the project cost.',
      },
      {
        q: 'Is bio-mining environmentally safe?',
        a: 'Yes, when carried out under government guidelines and pollution-control norms, with dust suppression, worker safety and scientific disposal of residual inerts.',
      },
      {
        q: 'Which machinery is used?',
        a: 'Excavators and loaders, windrow turners, trommel screens, air density separators, magnetic separators, conveyors and shredders for RDF. We manufacture the processing machinery in-house.',
      },
    ],
    machinery: ['rotary-trommel-machines', 'air-density-separator', 'disc-separator', 'conveyor-and-conveying-system'],
  },
  {
    slug: 'msw-processing-plant',
    name: 'MSW Processing Plants',
    short: 'Integrated plants that turn mixed municipal waste into compost, recyclables and RDF.',
    range: '10 – 300 TPD',
    seoTitle: 'MSW Processing Plant Manufacturer in India | Municipal Solid Waste',
    seoDescription:
      'Turnkey municipal solid waste processing plants from 10 to 300 TPD, scalable to 1000+ TPD. Up to 90% resource recovery and less than 20% rejects to landfill.',
    lead: 'Integrated plants that turn mixed municipal solid waste into compost, recyclables and refuse-derived fuel, recovering up to 90% of what arrives and sending less than 20% to landfill.',
    overview: [
      'Our MSW processing plants combine mechanical, biological and thermal technologies in one streamlined line: trommel and disc screening, shredding, air density separation, magnetic separation, baling and composting.',
      'Plants are modular, from 10 TPD for a town panchayat to 300 TPD cluster plants, and can expand to 1,000+ TPD as a city grows. Every plant is designed for compliance with the SWM Rules 2016 and CPCB norms.',
    ],
    images: [
      { src: plantLineWide, alt: 'MSW processing line with conveyors and separators inside a steel shed' },
      { src: mrfSortingFloor, alt: 'Sorting platform and recovered material at an MSW processing plant' },
      { src: sortingConveyor, alt: 'Workers recovering recyclables on a sorting conveyor' },
      { src: mrfBagging, alt: 'Recovered materials bagged for dispatch' },
    ],
    stepsTitle: 'Core processing units',
    steps: [
      {
        title: 'Reception and pre-sorting',
        text: 'Incoming waste is weighed, recorded and inspected on the tipping floor, where large and hazardous items are removed.',
      },
      {
        title: 'Mechanical segregation',
        text: 'Trommel screens separate by size, magnetic and eddy-current separators recover metals, and air classifiers split light plastics and paper from heavy inerts.',
      },
      {
        title: 'Biodegradable treatment',
        text: 'Organic fines are composted aerobically, or treated by bio-methanation to produce biogas and liquid fertiliser.',
      },
      {
        title: 'Dry waste recovery',
        text: 'PET, HDPE, paper and metals are baled for authorised recyclers; non-recyclable combustibles are shredded into RDF for cement kilns.',
      },
      {
        title: 'Scientific disposal',
        text: 'Only residual inerts go to an engineered landfill with liners, leachate collection and gas management.',
      },
    ],
    outputsTitle: 'Output fractions',
    outputs: [
      { title: 'Compost', text: 'Organic fines composted for agriculture and landscaping.' },
      { title: 'RDF', text: 'Plastic, paper, textiles and foils for AFR co-processing in cement plants.' },
      { title: 'Recyclables', text: 'Metals, glass, PET and other materials for recyclers.' },
      { title: 'Rejects', text: 'Inert residue, kept below 20%, to scientific landfill.' },
    ],
    benefits: [
      'Resource recovery of up to 90%',
      'Rejects to landfill kept below 20%',
      'Modular design, expandable from 10 TPD to 1,000+ TPD',
      'RDF for AFR co-processing in cement plants',
      'Compost for agriculture and landscaping',
      'Compliant with SWM Rules 2016 and CPCB norms',
    ],
    variantsTitle: 'Plant sizes',
    variants: [
      { title: '10 – 25 TPD', text: 'Small plants for villages and town panchayats.' },
      { title: '50 – 100 TPD', text: 'Medium plants for small municipalities.' },
      { title: '150 – 200 TPD', text: 'Large-scale urban plants.' },
      { title: '250 – 300 TPD', text: 'Cluster-based plants for cities and industrial townships.' },
    ],
    table: {
      title: 'Technical data',
      columns: ['Model', 'Capacity', 'Screening', 'Shredder', 'ADS', 'Power', 'Manpower'],
      rows: [
        ['HZWM-MSW10', '10 TPD', 'Trommel (5 – 50 mm)', '0.5 – 1 TPH', '–', '~30 kW', '5 – 8'],
        ['HZWM-MSW25', '25 TPD', 'Trommel / disc separator', '2 TPH', '3 TPH', '~60 kW', '10 – 12'],
        ['HZWM-MSW50', '50 TPD', 'Trommel + ADS', '5 TPH', '5 – 10 TPH', '~120 kW', '15 – 20'],
        ['HZWM-MSW100', '100 TPD', 'Trommel + disc + ADS', '10 TPH', '15 TPH', '~250 kW', '25 – 30'],
        ['HZWM-MSW200', '200 TPD', 'Multi-stage screening + ADS', '20 TPH', '30 TPH', '~400 kW', '40 – 50'],
        ['HZWM-MSW300', '300 TPD', 'Trommel + disc + ADS + magnet', '30 TPH', '50 TPH', '~600 kW', '60 – 70'],
      ],
      note: INDICATIVE,
    },
    extraTitle: 'Technology and responsibility',
    extra: [
      'Automation and SCADA monitoring for real-time data and predictive maintenance',
      'Emission control with bio-filters and misting systems for odour and dust',
      'Treatment and reuse of leachate and process water',
      'Formal, safe livelihoods for informal waste pickers',
    ],
    faqs: [
      {
        q: 'What capacity do we need?',
        a: 'Plants are sized to your daily waste generation: 10–25 TPD suits a town panchayat, 50–100 TPD a small municipality, and 150–300 TPD large cities and clusters. We assess composition and growth before recommending a size.',
      },
      {
        q: 'Can the plant handle unsegregated waste?',
        a: 'Yes. Plants accept segregated or partially segregated mixed MSW; the screening and separation stages are configured to the waste you receive.',
      },
      {
        q: 'Do you operate plants after commissioning?',
        a: 'Yes. We offer long-term operation and maintenance. For example, our Jaisalmer and Dausa projects include design, construction and O&M for 30 years.',
      },
    ],
    machinery: ['rotary-trommel-machines', 'air-density-separator', 'industrial-shredder-machine', 'organic-waste-composter-machine'],
  },
  {
    slug: 'material-recovery-facility-mrf-plant',
    name: 'Material Recovery Facilities',
    short: 'Turnkey MRF plants that recover recyclables from mixed dry waste.',
    range: '5 – 1,000+ TPD',
    seoTitle: 'MRF Plant Manufacturer in India | Material Recovery Facility',
    seoDescription:
      'Turnkey Material Recovery Facility (MRF) plants from 5 TPD to 1,000+ TPD. Recover 70–90% of recyclables and RDF, with PAN-India installation and AMC support.',
    lead: 'A Material Recovery Facility sorts mixed dry waste into clean, saleable streams. We design, manufacture and commission turnkey MRF plants that recover 70–90% of recyclables and RDF.',
    overview: [
      'An MRF is the backbone of any municipal waste system. Our plants integrate feed hoppers, conveyors, trommel and disc screens, sorting lines, magnetic and eddy-current separators, air density separators, shredders and balers into a single, efficient process.',
      'We build MRF plants from 5 TPD to more than 1,000 TPD for municipal corporations, smart cities, town panchayats, airports, SEZs, industrial townships and commercial waste projects, and support them with installation, operator training and AMC across India.',
    ],
    images: [
      { src: mrfSortingFloor, alt: 'Material recovery facility with elevated sorting platform and bagged recyclables' },
      { src: sortingConveyor, alt: 'Manual sorting conveyor at a material recovery facility' },
      { src: mrfBalers, alt: 'Balers compacting recovered recyclables at an MRF' },
      { src: mrfBagging, alt: 'Segregated recyclables stored in bulk bags' },
    ],
    figure: {
      src: mrfFlowDiagram,
      alt: 'Functional zone plan of a material recovery facility, from receiving and weighing through pre-processing, sorting, RDF processing, baling and storage',
      caption: 'Typical MRF layout: receiving and weighing, pre-processing, sorting and segregation, RDF processing, baling and storage.',
    },
    stepsTitle: 'Major components',
    steps: [
      { title: 'Feeding hopper', text: 'Receives municipal solid waste from collection vehicles.' },
      { title: 'Belt conveyors', text: 'Move material between each processing stage.' },
      { title: 'Trommel screen', text: 'Separates waste by particle size.' },
      { title: 'Sorting conveyor', text: 'Lets trained workers pick recyclables efficiently and safely.' },
      { title: 'Magnetic separator', text: 'Removes ferrous metals automatically.' },
      { title: 'Air density separator', text: 'Separates lightweight from heavyweight materials.' },
      { title: 'Baler', text: 'Compresses recyclables into dense bales for transport.' },
      { title: 'Storage', text: 'Holds processed materials ready for dispatch.' },
    ],
    outputsTitle: 'Materials recovered',
    outputs: [
      { title: 'Plastics', text: 'PET, HDPE, LDPE and PP.' },
      { title: 'Paper and cardboard', text: 'Baled for paper mills.' },
      { title: 'Metals', text: 'Ferrous and non-ferrous, including aluminium.' },
      { title: 'Glass, textiles and rubber', text: 'Separated for specialist recyclers.' },
      { title: 'RDF', text: 'Non-recyclable combustibles prepared as fuel.' },
    ],
    benefits: [
      'Recovers 70–90% of recyclables and RDF',
      'Reduces landfill dependency by up to 80%',
      'Generates revenue from the sale of recyclables and RDF',
      'Lowers transportation costs',
      'Supports Swachh Bharat Mission and the circular economy',
      'Compliant with SWM Rules 2016 and CPCB norms',
    ],
    variantsTitle: 'Choosing a capacity',
    variants: [
      { title: '5 – 10 TPD', text: 'Small towns and nagar panchayats.' },
      { title: '25 – 50 TPD', text: 'Municipal councils and mid-size cities.' },
      { title: '100 – 250 TPD', text: 'Municipal corporations, large cities and metro projects.' },
      { title: '500 – 1,000+ TPD', text: 'Mega facilities and city clusters, with modular expansion.' },
    ],
    table: {
      title: 'Technical data',
      columns: ['Model', 'Capacity', 'Conveyor width', 'Primary screening', 'Segregation', 'Power', 'Automation'],
      rows: [
        ['HZWM-MRF25', '25 TPD', '800 mm', 'Trommel (5 – 50 mm)', 'Manual sorting belt (4 – 6 persons)', '~50 kW', 'Manual'],
        ['HZWM-MRF100', '100 TPD', '1,000 mm', 'Trommel / disc separator', 'Semi-automated (8 – 10 persons)', '~150 kW', 'Semi-auto'],
        ['HZWM-MRF300', '300 TPD', '1,200 mm', 'Trommel + ADS + magnet', 'Mixed auto / manual', '~350 kW', 'Semi / full auto'],
        ['HZWM-MRF600', '600 TPD', '1,400 mm', 'Trommel + disc + ADS + magnet + ECS', 'Fully automated lines', '~600 kW', 'PLC'],
        ['HZWM-MRF1000', '1,000+ TPD', '1,600 mm', 'Multi-stage screening', 'Multiple automated lines', '1 MW+', 'PLC / SCADA'],
      ],
      note: INDICATIVE,
    },
    extraTitle: 'Why Hind Zero Waste',
    extra: [
      'Complete turnkey delivery: design, manufacture, installation, commissioning and training',
      'Customised plant design with heavy-duty, in-house machinery',
      'PAN-India installation and commissioning',
      'After-sales service and AMC support',
    ],
    faqs: [
      {
        q: 'What is the purpose of an MRF plant?',
        a: 'An MRF recovers recyclable materials such as plastic, paper, metal and glass from mixed waste, reducing landfill disposal and improving recycling efficiency.',
      },
      {
        q: 'What capacities are available?',
        a: 'We build MRF plants from 5 TPD to more than 1,000 TPD, customised to the project.',
      },
      {
        q: 'Can the plant process mixed municipal waste?',
        a: 'Yes. Our MRF plants process mixed municipal solid waste after initial segregation and recover valuable recyclable materials.',
      },
      {
        q: 'Which machines are included?',
        a: 'Typically a feeding hopper, conveyors, trommel screen, sorting conveyor, magnetic separator, air density separator, baler and storage systems.',
      },
      {
        q: 'Do you provide turnkey solutions?',
        a: 'Yes: design, manufacturing, installation, commissioning, operator training and after-sales support.',
      },
    ],
    machinery: ['conveyor-and-conveying-system', 'rotary-trommel-machines', 'air-density-separator', 'hydraulic-baler-machine'],
  },
  {
    slug: 'rdf-afr-plant',
    name: 'RDF & AFR Plants',
    short: 'Plants that turn waste into kiln-ready alternative fuel for cement and industry.',
    range: '10 & 20 TPH',
    seoTitle: 'RDF & AFR Plant Manufacturer | Refuse-Derived Fuel for Cement Kilns',
    seoDescription:
      'Integrated 10 TPH and 20 TPH AFR plants that convert MSW, industrial and legacy waste into kiln-ready RDF for cement, steel and power plants.',
    lead: 'Integrated plants that convert municipal, industrial and legacy waste into kiln-ready Refuse-Derived Fuel for cement kilns, steel plants and power stations.',
    overview: [
      'RDF is made from the non-recyclable, combustible fraction of waste. Shredded to a uniform size with controlled moisture and dust, it replaces coal as an Alternative Fuel and Raw Material (AFR) in cement kilns, reducing dependence on fossil fuels and on landfill.',
      'Our AFR plants combine material handling, disc screening, air density separation and two-stage shredding to give a consistent, high-calorific fuel. We also build RDF shredding facilities at cement factories, preparing fuel on site for efficient co-processing.',
    ],
    images: [
      { src: shredderAdsLine, alt: 'RDF line with shredder and air density separator in a processing shed' },
      { src: heroPlantShed, alt: 'RDF and segregation line installed in a PEB shed' },
      { src: shredderBlades, alt: 'Twin-shaft shredder cutting chamber for RDF preparation' },
    ],
    stepsTitle: 'From waste to kiln-ready fuel',
    steps: [
      { title: 'Loading and feeding', text: 'Wide, heavy-duty belt conveyors with adjustable speed feed the line evenly.' },
      { title: 'Disc separation', text: 'A disc separator removes oversize items and inerts.' },
      { title: 'Air density separation', text: 'Light combustibles are lifted away from heavy fractions.' },
      { title: 'Primary shredding', text: 'A single-shaft shredder reduces material to 80–150 mm.' },
      { title: 'Secondary shredding', text: 'A twin-shaft shredder refines it to a uniform 50–70 mm for consistent kiln feeding.' },
    ],
    outputsTitle: 'Capacity variants',
    outputs: [
      {
        title: '10 TPH AFR plant',
        text: 'Mixed MSW, legacy or dry waste in; about 7–8 TPH of RDF out. For medium-scale cement plants and regional RDF hubs.',
      },
      {
        title: '20 TPH AFR plant',
        text: 'Large waste streams from MSW plants or industrial clusters in; about 15–16 TPH of RDF out. For large cement plants and multi-city supply.',
      },
    ],
    benefits: [
      'Reduces landfill dependency by 70–80%',
      'Produces kiln-ready RDF with high calorific value',
      'Recovers recyclables and reduces rejects',
      'Continuous, reliable operation on a robust design',
      'Supports Swachh Bharat Mission and circular economy goals',
    ],
    table: {
      title: 'Plant configuration',
      columns: ['Equipment', '10 TPH plant', '20 TPH plant', 'Remarks'],
      rows: [
        ['Loading & feeding conveyor', '1,200 mm wide, 15 HP', '1,600 mm wide, 20 HP', 'Adjustable speed, heavy-duty belt'],
        ['Disc separator', '30 TPH', '50 TPH, 10 kW drive', 'Removes oversize and inerts'],
        ['Air density separator', '30,000 – 40,000 m³/h, 40 HP fan', '70,000 – 90,000 m³/h, 50 HP fan', 'Light vs heavy separation'],
        ['Primary shredder', '10 TPH single-shaft, 150 HP', '20 TPH single-shaft, 200 HP', '80 – 150 mm output'],
        ['Secondary shredder', '10 TPH twin-shaft, 150 HP', '20 TPH twin-shaft, 200 HP', '50 – 70 mm output'],
        ['Control panel', 'PLC with VFD, 415 V', 'PLC with VFD, 415 V', 'Automation and safety'],
      ],
      note: INDICATIVE,
    },
    machinery: ['disc-separator', 'air-density-separator', 'industrial-shredder-machine', 'conveyor-and-conveying-system'],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);

// Offered alongside the four plant types (listed on the current homepage).
export const consultancy = {
  name: 'Zero Waste Consultancy & Implementation',
  text: 'Planning, Detailed Project Reports, plant design and implementation support for municipalities, industries and institutions working towards zero waste to landfill.',
};

export { trommelDumpsite as servicesHeroImage };
