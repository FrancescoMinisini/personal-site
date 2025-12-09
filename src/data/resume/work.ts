/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'University of Oslo',
    position: 'Researcher - Bachelor\'s Thesis',
    url: 'https://www.uio.no/english/',
    startDate: '2025-09-01',
    summary: 'Exploring and benchmarking Quantum Reinforcement Learning techniques for Active Quantum Control.',
    highlights: [
      'Developing RL-based pulse-optimization pipeline, benchmarking against GRAPE, Krotov, and classical ML.',
      'Comparing performance with Variational Quantum Circuit approaches.',
    ],
  },
  {
    name: 'UIS Research Center',
    position: 'Researcher',
    url: '', // No specific URL provided
    startDate: '2025-01-01',
    summary: 'Selected among top 4 European students (out of ~600) for research on dark matter detectors using OTPC architecture.',
    highlights: [
      'Simulated S1/S2 signal formation in OTPC detectors using GEANT4 (scintillation, electron drift, electroluminescence).',
      'Implemented and benchmarked End-to-End ML pipelines (RF, HGB, CNNs, Anomaly Transformers) achieving >93% accuracy in event classification.',
    ],
  },
  {
    name: 'Laboratory of Movement Analysis, IRCCS CRO',
    position: 'Researcher',
    url: '',
    startDate: '2024-08-01',
    summary: 'Developing data-analysis pipelines and interactive tools for movement mechanics.',
    highlights: [
      'Conducted SEMG-kinematics studies on athletes, showing alignment with elite activation models.',
      'Developing anomaly detection models for gait analysis in cancer recovery patients.',
    ],
  },
  {
    name: 'Allianz Bank - Progetto 2000 Group',
    position: 'NLP Engineer Associate',
    url: '',
    startDate: '2024-06-01',
    endDate: '2024-10-01',
    summary: 'Created complete pipeline for automatic ticket categorization using LLMs.',
    highlights: [
      'Achieved 91% accuracy in ticket classification.',
      'Fully automated a task previously handled by a 15-person team, reducing operational costs significantly.',
    ],
  },
  {
    name: 'INFN',
    position: 'Participant - Masterclass in Particle Physics',
    url: 'https://home.infn.it/en/',
    startDate: '2024-04-01',
    endDate: '2024-05-01',
    summary: 'Analyzed collision data from the LHCb experiment.',
    highlights: [
      'Used ROOT-based tools for event selection, track fitting, and signal-background separation.',
      'Reconstructed hadronic peaks within ~2-3% of reference values.',
    ],
  },
  {
    name: 'Techisland Srl',
    position: 'AI Engineer Associate',
    url: '',
    startDate: '2023-09-01',
    summary: 'Winner of Microsoft for Startups Bundle 2024 ($125,000).',
    highlights: [
      'Developed scalable AI-driven systems including a Rust-based backend and multi-tenant SQL pipelines.',
      'Built analytical and agentic ML tooling using LangGraph for financial queries and treasury optimization.',
    ],
  },
  {
    name: 'Google DeepMind',
    position: 'Summer Student (M2L)',
    url: 'https://www.deepmind.com',
    startDate: '2025-08-01',
    endDate: '2025-08-31',
    summary: 'Machine Learning Summer School - Graduated with Honors (1.5% acceptance rate).',
    highlights: [
      'Attended lectures by top researchers on RL, NLP, and Generative Models.',
      'Participated in hands-on laboratories and projects.',
    ],
  },
  {
    name: 'Windsurfing Instructor',
    position: 'Seasonal Instructor',
    url: '',
    startDate: '2020-06-01',
    endDate: '2023-09-01',
    summary: 'Worked at Lake Como (Italy) and Crete (Greece).',
    highlights: [
      'Taught windsurfing to beginners and intermediates.',
    ],
  },
];

export default work;
