// Machinery catalogue. Copy is drawn from the current website and the company
// brochure; model numbers and technical data are the brochure's "indicative"
// figures. Page addresses (slugs) match the current site.
import type { ImageMetadata } from 'astro';

import trommelDumpsite from '../assets/photos/trommel-dumpsite.jpg';
import biominingTrommelSite from '../assets/photos/biomining-trommel-site.jpg';
import twinTrommels from '../assets/photos/twin-trommels.jpg';
import trommelRender from '../assets/photos/trommel-render.jpg';
import adsMachine from '../assets/photos/ads-machine.jpg';
import adsMachineTall from '../assets/photos/ads-machine-tall.jpg';
import adsRender from '../assets/photos/ads-render.jpg';
import discSeparator from '../assets/photos/disc-separator.jpg';
import discShafts from '../assets/photos/disc-shafts.jpg';
import discScreen from '../assets/photos/disc-screen.jpg';
import shredderBlades from '../assets/photos/shredder-blades.jpg';
import shredderRotor from '../assets/photos/shredder-rotor.jpg';
import wetWasteShredder from '../assets/photos/wet-waste-shredder.jpg';
import shredderRender from '../assets/photos/shredder-render.jpg';
import horizontalBaler from '../assets/photos/horizontal-baler.jpg';
import verticalBaler from '../assets/photos/vertical-baler.jpg';
import verticalBalerFactory from '../assets/photos/vertical-baler-factory.jpg';
import mrfBalers from '../assets/photos/mrf-balers.jpg';
import owcMachine from '../assets/photos/owc-machine.jpg';
import owcStudio from '../assets/photos/owc-studio.jpg';
import inclinedConveyor from '../assets/photos/inclined-conveyor.jpg';
import sortingConveyor from '../assets/photos/sorting-conveyor.jpg';
import plantLineWide from '../assets/photos/plant-line-wide.jpg';
import conveyorRender from '../assets/photos/conveyor-render.jpg';
import pebInterior from '../assets/photos/peb-shed-interior.jpg';
import pebStructure from '../assets/photos/peb-structure.jpg';
import pebExterior from '../assets/photos/peb-shed-exterior.jpg';
import heroPlantShed from '../assets/photos/hero-plant-shed.jpg';
import suctionVehicle from '../assets/photos/suction-vehicle.jpg';
import suctionVehicleRear from '../assets/photos/suction-vehicle-rear.jpg';

export interface Photo {
  src: ImageMetadata;
  alt: string;
}

export interface Item {
  title: string;
  text: string;
}

export interface SpecTable {
  columns: string[];
  rows: string[][];
  note?: string;
}

export interface Product {
  slug: string;
  name: string;
  category: string;
  /** One line for cards and menus. */
  short: string;
  /** Capacity range shown on cards. */
  range: string;
  seoTitle: string;
  seoDescription: string;
  lead: string;
  overview: string[];
  images: Photo[];
  variantsTitle?: string;
  variants?: Item[];
  features: Item[];
  stepsTitle?: string;
  steps?: Item[];
  applications: string[];
  specs?: { label: string; value: string }[];
  table?: SpecTable;
  video?: { id: string; title: string };
  related: string[];
}

const INDICATIVE =
  'Specifications are indicative and are customised to waste type, throughput, land availability and project requirements.';

export const products: Product[] = [
  {
    slug: 'rotary-trommel-machines',
    name: 'Rotary Trommel Screen',
    category: 'Screening & separation',
    short: 'Heavy-duty drum screens that grade legacy waste and MSW by particle size.',
    range: '100 – 450 TPD',
    seoTitle: 'Rotary Trommel Screen Manufacturer in India | Bio-mining Trommel',
    seoDescription:
      'Heavy-duty rotary trommel screens from 100 to 450 TPD for legacy waste bio-mining and MSW processing. Screening from 5 mm to 150 mm, VFD drives, dedicated RDF conveyors.',
    lead: 'A heavy-duty rotating drum that separates waste by size. Fines and soil fall through the screen while plastics, RDF and oversize travel on. It is the workhorse of every bio-mining and MSW line we build.',
    overview: [
      'A rotary trommel is a perforated cylindrical drum that turns on a slight incline. As material advances along its length, fines pass through the mesh and larger fractions exit at the far end, giving clean, consistent separation in wet or dry conditions.',
      'Our bio-mining trommel is engineered for large-scale legacy waste and municipal solid waste. Each line combines a loading and feeding conveyor, a heavy-duty drum with screening sizes from 5 mm to 150 mm, separate product conveyors for each fraction, a dedicated conveyor for high-calorific RDF, and an automated heavy-duty control panel.',
    ],
    images: [
      { src: trommelDumpsite, alt: 'Hind Zero Waste rotary trommel screen working at a legacy waste dumpsite' },
      { src: biominingTrommelSite, alt: 'Trommel screen with feed and product conveyors on a bio-mining site' },
      { src: twinTrommels, alt: 'Two bio-mining trommels with green screening drums' },
      { src: trommelRender, alt: 'Rotary trommel screen with inclined feed and discharge conveyors' },
    ],
    variantsTitle: 'Capacities offered',
    variants: [
      { title: '100 TPD', text: 'Compact model for small municipalities and pilot projects.' },
      { title: '200 TPD', text: 'Mid-capacity line for towns and medium-scale bio-mining.' },
      { title: '300 TPD', text: 'Large-scale bio-mining with a faster turnaround.' },
      { title: '450 TPD', text: 'Heavy-duty plant for mega projects and large urban local bodies.' },
    ],
    features: [
      {
        title: 'Industrial-grade drum',
        text: 'Fully welded heavy-duty MS/SS drum with a wear-resistant lining, built for abrasive, continuous duty.',
      },
      {
        title: 'Screening to suit the site',
        text: 'Apertures from 5 mm to 150 mm, configured to separate fines, soil, compostables, recyclables and RDF.',
      },
      {
        title: 'Metered feeding',
        text: 'A belt feed conveyor with adjustable speed gives the drum a uniform, controlled load.',
      },
      {
        title: 'Variable-speed drive',
        text: 'Gearbox and motor with VFD control, so drum speed can be tuned to the material.',
      },
      {
        title: 'Separate output streams',
        text: 'Dedicated conveyors for fines, RDF and oversize keep every fraction clean.',
      },
      {
        title: 'Easy to maintain',
        text: 'Side inspection doors and easy-access panels keep downtime to a minimum.',
      },
    ],
    applications: [
      'Legacy waste bio-mining',
      'Municipal solid waste processing',
      'Compost and soil screening',
      'Construction and demolition waste',
      'Mining and quarry grading',
    ],
    specs: [
      { label: 'Screen sizes', value: '5 – 150 mm (customisable)' },
      { label: 'Drum', value: 'Fully welded heavy-duty MS/SS with wear-resistant lining' },
      { label: 'Drive', value: 'Gearbox and motor with VFD control' },
      { label: 'Feeding', value: 'Belt conveyor with adjustable speed' },
      { label: 'Output conveyors', value: 'Separate for fines, RDF and oversize' },
      { label: 'Control', value: 'Heavy-duty PLC panel with safety features' },
      { label: 'Mobility', value: 'Fixed or skid-mounted; wheel-mounted on request' },
      { label: 'Service access', value: 'Side inspection doors' },
    ],
    table: {
      columns: ['Model', 'Capacity', 'Drum dia.', 'Drum length', 'Screening', 'Power', 'Conveyors', 'Panel'],
      rows: [
        ['HZWM-T100', '100 TPD', '1,200 mm', '4.5 m', '5 – 100 mm', '~18 HP', '3 (RDF, fines)', 'Standard'],
        ['HZWM-T200', '200 TPD', '1,500 mm', '6 m', '5 – 120 mm', '~22 HP', '4 (fines, RDF, 2 product)', 'Heavy-duty'],
        ['HZWM-T300', '300 TPD', '2,200 mm', '7.2 m', '5 – 150 mm', '~40 HP', '4 – 5 (custom)', 'Heavy-duty with VFD'],
        ['HZWM-T450', '450 TPD', '2,500 mm', '10 m', '5 – 150 mm', '~55 HP', '4+ (as per site)', 'Advanced PLC'],
      ],
      note: INDICATIVE,
    },
    video: { id: 'NN7rwELXIB4', title: 'Rotary trommel screen in operation' },
    related: ['air-density-separator', 'disc-separator', 'conveyor-and-conveying-system'],
  },
  {
    slug: 'air-density-separator',
    name: 'Air Density Separator',
    category: 'Screening & separation',
    short: 'Air classification that lifts light combustibles away from heavy inerts.',
    range: '1 – 50 TPH',
    seoTitle: 'Air Density Separator (ADS) for MSW, MRF & Bio-mining',
    seoDescription:
      'Air density separators from 1 to 50 TPH that split light combustibles from heavy inerts at 90–95% efficiency. For RDF, MRF, MSW and legacy waste bio-mining plants.',
    lead: 'An adjustable air stream separates waste by density, lifting plastics, paper and foils away from stones, glass and metal. It is the key to clean, high-calorific RDF.',
    overview: [
      'The Air Density Separator (ADS) works on the principle of air classification. Inside the separation chamber, a controlled air stream carries light fractions such as plastics, paper, foils and RDF to one outlet, while heavy fractions such as stones, glass, metals and inerts drop to another.',
      'The result is better resource recovery, fewer rejects and higher-quality RDF, which makes the ADS a critical stage in bio-mining, MRF and MSW processing plants.',
    ],
    images: [
      { src: adsMachine, alt: 'Air density separator with inclined feed conveyor installed in a processing shed' },
      { src: adsMachineTall, alt: 'Air density separator chamber and discharge conveyor' },
      { src: adsRender, alt: 'Air density separator with feed conveyor' },
    ],
    variantsTitle: 'Capacities offered',
    variants: [
      { title: '1 – 5 TPH', text: 'Compact models for small MRFs and pilot projects.' },
      { title: '5 – 15 TPH', text: 'Medium models for municipalities and regional waste centres.' },
      { title: '15 – 30 TPH', text: 'Large models for high-throughput bio-mining and MSW facilities.' },
      { title: '30 – 50 TPH', text: 'Heavy-duty separators for mega and industrial-scale plants.' },
    ],
    features: [
      { title: '90–95% separation efficiency', text: 'Depending on waste composition, with clean light and heavy fractions.' },
      { title: 'Adjustable airflow', text: 'Fans with VFD control let operators tune the air stream to the material.' },
      { title: 'Dual discharge', text: 'Separate outlet conveyors for the light and heavy fractions.' },
      { title: 'PLC and VFD control', text: 'Advanced control panel with built-in safety features.' },
      { title: 'Built to wear', text: 'Heavy-duty mild steel construction with wear-resistant liners.' },
      { title: 'Dust control', text: 'An integrated cyclone and air-filtration system is available as an option.' },
    ],
    applications: ['RDF and AFR preparation', 'Legacy waste bio-mining', 'Material recovery facilities', 'MSW processing plants'],
    specs: [
      { label: 'Working principle', value: 'Airflow-based separation of light and heavy fractions' },
      { label: 'Separation efficiency', value: '90 – 95% (depending on waste composition)' },
      { label: 'Discharge', value: 'Dual outlet conveyors, light and heavy fraction' },
      { label: 'Air flow control', value: 'Adjustable fans with VFD' },
      { label: 'Feeding', value: 'Belt conveyor or chute feeder' },
      { label: 'Construction', value: 'Heavy-duty mild steel with wear-resistant liners' },
      { label: 'Mobility', value: 'Fixed or skid-mounted; portable versions on request' },
      { label: 'Dust control', value: 'Integrated cyclone / air filtration (optional)' },
    ],
    table: {
      columns: ['Model', 'Capacity', 'Airflow (m³/h)', 'Fan power', 'Panel', 'Typical use'],
      rows: [
        ['HZWM-ADS1', '1 TPH', '3,000 – 5,000', '10 HP', 'Standard', 'Small MRFs, R&D'],
        ['HZWM-ADS5', '5 TPH', '10,000 – 15,000', '15 HP', 'Heavy-duty', 'Small municipalities, bio-mining'],
        ['HZWM-ADS15', '15 TPH', '30,000 – 45,000', '25 HP', 'PLC', 'Mid-size MRFs, MSW plants'],
        ['HZWM-ADS30', '30 TPH', '60,000 – 80,000', '35 HP', 'PLC with VFD', 'Large bio-mining projects'],
        ['HZWM-ADS50', '50 TPH', '1,00,000+', '50 HP', 'Advanced PLC', 'Mega MSW and RDF plants'],
      ],
      note: INDICATIVE,
    },
    related: ['rotary-trommel-machines', 'disc-separator', 'industrial-shredder-machine'],
  },
  {
    slug: 'disc-separator',
    name: 'Disc Separator',
    category: 'Screening & separation',
    short: 'Rotating disc shafts that strip oversize from fines ahead of shredding.',
    range: '5 – 50+ TPH',
    seoTitle: 'Disc Separator for MSW & Legacy Waste Processing',
    seoDescription:
      'Disc separators from 5 to 50+ TPH that separate oversize from fines by size, shape and rolling behaviour. For MSW plants, bio-mining, RDF and compost plants.',
    lead: 'Rows of rotating shafts fitted with profiled discs agitate and carry waste forward, separating oversize from fines by size, shape and rolling behaviour.',
    overview: [
      'The disc separator is a vital screening stage in MSW plants and legacy waste bio-mining. Oversize fractions such as stones, plastics, textiles and bulky items ride over the discs, while fines and compostable material fall through for downstream processing.',
      'A disc screen ahead of shredding and air separation removes oversize before it reaches the shredder, improves RDF quality and lifts the throughput of MRF, RDF and compost plants.',
    ],
    images: [
      { src: discSeparator, alt: 'Disc separator with red screening discs in a steel frame' },
      { src: discShafts, alt: 'Close-up of disc separator shafts during fabrication' },
      { src: discScreen, alt: 'Compact disc screen with discharge hopper' },
    ],
    variantsTitle: 'Capacities offered',
    variants: [
      { title: '5 – 10 TPH', text: 'Compact units for small MRFs and legacy waste projects.' },
      { title: '10 – 20 TPH', text: 'Medium plants for urban local bodies and contractors.' },
      { title: '20 – 50 TPH', text: 'Large-scale MSW and legacy waste facilities.' },
      { title: 'Above 50 TPH', text: 'Custom-engineered solutions for mega projects.' },
    ],
    features: [
      { title: 'Adjustable separation size', text: 'Typically 30 – 100 mm, set to suit the downstream process.' },
      { title: 'Wear-resistant discs', text: 'Heavy-duty MS/SS construction with discs built for abrasive waste.' },
      { title: 'VFD-controlled drive', text: 'Electric motor and gearbox with variable-frequency control.' },
      { title: 'Twin discharge', text: 'Separate oversize and undersize conveyors.' },
      { title: 'Safe by design', text: 'Guarded drive parts and emergency stop controls.' },
      { title: 'Flexible feeding', text: 'Conveyor or hopper-based feeding to fit the plant layout.' },
    ],
    applications: ['Legacy waste bio-mining', 'MSW processing', 'RDF plants', 'Compost plants'],
    table: {
      columns: ['Model', 'Capacity', 'Disc size', 'Separation', 'Shafts', 'Motor', 'Typical use'],
      rows: [
        ['HZWM-DS5', '5 TPH', '300 mm', '30 – 70 mm', '8 – 10', '10 HP', 'Small MRFs, pilot legacy waste projects'],
        ['HZWM-DS10', '10 TPH', '400 mm', '30 – 80 mm', '12 – 14', '20 HP', 'Mid-size MSW plants'],
        ['HZWM-DS20', '20 TPH', '500 mm', '40 – 100 mm', '16 – 20', '40 HP', 'Large MSW and legacy waste'],
        ['HZWM-DS50', '50 TPH', '600 mm', '50 – 100 mm', '25+', '75 HP', 'Mega plants, RDF and compost pre-separation'],
      ],
      note: INDICATIVE,
    },
    related: ['rotary-trommel-machines', 'air-density-separator', 'industrial-shredder-machine'],
  },
  {
    slug: 'industrial-shredder-machine',
    name: 'Shredder Machines',
    category: 'Size reduction',
    short: 'Single- and twin-shaft shredders for wet organics, dry waste and RDF.',
    range: '100 kg/h – 20 TPH',
    seoTitle: 'Industrial Shredder Machine Manufacturer in India | Waste Shredder',
    seoDescription:
      'Wet and dry waste shredders from 100 kg/h to 20 TPH. Single- and twin-shaft machines with hardened alloy-steel cutters for RDF preparation, composting and recycling.',
    lead: 'High-torque, low-speed shredders that cut waste to a consistent size for composting and biogas, RDF preparation and recycling.',
    overview: [
      'We build two families of shredder. Wet waste shredders handle kitchen, food, market and garden waste, giving the uniform particle size that composting and biogas depend on. Dry waste shredders take plastics, packaging, paper, textiles, wood and bulky dry MSW, and are at the heart of RDF preparation.',
      'Hardened alloy-steel cutters on rotating shafts grab, tear and cut material down to the required size before it leaves through a screen or chute. Robust, energy-efficient and low-maintenance, our shredders are designed for continuous 24×7 operation.',
    ],
    images: [
      { src: shredderBlades, alt: 'Twin-shaft shredder cutting chamber with hardened blades' },
      { src: shredderRotor, alt: 'Shredder rotor with alloy-steel cutters' },
      { src: wetWasteShredder, alt: 'Wet waste shredder with feed hopper' },
      { src: shredderRender, alt: 'Twin-shaft industrial shredder with hopper on a steel stand' },
    ],
    variantsTitle: 'Two families',
    variants: [
      { title: 'Wet waste shredder', text: '100 kg/h to 5 TPH, for kitchen, food, market and garden waste.' },
      { title: 'Dry waste shredder', text: 'From 250 kg/h to 20 TPH, single- or twin-shaft, for plastics, packaging and RDF.' },
    ],
    features: [
      { title: 'Hardened cutting system', text: 'High-strength alloy-steel blades and cutters on heavy shafts.' },
      { title: 'Adjustable output', text: 'Output size from 10 mm to 100 mm, depending on the requirement.' },
      { title: 'Up to 80% volume reduction', text: 'Less storage, fewer trips and material ready for baling or recycling.' },
      { title: 'Jam protection', text: 'Reverse rotation clears jams; overload protection guards the drive.' },
      { title: 'Safe operation', text: 'Interlocked doors, guarded drives and emergency stop, with optional PLC.' },
      { title: 'Flexible setup', text: 'Manual or conveyor feeding; stationary, skid-mounted or portable models.' },
    ],
    stepsTitle: 'How a shredder works',
    steps: [
      { title: 'Feeding', text: 'Waste enters the hopper by hand or on a conveyor.' },
      { title: 'Cutting', text: 'Rotating shafts with hardened cutters grab the material and pull it through at high torque and low speed.' },
      { title: 'Size reduction', text: 'Material is sliced continuously until it reaches the set particle size.' },
      { title: 'Discharge', text: 'Shredded output leaves through a screen or chute for RDF, composting or recycling.' },
    ],
    applications: [
      'RDF preparation for cement kilns',
      'Wet waste for composting and biogas',
      'Plastic and packaging recycling',
      'Textile, wood and bulky waste',
      'Integrated MSW plants',
    ],
    specs: [
      { label: 'Cutting mechanism', value: 'High-strength alloy-steel blades and cutters' },
      { label: 'Output size', value: '10 – 100 mm (adjustable)' },
      { label: 'Drive', value: 'Heavy-duty motor with gearbox (direct or belt drive)' },
      { label: 'Construction', value: 'Mild steel / SS fabrication with corrosion protection' },
      { label: 'Feeding', value: 'Manual or conveyor-fed' },
      { label: 'Control', value: 'Panel with overload protection and emergency stop; optional PLC' },
      { label: 'Mobility', value: 'Stationary or skid-mounted; portable units for small models' },
    ],
    table: {
      columns: ['Model', 'Type', 'Capacity', 'Input material', 'Output size', 'Motor', 'Feeding'],
      rows: [
        ['HZWM-WWS100', 'Wet', '100 kg/h', 'Kitchen and market waste', '10 – 20 mm', '2 HP', 'Manual'],
        ['HZWM-WWS500', 'Wet', '500 kg/h', 'Food and garden waste', '10 – 30 mm', '5 HP', 'Manual / hopper'],
        ['HZWM-WWS2000', 'Wet', '2 TPH', 'Mixed organic waste', '20 – 40 mm', '20 HP', 'Conveyor'],
        ['HZWM-WWS5000', 'Wet', '5 TPH', 'Bulk organic waste', '20 – 50 mm', '40 HP', 'Conveyor'],
        ['HZWM-DWS250', 'Dry', '250 kg/h', 'Plastic, paper, foils', '20 – 50 mm', '5 HP', 'Manual'],
        ['HZWM-DWS1T', 'Dry', '1 TPH', 'Plastic, packaging', '30 – 80 mm', '15 HP', 'Conveyor'],
        ['HZWM-DWS5T', 'Dry', '5 TPH', 'RDF, textiles, wood', '40 – 80 mm', '60 HP', 'Conveyor'],
        ['HZWM-DWS10T', 'Dry', '10 TPH', 'Mixed dry MSW, RDF', '50 – 100 mm', '150 HP', 'Conveyor + hopper'],
      ],
      note: INDICATIVE,
    },
    related: ['air-density-separator', 'hydraulic-baler-machine', 'organic-waste-composter-machine'],
  },
  {
    slug: 'hydraulic-baler-machine',
    name: 'Hydraulic Baling Machines',
    category: 'Compaction',
    short: 'Vertical and horizontal balers that press recyclables into dense, saleable bales.',
    range: 'Vertical & horizontal',
    seoTitle: 'Hydraulic Baler Machine Manufacturer in India | Waste Baling Machine',
    seoDescription:
      'Vertical and horizontal hydraulic baling machines for plastic, paper, cardboard, PET, cans and RDF. Bales of 50–800 kg at 300–800 kg/m³, with automatic tying on larger models.',
    lead: 'Press plastic, paper, cardboard, PET, cans and RDF into dense, uniform bales. Balers cut storage space and freight costs, and raise the value of every tonne of recyclables.',
    overview: [
      'Our hydraulic balers compact loose recyclables into bales of 50 to 800 kg, at densities of 300 to 800 kg/m³ depending on the material. Smaller loads mean fewer trips, cleaner floors and better prices from recyclers.',
      'Choose a vertical baler for space-saving, decentralised collection points, or a horizontal baler for continuous, high-volume operation in MRFs and large MSW facilities, with automatic tying available on the larger models.',
    ],
    images: [
      { src: horizontalBaler, alt: 'Horizontal hydraulic baling machine with feed hopper' },
      { src: verticalBaler, alt: 'Vertical hydraulic baler in the Hind Zero Waste workshop' },
      { src: mrfBalers, alt: 'Vertical balers installed at a material recovery facility' },
      { src: verticalBalerFactory, alt: 'Vertical baler with hydraulic power pack' },
    ],
    variantsTitle: 'Two formats',
    variants: [
      { title: 'Horizontal balers', text: '5 – 100 TPD. High-capacity, semi- or fully automatic, with automatic tying options.' },
      { title: 'Vertical balers', text: '1 – 10 TPD. Compact, manual or semi-automatic, for shops and collection centres.' },
    ],
    features: [
      { title: 'High-pressure hydraulics', text: 'Heavy-duty cylinders and pumps deliver the force for dense, stable bales.' },
      { title: 'Bales to your specification', text: 'Bale size, weight and output capacity configured to the material and workflow.' },
      { title: 'Energy-efficient', text: 'Engineered for low power consumption at full output.' },
      { title: 'Operator-friendly control', text: 'Manual, semi-automatic, PLC or fully automatic operation.' },
      { title: 'Built-in safety', text: 'Emergency stop, interlocking doors and overload protection.' },
      { title: 'Rigid construction', text: 'MS/SS frame with wear-resistant guides for a long service life.' },
    ],
    stepsTitle: 'How baling works',
    steps: [
      { title: 'Loading', text: 'Loose recyclables are fed into the baling chamber.' },
      { title: 'Compression', text: 'The hydraulic ram compresses the material under high pressure.' },
      { title: 'Bale formation', text: 'Material is compacted into a dense, uniform bale.' },
      { title: 'Tying', text: 'Steel wire or straps secure the bale, automatically on larger models.' },
      { title: 'Ejection', text: 'The finished bale is released, ready to stack and dispatch.' },
    ],
    applications: [
      'MRFs and recycling units',
      'MSW projects and RDF recovery',
      'Manufacturing and packaging waste',
      'Warehouses, logistics and retail',
      'Paper mills and textile units',
    ],
    specs: [
      { label: 'Bale density', value: '300 – 800 kg/m³ (depending on waste type)' },
      { label: 'Bale weight', value: '50 – 800 kg' },
      { label: 'Hydraulics', value: 'Heavy-duty hydraulic cylinders and pumps' },
      { label: 'Construction', value: 'Rigid MS/SS frame with wear-resistant guides' },
      { label: 'Control', value: 'Manual / semi-automatic / PLC / automatic' },
      { label: 'Safety', value: 'Emergency stop, interlocking doors, overload protection' },
    ],
    table: {
      columns: ['Model', 'Type', 'Capacity', 'Bale size (mm)', 'Bale weight', 'Hydraulic power', 'Operation'],
      rows: [
        ['HZWM-VB1', 'Vertical', '0.5 – 1 TPH', '600 × 500 × 800', '50 – 100 kg', '5 HP', 'Manual / semi-auto'],
        ['HZWM-VB3', 'Vertical', '2 – 3 TPH', '900 × 600 × 1000', '100 – 200 kg', '10 HP', 'Semi-auto'],
        ['HZWM-HB5', 'Horizontal', '5 TPH', '1000 × 700 × 1200', '150 – 300 kg', '15 HP', 'Semi-auto'],
        ['HZWM-HB10', 'Horizontal', '10 TPH', '1100 × 750 × 1500', '200 – 400 kg', '20 HP', 'Semi / fully automatic'],
        ['HZWM-HB30', 'Horizontal', '30 TPH', '1200 × 800 × 1600', '300 – 600 kg', '40 HP', 'Fully automatic with tying'],
        ['HZWM-HB50', 'Horizontal', '50 TPH', '1500 × 1000 × 1800', '400 – 800 kg', '60 HP', 'Fully automatic with tying'],
      ],
      note: INDICATIVE,
    },
    video: { id: 'RSYpRGz1LEc', title: 'Hydraulic baling machine in operation' },
    related: ['industrial-shredder-machine', 'conveyor-and-conveying-system', 'air-density-separator'],
  },
  {
    slug: 'organic-waste-composter-machine',
    name: 'Organic Waste Composter',
    category: 'Organic waste',
    short: 'OWC machines and in-vessel composters that turn wet waste into compost on site.',
    range: '50 kg/day – 20 TPD',
    seoTitle: 'Organic Waste Composter (OWC) & In-Vessel Composter Manufacturer',
    seoDescription:
      'Organic waste composters from 50 kg/day to 5 TPD and in-vessel composters up to 20 TPD. On-site composting for hotels, societies, institutions, industries and municipalities.',
    lead: 'Treat biodegradable waste where it is generated. Our OWC machines shred, mix and accelerate decomposition to produce ready-to-cure compost in 24–48 hours, while in-vessel composters give odour-free aerobic composting in 7–10 days.',
    overview: [
      'The Organic Waste Composter (OWC) is a fully mechanised system that shreds, mixes and treats organic waste with microbial culture. The In-Vessel Composter is a closed, insulated container with controlled temperature and aeration, ideal for decentralised treatment at housing societies, institutions, industries and municipal wards.',
      'Both reduce landfill dependency, produce nutrient-rich compost and help waste generators comply with the Solid Waste Management Rules 2016.',
    ],
    images: [
      { src: owcMachine, alt: 'Organic waste composter with control panel in a processing shed' },
      { src: owcStudio, alt: 'Stainless steel organic waste composter machine' },
    ],
    variantsTitle: 'Two systems',
    variants: [
      { title: 'OWC machines', text: '50 kg/day to 5 TPD. Ready-to-cure compost in 24 – 48 hours.' },
      { title: 'In-vessel composters', text: '100 kg/day to 20 TPD, in modular units. Aerobic composting in 7 – 10 days.' },
    ],
    features: [
      { title: 'Fast processing', text: 'Mechanised shredding, mixing and microbial treatment shorten composting to days.' },
      { title: 'Automatic operation', text: 'Semi-automatic or fully automatic PLC-based control panels.' },
      { title: 'Odour-free and hygienic', text: 'Closed chambers and bio-filters control odour and keep pests out.' },
      { title: 'Controlled aeration', text: 'Blowers and vents supply oxygen evenly for aerobic decomposition.' },
      { title: 'Clean handling', text: 'Leachate collection tray and an optional inbuilt shredder.' },
      { title: 'Durable build', text: 'MS/SS body with anti-corrosive coating and insulation.' },
    ],
    stepsTitle: 'How composting works',
    steps: [
      { title: 'Loading', text: 'Organic waste from kitchens, markets, gardens or industry is loaded into the machine.' },
      { title: 'Shredding', text: 'An inbuilt shredder reduces particle size for faster decomposition.' },
      { title: 'Microbial treatment', text: 'Microbial culture breaks the organic matter down in the presence of oxygen.' },
      { title: 'Aeration and mixing', text: 'Mixing and forced aeration speed decomposition and prevent odour.' },
      { title: 'Heat and moisture control', text: 'Self-generated heat accelerates the process and kills pathogens.' },
      { title: 'Curing and output', text: 'The compost stabilises and matures, ready for gardens, landscaping and farms.' },
    ],
    applications: [
      'Hotels, restaurants and canteens',
      'Housing societies and townships',
      'Schools, colleges and institutions',
      'Markets and food industry',
      'Municipal decentralised composting',
    ],
    specs: [
      { label: 'Input', value: 'Kitchen, market, garden and food-industry waste' },
      { label: 'Output', value: 'Stabilised compost, ready-to-cure or semi-cured' },
      { label: 'Process time', value: '24 – 48 hours (OWC), 7 – 10 days (in-vessel)' },
      { label: 'Construction', value: 'MS/SS body with anti-corrosive coating and insulation' },
      { label: 'Aeration', value: 'Blowers and vents for uniform oxygen supply' },
      { label: 'Control', value: 'Semi-automatic or fully automatic PLC panels' },
    ],
    table: {
      columns: ['Model', 'Type', 'Capacity', 'Motor', 'Construction', 'Typical use'],
      rows: [
        ['HZWM-OWC50', 'OWC', '50 kg/day', '3 HP', 'MS/SS', 'Small restaurants, offices'],
        ['HZWM-OWC500', 'OWC', '500 kg/day', '10 HP', 'MS/SS', 'Hotels, institutions, markets'],
        ['HZWM-OWC2000', 'OWC', '2 TPD', '25 HP', 'MS/SS', 'Industrial canteens, townships'],
        ['HZWM-VC100', 'In-vessel', '100 kg/day', '3 HP (blower)', 'Insulated MS vessel', 'Societies, small industries'],
        ['HZWM-VC1000', 'In-vessel', '1 TPD', '10 HP (blower + mixer)', 'Insulated MS vessel', 'Municipal decentralised units'],
        ['HZWM-VC10000', 'In-vessel', '10 TPD', '25 HP', 'Insulated modular vessels', 'Large MSW plants'],
        ['HZWM-VC20000', 'In-vessel', '20 TPD', '40 HP', 'Modular industrial-grade vessels', 'Mega MSW projects'],
      ],
      note: INDICATIVE,
    },
    related: ['industrial-shredder-machine', 'conveyor-and-conveying-system', 'hydraulic-baler-machine'],
  },
  {
    slug: 'conveyor-and-conveying-system',
    name: 'Conveyors & Conveying Systems',
    category: 'Material handling',
    short: 'Belt, chain, screw and inclined conveyors that tie a processing line together.',
    range: '10 – 100 TPH',
    seoTitle: 'MSW Conveyor System Manufacturer in India | Waste Handling Conveyors',
    seoDescription:
      'Belt, chain, screw and inclined conveyors from 10 to 100 TPH for MSW plants, MRFs, RDF/AFR plants and bio-mining. Widths 600–1600 mm, VFD drives, built for 24×7 duty.',
    lead: 'The backbone of every processing plant. Our conveyors move mixed waste, recyclables, organics and RDF safely and continuously between trommels, separators, shredders and balers.',
    overview: [
      'Our conveyors are engineered for MSW plants, MRFs, RDF/AFR plants, bio-mining sites and industrial facilities. Heavy-duty frames with impact idlers, belts matched to the material and VFD-controlled drives give a smooth, dust-controlled flow from tipping floor to dispatch.',
      'Each conveyor is built for its site. Feed hoppers and inclined conveyors lift waste into trommels, and sorting belts give pickers a safe, efficient place to recover recyclables.',
    ],
    images: [
      { src: inclinedConveyor, alt: 'Inclined belt conveyor at a material recovery facility' },
      { src: sortingConveyor, alt: 'Workers recovering recyclables on a sorting conveyor' },
      { src: plantLineWide, alt: 'Conveyor-linked processing line inside a PEB shed' },
      { src: conveyorRender, alt: 'Inclined conveyors feeding a waste processing line' },
    ],
    variantsTitle: 'Conveyor types',
    variants: [
      { title: 'Belt conveyors', text: 'General purpose, for MSW, RDF, recyclables and compost.' },
      { title: 'Chain conveyors', text: 'Heavy-duty, for bulky or abrasive waste.' },
      { title: 'Screw conveyors', text: 'Controlled movement of fines and sludge-like material.' },
      { title: 'Inclined conveyors', text: 'Feeding waste into trommels and shredders at height.' },
      { title: 'Loading & feeding conveyors', text: 'Plant infeed and controlled dosing.' },
      { title: 'Custom conveyors', text: 'Modular conveyors designed for site-specific layouts.' },
    ],
    features: [
      { title: 'Built for 24×7 duty', text: 'Heavy-duty MS/SS frames with impact idlers and support rollers.' },
      { title: 'Belts for the material', text: 'Rubber, PVC, PU or wire mesh, chosen for the application.' },
      { title: 'Variable speed', text: 'VFD-controlled drives, adjustable from 0.2 to 1.5 m/s.' },
      { title: 'Widths to suit', text: 'From 600 mm to 1,600 mm.' },
      { title: 'Modular construction', text: 'Easy to install and to extend as the plant grows.' },
      { title: 'Low maintenance', text: 'Durable rollers and belts with dust-controlled transfer points.' },
    ],
    stepsTitle: 'How a waste conveyor line works',
    steps: [
      { title: 'Loading', text: 'Waste is fed onto the infeed conveyor from a hopper or grab.' },
      { title: 'Transport', text: 'Belt or chain conveyors carry it to each processing stage.' },
      { title: 'Sorting', text: 'Pickers, magnets and other separators recover recyclables on the move.' },
      { title: 'Processing', text: 'Fractions are routed to the shredder, separator, trommel or baler.' },
      { title: 'Return', text: 'In closed-loop systems, residue returns for re-sorting.' },
    ],
    applications: [
      'MSW processing plants',
      'MRFs and recycling facilities',
      'RDF and AFR plants',
      'Legacy waste bio-mining',
      'Construction and demolition waste',
      'Composting plants',
      'Cement, steel and chemical plants',
    ],
    table: {
      columns: ['Model', 'Type', 'Capacity', 'Width', 'Length', 'Motor', 'Typical use'],
      rows: [
        ['HZWM-BC20', 'Belt', '20 TPH', '600 – 800 mm', '5 – 10 m', '5 HP', 'Small MSW / MRF units'],
        ['HZWM-BC50', 'Belt', '50 TPH', '800 – 1,000 mm', '10 – 20 m', '7.5 HP', 'Mid-size waste plants'],
        ['HZWM-BC100', 'Belt', '100 TPH', '1,000 – 1,200 mm', '20 – 40 m', '10 HP', 'Large MSW and RDF lines'],
        ['HZWM-IC30', 'Inclined', '30 TPH', '1,000 mm', '5 – 15 m', '10 HP', 'Feeding trommels and shredders'],
        ['HZWM-CC80', 'Chain', '80 TPH', '1,200 – 1,400 mm', '15 – 30 m', '30 HP', 'Heavy-duty bulky waste'],
        ['HZWM-SC10', 'Screw', '10 TPH', '400 – 600 mm', '5 – 10 m', '5 HP', 'Sludge, fines, powders'],
      ],
      note: INDICATIVE,
    },
    related: ['rotary-trommel-machines', 'industrial-shredder-machine', 'hydraulic-baler-machine'],
  },
  {
    slug: 'industrial-peb-shed',
    name: 'Industrial PEB Sheds',
    category: 'Infrastructure',
    short: 'Pre-engineered steel buildings for processing plants, warehouses and workshops.',
    range: '20 – 50 m+ spans',
    seoTitle: 'Industrial PEB Shed Manufacturer | Pre-engineered Steel Buildings',
    seoDescription:
      'Pre-engineered steel buildings for MSW, MRF, RDF/AFR plants and warehouses. Clear spans of 20–50 m+, heights of 6–15 m, weatherproof roofing and a 20+ year service life.',
    lead: 'Pre-engineered steel buildings designed around the machinery they house, with clear spans, weatherproof roofing and ventilation for continuous operation.',
    overview: [
      'Our industrial sheds are engineered for MSW processing plants, recycling units, RDF/AFR plants, warehouses and general industry. Heavy-duty steel structures, weatherproof roofing, ventilation and flooring are designed together for safe, long-lasting, low-maintenance infrastructure.',
      'We specialise in custom-designed sheds that suit the machinery, storage and workshop needs of large-scale plants, with column-free spans available.',
    ],
    images: [
      { src: pebInterior, alt: 'Interior of a pre-engineered steel shed with clear span roof trusses' },
      { src: heroPlantShed, alt: 'Waste processing line installed inside a PEB shed' },
      { src: pebStructure, alt: 'PEB steel frame with overhead crane under construction' },
      { src: pebExterior, alt: 'Completed industrial PEB shed with roller shutter' },
    ],
    variantsTitle: 'Shed types',
    variants: [
      { title: 'Standard prefabricated', text: 'Quick assembly and cost-effective.' },
      { title: 'Heavy-duty', text: 'Designed for processing machinery in MRF, RDF and shredding plants.' },
      { title: 'Warehousing', text: 'Large clear spans for storage and logistics.' },
      { title: 'Custom modular', text: 'Tailor-made to industrial and site requirements.' },
    ],
    features: [
      { title: 'Quick installation', text: 'Pre-engineered, modular components go up fast on site.' },
      { title: 'Weather and corrosion resistant', text: 'Corrosion-resistant coatings suit every climate.' },
      { title: '20+ year service life', text: 'Durable structures for decades of continuous operation.' },
      { title: 'Clear spans', text: '20 m to 50 m, with column-free options.' },
      { title: 'Ventilated', text: 'Ridge ventilators, turbo vents and side louvres.' },
      { title: 'Fire-safe design', text: 'Engineered for the safety demands of waste processing.' },
    ],
    applications: ['Waste processing plants', 'Storage godowns', 'Manufacturing units', 'Workshops', 'Warehouses'],
    specs: [
      { label: 'Structure', value: 'Pre-engineered steel building with heavy-duty columns and trusses' },
      { label: 'Roofing', value: 'Galvanised iron sheets, PUF insulated panels, polycarbonate skylights' },
      { label: 'Flooring', value: 'RCC, or customised to the load requirement' },
      { label: 'Ventilation', value: 'Ridge ventilators, turbo vents, side louvres' },
      { label: 'Height', value: '6 – 15 m (customised)' },
      { label: 'Span', value: '20 – 50 m, column-free options available' },
    ],
    table: {
      columns: ['Model', 'Span', 'Length', 'Height', 'Roofing', 'Flooring', 'Typical use'],
      rows: [
        ['HZWM-S20', '20 m', '30 – 50 m', '6 – 8 m', 'GI sheets', 'RCC', 'Workshops, small sheds'],
        ['HZWM-S30', '30 m', '50 – 80 m', '8 – 10 m', 'GI / PUF panels', 'RCC', 'MRF plants, storage'],
        ['HZWM-S40', '40 m', '80 – 100 m', '10 – 12 m', 'PUF panels + skylights', 'RCC / industrial', 'Large RDF/AFR processing'],
        ['HZWM-S50', '50 m+', '100 m+', '12 – 15 m', 'GI + polycarbonate', 'RCC / heavy-load', 'Mega plants, warehouses'],
      ],
      note: 'Shed design is fully customisable to land, plant layout and load requirements.',
    },
    related: ['conveyor-and-conveying-system', 'rotary-trommel-machines', 'hydraulic-baler-machine'],
  },
  {
    slug: 'sewer-suction-vehicle',
    name: 'Sewer Suction Vehicle',
    category: 'Vehicles',
    short: 'Vacuum tankers for sewer lines, septic tanks, storm drains and manholes.',
    range: 'Truck-mounted',
    seoTitle: 'Sewer Suction Vehicle | Vacuum Tanker for Municipal Sewer Cleaning',
    seoDescription:
      'Truck-mounted sewer suction vehicles that remove sludge, wastewater and debris from sewers, septic tanks, storm drains and manholes, safely and hygienically.',
    lead: 'A truck-mounted vacuum tanker that removes sludge, wastewater and debris from sewers, septic tanks, storm drains and manholes quickly and hygienically, with minimal human contact.',
    overview: [
      'Also known as a vacuum tanker or suction machine, the sewer suction vehicle combines a high-capacity vacuum pump, a sealed storage tank and a heavy-duty suction hose. Together they extract liquid waste, sludge, grease and semi-solid debris and carry it to an authorised treatment or disposal site.',
      'It is an essential asset for municipal corporations, wastewater treatment plants and private operators who keep sewers flowing and cities sanitary.',
    ],
    images: [
      { src: suctionVehicle, alt: 'Sewer suction vehicle with orange vacuum tank' },
      { src: suctionVehicleRear, alt: 'Rear view of a sewer suction tanker' },
    ],
    features: [
      { title: 'High suction power', text: 'Removes waste quickly and efficiently, cutting downtime.' },
      { title: 'Large tank capacity', text: 'Handles large volumes of liquid and sludge per trip.' },
      { title: 'Safe and hygienic', text: 'Minimises human contact with waste for a safer workplace.' },
      { title: 'Compliant disposal', text: 'Supports eco-friendly disposal in line with government norms.' },
      { title: 'Urban and rural ready', text: 'Adaptable to different terrains and infrastructure.' },
    ],
    stepsTitle: 'How it works',
    steps: [
      { title: 'Positioning', text: 'The vehicle parks beside the sewer line, septic tank or drainage point.' },
      { title: 'Hose deployment', text: 'A flexible suction hose is lowered into the access point and connected to the pump.' },
      { title: 'Vacuum', text: 'The pump creates negative pressure inside the sealed tank.' },
      { title: 'Suction', text: 'Liquid waste, sludge, grease and debris are drawn into the tank.' },
      { title: 'Transport and disposal', text: 'The load is taken to an authorised treatment or disposal site.' },
      { title: 'Cleaning', text: 'Tank and hose are washed down, ready for the next job.' },
    ],
    applications: [
      'Municipal sewer cleaning',
      'Septic tank emptying',
      'Drainage system maintenance',
      'Flood water removal',
      'Industrial sludge management',
    ],
    related: ['conveyor-and-conveying-system', 'organic-waste-composter-machine', 'industrial-peb-shed'],
  },
];

export const productBySlug = (slug: string) => products.find((p) => p.slug === slug);
