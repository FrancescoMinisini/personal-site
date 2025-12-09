export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
}

const skills: Skill[] = [
  // Languages
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'ML Engineering'],
  },
  {
    title: 'C++',
    competency: 4,
    category: ['Languages', 'Physics'],
  },
  {
    title: 'Rust',
    competency: 3,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'C# / .NET',
    competency: 3,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'SQL (T-SQL)',
    competency: 3,
    category: ['Languages', 'Databases'],
  },
  // Quantum Computing
  {
    title: 'Qiskit',
    competency: 4,
    category: ['Quantum Computing'],
  },
  {
    title: 'PennyLane',
    competency: 3,
    category: ['Quantum Computing'],
  },
  // ML & AI
  {
    title: 'PyTorch',
    competency: 4,
    category: ['ML Engineering'],
  },
  {
    title: 'JAX',
    competency: 4,
    category: ['ML Engineering'],
  },
  {
    title: 'LangGraph',
    competency: 4,
    category: ['ML Engineering'],
  },
  {
    title: 'Azure AI',
    competency: 3,
    category: ['ML Engineering', 'Infrastructure'],
  },
  // Physics & Tools
  {
    title: 'GEANT4',
    competency: 3,
    category: ['Physics'],
  },
  {
    title: 'ROOT',
    competency: 3,
    category: ['Physics'],
  },
  {
    title: 'Linux',
    competency: 4,
    category: ['Infrastructure'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Infrastructure'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors: string[] = [
  '#6968b3', // Languages
  '#37b1f5', // ML Engineering
  '#40494e', // Physics
  '#515dd4', // Quantum Computing
  '#e47272', // Web Development
  '#cc7b94', // Databases
  '#3896e2', // Infrastructure
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories: Category[] = Array.from(
  new Set(skills.flatMap(({ category }) => category)),
)
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
