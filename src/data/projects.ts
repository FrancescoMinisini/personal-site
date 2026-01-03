export interface Project {
  title: string;
  subtitle?: string;
  image: string;
  date: string;
  desc: string;
  slug: string;
  status?: string;
  links?: {
    label: string;
    url: string;
    description?: string;
  }[];
  references?: {
    label: string;
    url: string;
  }[];
}


const data: Project[] = [
  {
    title: 'Reinforcement Learning for Quantum Control',
    subtitle: 'University of Oslo — Bachelor\'s Thesis',
    image: 'images/projects/rl_quantum.jpg', // Placeholder
    date: '2025-09-01',
    desc:
      'Explored Reinforcement Learning (RL) and Quantum Reinforcement Learning (QRL) for Active Quantum Control. ' +
      'Developed a hardware-agnostic framework using a single trained agent to generalize across quantum state spaces, transforming any initial state to arbitrary targets via optimized unitary sequences. ' +
      'Evaluated classical DDPG, its quantum counterpart (Quantum-DDPG), and DDQN schemes. ' +
      'Benchmarked performance using sample-complexity metrics to assess convergence efficiency, robustness, and scalability.',
    slug: 'rl-quantum-control',
    status: 'Ongoing',
    links: [],
  },
  {
    title: 'Dark Matter Detectors Research',
    subtitle: 'UIS Research Center',
    image: 'images/projects/dark_matter.jpg', // Placeholder
    date: '2025-01-01',
    desc:
      'Selected among top 4 European students (out of ~600) for research on dark matter detectors using OTPC architecture. ' +
      'Simulated S1/S2 signal formation in OTPC detectors using GEANT4 (scintillation, electron drift, electroluminescence). ' +
      'Implemented and benchmarked End-to-End ML pipelines (RF, HGB, CNNs, Anomaly Transformers) achieving >93% accuracy in event classification.',
    slug: 'dark-matter-detectors',
    status: 'Ongoing',
    links: [],
  },
  {
    title: 'Quantum Key Distribution',
    subtitle: '1st Place - IBM Qiskit Fall Fest 2025',
    image: 'images/projects/qkd.jpg',
    date: '2025-09-01',
    desc:
      'Designed and implemented Quantum Key Distribution (QKD) protocols based on BB84 and E91.' +
      'Simulated an n-node encrypted quantum network and performed quantitative analysis of eavesdropping strategies' +
      'and quantum bit error rates (QBER).' +
      'The network implementation was integrated with an interactive front-end enabling exploration,' +
      'of simulation results. The project ranked first among 350 partecipants at the' +
      '2025 Qiskit Fall Fest Quantum Hackathon.',
    slug: 'quantum-key-distribution',
    status: 'Completed',
    links: [
      {
        label: 'Visit Project',
        url: 'https://qkd-nexus-lab.vercel.app/',
        description: 'Interactive simulation'
      },
      {
        label: 'View on GitHub',
        url: 'https://github.com/QPhys-QiskitFallFestTeam/QKD_Qiskit'
      }
    ],
  },
  // {
  //   title: 'Sahel Land Degradation Monitor',
  //   subtitle: '2nd Place - START Hack 2025',
  //   image: 'images/projects/harvest.jpg',
  //   date: '2025-03-01',
  //   desc:
  //     'Interactive visualization dashboard integrating Earth-observation data (MODIS, CHIRPS) ' +
  //     'and demographic indicators to monitor land degradation in the Sahel. ' +
  //     'Applied statistical techniques to identify environmental trends.',
  //   slug: 'sahel-land-degradation-monitor',
  //   status: 'Completed',
  //   links: [
  //      {
  //        label: 'Visit Project',
  //        url: 'https://www.starthack.eu/',
  //      },
  //      {
  //        label: 'Related Publication / Results',
  //        url: 'https://www.starthack.eu/',
  //      }
  //   ]
  // },
  // {
  //   title: 'Financial AI Agent',
  //   subtitle: 'Techisland Srl (Microsoft for Startups Winner)',
  //   image: 'images/projects/nearestdollar.jpg',
  //   date: '2024-01-01',
  //   desc:
  //     'Built analytical and agentic ML tooling leveraging LangGraph workflows to enable ' +
  //     'natural-language financial queries, automated reporting, and treasury optimization models.',
  //   slug: 'financial-ai-agent', // slug guess
  //   links: []
  // },
  // {
  //   title: 'Biomechanics Analysis',
  //   subtitle: 'Research at IRCCS CRO',
  //   image: 'images/projects/catdetector.jpg',
  //   date: '2024-11-01',
  //   desc:
  //     'Developed data-analysis pipelines for movement mechanics in athletes. ' +
  //     'Published research on roller speed skating biomechanics using semaphore-kinematics data.',
  //   slug: 'biomechanics-analysis',
  //   links: [
  //     {
  //       label: 'Visit Project',
  //       url: 'https://www.mdpi.com/1424-8220/24/23/7617',
  //     },
  //     {
  //       label: 'Related Publication / Results',
  //       url: 'https://www.mdpi.com/1424-8220/24/23/7617',
  //     }
  //   ]
  // },
];

export default data;
