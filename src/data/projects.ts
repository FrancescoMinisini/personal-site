export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  date: string;
  desc: string;
}

const data: Project[] = [
  {
    title: 'Quantum Key Distribution',
    subtitle: '1st Place - IBM Qiskit Fall Fest 2025',
    image: '/images/projects/spacepotato.jpg', // Placeholder
    date: '2025-09-01',
    desc:
      'Developed and implemented a Quantum Key Distribution (QKD) algorithm using BB84 and E91 protocols. ' +
      'Simulated an n-node encrypted network and analyzed eavesdropping attacks and quantum error rates.',
  },
  {
    title: 'Sahel Land Degradation Monitor',
    subtitle: '2nd Place - START Hack 2025',
    link: 'https://www.starthack.eu/',
    image: '/images/projects/harvest.jpg', // Placeholder
    date: '2025-03-01',
    desc:
      'Interactive visualization dashboard integrating Earth-observation data (MODIS, CHIRPS) ' +
      'and demographic indicators to monitor land degradation in the Sahel. ' +
      'Applied statistical techniques to identify environmental trends.',
  },
  {
    title: 'Financial AI Agent',
    subtitle: 'Techisland Srl (Microsoft for Startups Winner)',
    image: '/images/projects/nearestdollar.jpg', // Placeholder
    date: '2024-01-01',
    desc:
      'Built analytical and agentic ML tooling leveraging LangGraph workflows to enable ' +
      'natural-language financial queries, automated reporting, and treasury optimization models.',
  },
  {
    title: 'Biomechanics Analysis',
    subtitle: 'Research at IRCCS CRO',
    link: 'https://www.mdpi.com/1424-8220/24/23/7617',
    image: '/images/projects/catdetector.jpg', // Placeholder
    date: '2024-11-01',
    desc:
      'Developed data-analysis pipelines for movement mechanics in athletes. ' +
      'Published research on roller speed skating biomechanics using semaphore-kinematics data.',
  },
];

export default data;
