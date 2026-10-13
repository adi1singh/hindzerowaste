// Project record, transcribed from the company profile (PDF on the current site).
// Volumes are as stated there; see CONTENT-REVIEW.md before launch.

export interface CountSpec {
  value: number;
  prefix?: string;
  suffix?: string;
  format?: string;
}

export interface Project {
  client: string;
  location: string;
  scope: string;
  scale: string;
  /** The scale as a number, so it can count up on screen. */
  count: CountSpec;
  status: 'Completed' | 'Ongoing' | 'Commissioned';
  note?: string;
}

export const featuredProjects: Project[] = [
  {
    client: 'Pimpri Chinchwad Municipal Corporation',
    location: 'Moshi dumping ground, Maharashtra',
    scope: 'Bio-mining of legacy waste',
    scale: '8,00,000 m³',
    count: { value: 800000, format: 'en-IN', suffix: ' m³' },
    status: 'Ongoing',
    note: '7,02,900 m³ completed',
  },
  {
    client: 'Bhiwandi Nizampur Municipal Corporation',
    location: 'Maharashtra',
    scope: 'Bio-mining of legacy waste',
    scale: '1,39,000 m³',
    count: { value: 139000, format: 'en-IN', suffix: ' m³' },
    status: 'Completed',
  },
  {
    client: 'South Delhi Municipal Corporation, for Rekart Innovations',
    location: 'Bhalaswa dumping ground, Delhi',
    scope: 'Two bio-mining plants',
    scale: '2 × 300 TPD',
    count: { value: 300, prefix: '2 × ', suffix: ' TPD' },
    status: 'Commissioned',
  },
  {
    client: 'Telangana State, Cluster 6',
    location: '14 municipalities, Telangana',
    scope: 'Bio-mining and ten years of fresh waste management',
    scale: '5 lakh tonnes',
    count: { value: 5, suffix: ' lakh tonnes' },
    status: 'Ongoing',
  },
  {
    client: 'Jaisalmer Municipal Council',
    location: 'Rajasthan',
    scope: 'Design, construction and 30-year O&M of MSW processing and sanitary landfill',
    scale: '25 TPD',
    count: { value: 25, suffix: ' TPD' },
    status: 'Ongoing',
  },
  {
    client: 'Dausa Municipal Council',
    location: 'Rajasthan',
    scope: 'Design, construction and 30-year O&M of MSW processing and sanitary landfill',
    scale: '50 TPD',
    count: { value: 50, suffix: ' TPD' },
    status: 'Ongoing',
  },
];

export const completedBiomining: { site: string; volume: string; note?: string }[] = [
  { site: 'Bhor Municipal Council, Pune', volume: '11,000 m³' },
  { site: 'Junnar Municipal Council, Pune', volume: '16,000 m³' },
  { site: 'Daund Municipal Council, Pune', volume: '21,300 m³' },
  { site: 'Tasgaon Municipal Council, Sangli', volume: '19,000 m³', note: 'JV with Bhairavnath Environmental Solutions Pvt. Ltd.' },
  { site: 'Shirur Municipal Council, Pune', volume: '34,000 m³', note: 'With Saipro Infrastructure' },
  { site: 'Chikhali Municipal Council, Buldhana', volume: '12,000 m³' },
  { site: 'Khamgaon Municipal Council, Buldhana', volume: '14,000 m³' },
  { site: 'Kurduwadi Municipal Council, Osmanabad', volume: '3,500 m³' },
  { site: 'Karanja Municipal Council', volume: '26,500 m³' },
  { site: 'Vadgaon Municipal Council, Kolhapur', volume: '25,000 m³' },
  { site: 'Bhiwandi Nizampur Municipal Corporation', volume: '1,39,000 m³' },
  { site: 'Bali Municipal Board, Rajasthan', volume: '6,052 m³' },
  { site: 'Falna Municipal Board, Rajasthan', volume: '3,000 m³' },
];

export const ongoingBiomining: { site: string; volume: string; note?: string }[] = [
  { site: 'Pimpri Chinchwad Municipal Corporation, Moshi dumping ground', volume: '8,00,000 m³', note: '7,02,900 m³ completed' },
  { site: 'Kullu Municipal Council, Himachal Pradesh', volume: '18,500 tonnes' },
  { site: 'Manali Municipal Council, Himachal Pradesh', volume: '40,000 tonnes' },
  { site: 'Telangana Cluster 6, 14 municipalities', volume: '5 lakh tonnes', note: 'With fresh waste management for 10 years' },
];

export const plantProjects: string[] = [
  '100 TPD legacy waste processing plant and 10 TPD daily waste processing plant, Bali Municipal Board, Rajasthan',
  '100 TPD legacy waste processing plant and 10 TPD daily waste processing plant, Falna Municipal Board, Rajasthan',
  'Two 300 TPD bio-mining plants for Rekart Innovations Pvt. Ltd., Bhalaswa dumping ground, South Delhi Municipal Corporation',
  '25 TPD MSW processing and sanitary landfill, Jaisalmer Municipal Council, Rajasthan: design, construction and O&M for 30 years',
  '50 TPD MSW processing and sanitary landfill, Dausa Municipal Council, Rajasthan: design, construction and O&M for 30 years',
  'Telangana State Cluster 6: bio-mining and fresh waste management across 14 municipalities for 10 years',
];

// Bio-mining processing plants installed, grouped by state.
export const plantsInstalled: { state: string; sites: string[] }[] = [
  {
    state: 'Maharashtra',
    sites: [
      'Bhiwandi Nizampur Municipal Corporation',
      'Mira Bhayandar (Guruji Infrastructure Pvt. Ltd.)',
      'Pimpri Chinchwad (Sai Ganesh Enterprises)',
      'Baramati (Saipro Infrastructure)',
      'Mahad Municipal Council (Bhagyadips Waste Management Pvt. Ltd.)',
    ],
  },
  {
    state: 'Rajasthan',
    sites: [
      'Bali Municipal Council',
      'Falna Municipal Council',
      'Pipad Municipal Council',
      'Jaisalmer Municipal Corporation',
      'Shahpur Municipal Council',
      'Kotputli Municipal Council',
      'Bhiwadi Municipal Corporation',
    ],
  },
  { state: 'Uttar Pradesh', sites: ['Unnao Municipal Council', 'Raebareli Municipal Council', 'Etawah Municipal Council'] },
  { state: 'Delhi', sites: ['Bhalaswa dumping ground: two 300 TPD plants for Rekart Innovations'] },
  { state: 'Himachal Pradesh', sites: ['Kullu Municipal Council'] },
  { state: 'Punjab', sites: ['Faridkot Municipal Council'] },
  { state: 'Telangana', sites: ['Jagitial bio-mining site'] },
];

export const machineSupply = ['Tharuni Associates: 5 bio-mining machines', 'Annapurna Construction: 1 bio-mining machine'];
