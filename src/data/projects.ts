export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  date: string;
  desc: string;
  slug: string;
  github?: string;
  publication?: string;
}


const data: Project[] = [
  {
    title: 'Reinforcement Learning for Quantum Control',
    subtitle: 'University of Oslo — Bachelor\'s Thesis',
    link: '',
    image: 'images/projects/rl_quantum.jpg', // Placeholder
    date: '2025-09-01',
    desc:
      'Explored Reinforcement Learning (RL) and Quantum Reinforcement Learning (QRL) for Active Quantum Control. ' +
      'Developed a hardware-agnostic framework using a single trained agent to generalize across quantum state spaces, transforming any initial state to arbitrary targets via optimized unitary sequences. ' +
      'Evaluated classical DDPG, its quantum counterpart (Quantum-DDPG), and DDQN schemes. ' +
      'Benchmarked performance using sample-complexity metrics to assess convergence efficiency, robustness, and scalability.',
    slug: 'rl-quantum-control',
    github: '',
    publication: '',
  },
  {
    title: 'Dark Matter Detectors Research',
    subtitle: 'UIS Research Center',
    link: '', // No specific link provided yet
    image: 'images/projects/dark_matter.jpg', // Placeholder
    // image: './images/projects/dark_matter.jpg', // Placeholder
    date: '2025-01-01',
    desc:
      'Selected among top 4 European students (out of ~600) for research on dark matter detectors using OTPC architecture. ' +
      'Simulated S1/S2 signal formation in OTPC detectors using GEANT4 (scintillation, electron drift, electroluminescence). ' +
      'Implemented and benchmarked End-to-End ML pipelines (RF, HGB, CNNs, Anomaly Transformers) achieving >93% accuracy in event classification.',
    slug: 'dark-matter-detectors',
    github: '',
    publication: '',
  },
  {
    title: 'Quantum Key Distribution',
    subtitle: '1st Place - IBM Qiskit Fall Fest 2025',
    link: 'https://qkd-nexus-lab.vercel.app/',
    image: 'images/projects/qkd.jpg',
    date: '2025-09-01',
    desc:
      'Developed and implemented a Quantum Key Distribution (QKD) algorithm using BB84 and E91 protocols. ' +
      'Simulated an n-node encrypted network and analyzed eavesdropping attacks and quantum error rates.',
    slug: 'quantum-key-distribution',
    github: 'https://github.com/QPhys-QiskitFallFestTeam/QKD_Qiskit', // Placeholder
    publication: '',
  },
  // {
  //   title: 'Sahel Land Degradation Monitor',
  //   subtitle: '2nd Place - START Hack 2025',
  //   link: 'https://www.starthack.eu/',
  //   image: 'images/projects/harvest.jpg',
  //   date: '2025-03-01',
  //   desc:
  //     'Interactive visualization dashboard integrating Earth-observation data (MODIS, CHIRPS) ' +
  //     'and demographic indicators to monitor land degradation in the Sahel. ' +
  //     'Applied statistical techniques to identify environmental trends.',
  //   slug: 'sahel-land-degradation-monitor',
  //   github: '',
  //   publication: 'https://www.starthack.eu/',
  // },
  // {
  //   title: 'Financial AI Agent',
  //   subtitle: 'Techisland Srl (Microsoft for Startups Winner)',
  //   image: 'images/projects/nearestdollar.jpg',
  //   date: '2024-01-01',
  //   desc:
  //     'Built analytical and agentic ML tooling leveraging LangGraph workflows to enable ' +
  //     'natural-language financial queries, automated reporting, and treasury optimization models.',
  // },
  // {
  //   title: 'Biomechanics Analysis',
  //   subtitle: 'Research at IRCCS CRO',
  //   link: 'https://www.mdpi.com/1424-8220/24/23/7617',
  //   image: 'images/projects/catdetector.jpg',
  //   date: '2024-11-01',
  //   desc:
  //     'Developed data-analysis pipelines for movement mechanics in athletes. ' +
  //     'Published research on roller speed skating biomechanics using semaphore-kinematics data.',
  //   slug: 'biomechanics-analysis',
  //   github: '',
  //   publication: 'https://www.mdpi.com/1424-8220/24/23/7617',
  // },
];

export default data;
