export interface PaperReference {
  title: string;
  authors: string[];
  year: number;
  publication_type: string;
  venue: string;
  location?: string;
  institution_affiliation?: string;
  url: string;
  identifiers?: {
    arXiv?: string;
    doi?: string;
    isbn?: string;
    experiment?: string;
    keywords?: string[];
  };
  description?: string;
}

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
  references?: (
    | {
      label: string;
      url: string;
    }
    | PaperReference
  )[];
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
      'Benchmarked performance using sample-complexity metrics to assess convergence efficiency, robustness, and scalability. ' +
      'The project is currently ongoing and will be updated as progress is made.',
    slug: 'rl-quantum-control',
    status: 'Ongoing',
    links: [],
    references: [
      {
        title: "Quantum Reinforcement Learning in Continuous Action Space",
        authors: [
          "Shaojun Wu",
          "Shan Jin",
          "Dingding Wen",
          "Donghong Han",
          "Xiaoting Wang"
        ],
        year: 2025,
        publication_type: "Journal Article",
        venue: "Quantum",
        location: "Chengdu, China",
        url: "https://arxiv.org/abs/2012.10711",
        identifiers: {
          arXiv: "arXiv:2012.10711",
          keywords: ["quantum reinforcement learning", "continuous action space", "DDPG", "quantum control"]
        },
        description: "This paper introduces a quantum Deep Deterministic Policy Gradient (Q-DDPG) algorithm to address reinforcement learning problems in continuous action spaces. The framework enables single-shot quantum state generation, allowing a trained agent to produce control sequences that drive arbitrary initial states to a desired target state, overcoming limitations of discretization and repeated optimization in conventional quantum control."
      },
      // {
      //   title: "An Introduction to Reinforcement Learning: From Theory to Algorithms",
      //   authors: ["Joon Kwon"],
      //   year: 2024,
      //   publication_type: "Lecture Notes",
      //   venue: "Université Paris-Saclay",
      //   location: "Paris, France",
      //   url: "https://joonkwon.github.io/rl-lecture-notes/",
      //   identifiers: {
      //     keywords: ["reinforcement learning", "MDP", "Bellman equations", "policy gradient"]
      //   },
      //   description: "These lecture notes provide a rigorous and mathematically grounded introduction to reinforcement learning. They cover Markov Decision Processes, Bellman operators, dynamic programming, tabular RL, value function approximation, and policy gradient methods, with an emphasis on theoretical guarantees and algorithmic foundations."
      // },
      {
        title: "Reinforcement Learning: An Introduction (Second Edition)",
        authors: ["Richard S. Sutton", "Andrew G. Barto"],
        year: 2018,
        publication_type: "Book",
        venue: "MIT Press",
        location: "Cambridge, MA, USA",
        url: "http://incompleteideas.net/book/the-book.html",
        identifiers: {
          isbn: "978-0262039246",
          keywords: ["reinforcement learning", "temporal-difference learning", "policy iteration", "function approximation"]
        },
        description: "This seminal textbook is the standard reference for reinforcement learning. It presents the conceptual framework and core algorithms of RL, including dynamic programming, Monte Carlo methods, temporal-difference learning, and policy gradient techniques, and discusses extensions to function approximation and modern deep RL."
      },
      {
        title: "Universal Quantum Control through Deep Reinforcement Learning",
        authors: [
          "Murphy Yuezhen Niu",
          "Sergio Boixo",
          "Vadim Smelyanskiy",
          "Hartmut Neven"
        ],
        year: 2018,
        publication_type: "Journal Article",
        venue: "Physical Review A",
        location: "Cambridge, MA, USA / Venice Beach, CA, USA",
        url: "https://arxiv.org/abs/1803.01857",
        identifiers: {
          arXiv: "arXiv:1803.01857",
          keywords: ["quantum control", "deep reinforcement learning", "leakage suppression", "two-qubit gates"]
        },
        description: "This work proposes a deep reinforcement learning framework for universal quantum control, optimizing both gate fidelity and execution time under realistic noise and leakage. By incorporating control noise during training, the approach achieves substantial reductions in gate error and duration compared to traditional gradient-based quantum control methods."
      },
      {
        title: "Benchmarking Quantum Reinforcement Learning",
        authors: [
          "Nico Meyer",
          "Christian Ufrecht",
          "George Yammine",
          "Georgios Kontes",
          "Christopher Mutschler",
          "Daniel D. Scherer"
        ],
        year: 2025,
        publication_type: "Conference Paper",
        venue: "Proceedings of the 42nd International Conference on Machine Learning (ICML)",
        location: "Vancouver, Canada",
        url: "https://arxiv.org/abs/2501.15893",
        identifiers: {
          arXiv: "arXiv:2501.15893",
          keywords: ["quantum reinforcement learning", "benchmarking", "sample complexity", "quantum advantage"]
        },
        description: "This paper proposes a statistically robust benchmarking framework for quantum reinforcement learning, focusing on sample complexity as a primary performance metric. Through extensive empirical evaluation, it highlights the challenges of reproducibility and questions overly optimistic claims of quantum advantage in current QRL approaches."
      }
    ]
  },
  {
    title: 'Dark Matter Detectors Research',
    subtitle: 'UIS Research Center',
    image: 'images/projects/dark_matter.jpg', // Placeholder
    date: '2025-01-01',
    desc:
      'Selected among top 4 European students (out of ~600) for research on dark matter detectors using OTPC architecture. ' +
      'Simulated S1/S2 signal formation in OTPC detectors using GEANT4 (scintillation, electron drift, electroluminescence). ' +
      'Implemented and benchmarked End-to-End ML pipelines (RF, HGB, CNNs, Anomaly Transformers) achieving >93% accuracy in event classification. ' +
      'The project is currently ongoing and will be updated as progress is made.',
    slug: 'dark-matter-detectors',
    status: 'Ongoing',
    links: [],
    references: [
      {
        title: "Pulse Shape Discrimination and Exploration of Scintillation Signals Using Convolutional Neural Networks",
        authors: ["J. Griffiths", "S. Kleinegesse", "D. Saunders", "R. Taylor", "A. Vacheret"],
        year: 2018,
        publication_type: "Preprint / Journal submission",
        venue: "Elsevier (preprint)",
        institution_affiliation: "Imperial College London, Department of Physics",
        location: "London, United Kingdom",
        url: "https://arxiv.org/abs/1807.06853",
        identifiers: {
          arXiv: "arXiv:1807.06853",
          keywords: ["pulse shape discrimination", "CNN", "scintillation detectors"]
        },
        description: "This paper investigates the use of convolutional neural networks for neutron–gamma pulse shape discrimination using raw digitized scintillation waveforms. The CNN-based approach outperforms traditional charge integration and wavelet-based methods while learning physically interpretable features."
      },
      {
        title: "Simulations of Events for the LUX-ZEPLIN (LZ) Dark Matter Experiment",
        authors: ["LUX-ZEPLIN Collaboration"],
        year: 2020,
        publication_type: "Journal Article",
        venue: "Astroparticle Physics (Elsevier)",
        location: "International collaboration (SURF, USA)",
        url: "https://doi.org/10.1016/j.astropartphys.2020.102486",
        identifiers: {
          doi: "10.1016/j.astropartphys.2020.102486",
          experiment: "LUX-ZEPLIN (LZ)"
        },
        description: "This work presents the full Monte Carlo simulation framework used in the LUX-ZEPLIN experiment, enabling realistic modeling of signal and background events and validation of reconstruction and analysis pipelines."
      },
      {
        title: "The LUX-ZEPLIN (LZ) Experiment",
        authors: ["LUX-ZEPLIN Collaboration"],
        year: 2019,
        publication_type: "Journal Article",
        venue: "Nuclear Instruments and Methods in Physics Research A",
        location: "International collaboration",
        url: "https://doi.org/10.1016/j.nima.2019.162488",
        identifiers: {
          doi: "10.1016/j.nima.2019.162488",
          experiment: "LZ"
        },
        description: "This paper provides a comprehensive overview of the LUX-ZEPLIN dark matter experiment, including detector design, background mitigation strategies, and projected sensitivity to WIMP interactions."
      },
      {
        title: "Performance of an Optical TPC Geant4 Simulation with Opticks GPU-Accelerated Photon Propagation",
        authors: ["I. Parmaksiz", "K. Mistry", "E. Church", "et al."],
        year: 2025,
        publication_type: "Preprint",
        venue: "arXiv",
        location: "International collaboration",
        url: "https://arxiv.org/abs/2502.13215",
        identifiers: {
          arXiv: "arXiv:2502.13215",
          keywords: ["Optical TPC", "Geant4", "GPU acceleration", "Opticks"]
        },
        description: "The paper evaluates GPU-accelerated optical photon transport using Opticks integrated with Geant4, demonstrating large performance gains for high-fidelity optical TPC simulations."
      },
      {
        title: "A Machine Learning-Based Methodology for Pulse Classification in Dual-Phase Xenon Time Projection Chambers",
        authors: ["P. Brás", "F. Neves", "A. Lindote", "A. Cottle", "M. I. Lopes", "et al."],
        year: 2022,
        publication_type: "Journal Article",
        venue: "European Physical Journal C",
        location: "Coimbra, Portugal / Oxford, United Kingdom",
        url: "https://doi.org/10.1140/epjc/s10052-022-10502-x",
        identifiers: {
          doi: "10.1140/epjc/s10052-022-10502-x",
          experiment: "LUX-ZEPLIN (simulated data)"
        },
        description: "This article presents a machine-learning-driven framework for classifying pulses in dual-phase xenon TPCs, combining clustering and supervised models to achieve high accuracy and robust anomaly detection."
      },
      {
        title: "Data Acquisition and Readout System for the LUX Dark Matter Experiment",
        authors: ["D. S. Akerib", "X. Bai", "J. J. Chapman", "et al."],
        year: 2011,
        publication_type: "Journal Article",
        venue: "Nuclear Instruments and Methods in Physics Research A",
        location: "United States (SURF, South Dakota)",
        url: "https://arxiv.org/abs/1108.1836",
        identifiers: {
          arXiv: "arXiv:1108.1836",
          experiment: "LUX"
        },
        description: "This paper describes the architecture and performance of the LUX data acquisition system, emphasizing low-noise waveform digitization and triggering strategies for rare-event detection."
      },
      {
        title: "The Data Acquisition System of the LZ Dark Matter Detector: FADR",
        authors: ["J. Aalbers", "D. S. Akerib", "A. Cottle", "et al."],
        year: 2024,
        publication_type: "Journal Article",
        venue: "Nuclear Instruments and Methods in Physics Research A",
        location: "International collaboration",
        url: "https://doi.org/10.1016/j.nima.2024.169638",
        identifiers: {
          doi: "10.1016/j.nima.2024.169638",
          experiment: "LUX-ZEPLIN (LZ)"
        },
        description: "This work details the fully digital acquisition and readout system developed for the LZ experiment, focusing on scalability, synchronization, and high-rate performance."
      },
      {
        title: "Geant4 Simulation of the Dual Phase Time Projection Chamber of Argon to Detect Neutrinos",
        authors: ["I. J. M. Huancco"],
        year: 2018,
        publication_type: "Conference Paper",
        venue: "Journal of Physics: Conference Series",
        location: "Lima, Peru",
        url: "https://doi.org/10.1088/1742-6596/1143/1/012011",
        identifiers: {
          doi: "10.1088/1742-6596/1143/1/012011",
          keywords: ["dual-phase TPC", "argon", "neutrino detection"]
        },
        description: "This conference paper presents a Geant4-based simulation of a dual-phase argon TPC, focusing on scintillation, ionization, and PMT response for neutrino detection studies."
      },
      {
        title: "Photon Recognition Algorithms for Dark Matter Searches",
        authors: ["Undergraduate Project Report"],
        year: 2019,
        publication_type: "Technical / Academic Report",
        venue: "Imperial College London",
        location: "London, United Kingdom",
        url: "https://spiral.imperial.ac.uk/",
        identifiers: {
          keywords: ["photon recognition", "CNN", "PMT", "LZ experiment"]
        },
        description: "This report compares traditional photon recognition techniques with CNN-based approaches using simulated and real PMT data, evaluating accuracy, robustness, and computational cost."
      }
    ],
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
