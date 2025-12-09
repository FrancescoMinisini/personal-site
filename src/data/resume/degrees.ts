export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
}

const degrees: Degree[] = [
  {
    school: 'University of Milan',
    degree: 'B.Sc. in Physics',
    link: 'https://www.unimi.it/en',
    year: 2026, // Expected
  },
  {
    school: 'University of Oslo',
    degree: 'B.Sc. Physics (Exchange)',
    link: 'https://www.uio.no/english/',
    year: 2025,
  },
  {
    school: 'Liceo Scientifico Alessandro Volta',
    degree: 'High School Diploma',
    link: 'https://www.volta.edu.it', // Best guess or placeholder
    year: 2023,
  },
];

export default degrees;
