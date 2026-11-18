import imgAlphintra3D from '../assets/projects/alphintra-3d.webp';
import imgAlphintraWelcome from '../assets/projects/alphintra-welcome.webp';
import imgCipherLux from '../assets/projects/cipherlux.webp';
import imgBusHub from '../assets/projects/bushub.webp';
import imgAlphintraCompany from '../assets/projects/alphintra-company.webp';
import imgParken from '../assets/projects/landing-slide-hero.webp';
import imgAlwayzz from '../assets/projects/landing-alwayzz.webp';
import imgMountainForest from '../assets/projects/landing-mountain-forest.webp';
import imgInTheClouds from '../assets/projects/landing-in-the-clouds.webp';

export const profile = {
  name: 'Sankavi Thayaparan',
  shortName: 'Sankavi',
  initials: 'ST',
  role: 'Web Developer & UI/UX designer',
  tagline: ['Crafting scalable software products', 'with immersive experiences', 'on the web & mobile.'],
  location: 'Colombo, Sri Lanka',
  status: 'Open to work',
  email: 'sankavithayaparan1605@gmail.com',
  github: 'https://github.com/Sankavi1605',
  linkedin: 'https://www.linkedin.com/in/sankavi-thayaparan-b257392a0/',
  cv: '/SankaviThayaparan_SE.pdf',
};

export const navLinks = [
  { id: 'about', label: 'About me' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
];

export const about = {
  intro:
    'Computer Science undergraduate and Web Developer with hands-on experience building modern, responsive, and high-performance web applications using React.js, Next.js, Vue.js, JavaScript, and Tailwind CSS.',
  detail:
    'I specialize in translating UI requirements into clean user interfaces, integrating REST APIs, optimizing frontend performance, and deploying web applications.',
  facts: [
    'Open to internships and graduate software engineering roles',
    'Focused on full-stack products, mobile apps, and backend systems',
    'Interested in product teams that care about usability and delivery quality',
  ],
};

export const experience = [
  {
    role: 'Frontend Developer',
    place: 'Alphintra',
    date: 'Jan 2026 – Present',
    description:
      'Developed responsive web applications using React.js, Next.js, and Tailwind CSS. Built reusable components, integrated REST APIs, and connected AI-powered services while optimizing performance and accessibility.',
  },
  {
    role: 'Software Engineer Intern',
    place: 'MoodforCode',
    date: 'Dec 2025 – May 2026',
    description:
      'Developed frontend features and integrated backend services across web applications. Collaborated in Agile environments, improving application maintainability through structured troubleshooting and code reviews.',
  },
];

export const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Colombo School of Computing',
    year: '2023 – Present',
  },
  {
    degree: 'G.C.E Advanced Level — Physical Science',
    institution: 'Vembadi Girls’ High School, Jaffna',
    year: '2019 – 2021',
  },
];

export const certifications = [
  { title: 'Next.js Essential Training', issuer: 'LinkedIn Learning' },
  { title: 'Front End Development Libraries', issuer: 'freeCodeCamp' },
  { title: 'HTML, CSS, and JavaScript for Web Developers', issuer: 'Coursera' },
  { title: 'Machine Learning with Python Foundations', issuer: 'LinkedIn Learning' },
];

export const services = [
  {
    title: 'Frontend development',
    description: 'Clean, responsive interfaces built from reusable components and tuned for performance and accessibility.',
    tools: ['React.js', 'Next.js', 'Vue.js', 'Tailwind CSS'],
  },
  {
    title: 'UI/UX & responsive design',
    description: 'Translating UI requirements into user-friendly screens that hold up across every screen size.',
    tools: ['Responsive Design', 'Component-Based Dev'],
  },
  {
    title: 'Backend & APIs',
    description: 'REST APIs, authentication and database-driven features that connect the interface to real data.',
    tools: ['Node.js', 'Express.js', 'Django', 'FastAPI', 'MongoDB', 'PostgreSQL', 'MySQL'],
  },
  {
    title: 'Immersive web & deployment',
    description: 'Interactive 3D brand experiences, shipped and hosted so they stay fast on desktop and mobile.',
    tools: ['Three.js', 'WebGL', 'Docker', 'Google Cloud Run', 'Vercel', 'Git'],
  },
];

export const marquee = [
  'Web Developer',
  'UI/UX designer',
  'React.js',
  'Next.js',
  'Vue.js',
  'Tailwind CSS',
  'Node.js',
  'Django',
  'FastAPI',
  'Three.js',
  'REST APIs',
];

/* Order and titles follow the Canva design. */
export const projects = [
  {
    id: 'alphintra-3d',
    title: 'Alphintra Interactive 3D Brand Experience',
    subtitle: 'Immersive WebGL-based 3D web experience',
    focus: 'Delivering high-performance, interactive 3D web experiences.',
    tech: ['Three.js', 'JavaScript', 'WebGL'],
    live: 'https://alphintra.com',
    code: 'https://github.com/Sankavi1605',
    image: imgAlphintra3D,
  },
  {
    id: 'alphintra-welcome',
    title: 'Alphintra welcome Website & AI Assistant',
    subtitle: 'Responsive corporate website with AI Chatbot',
    focus: 'Blending modern web architecture with AI integrations.',
    tech: ['Django', 'Python', 'FastAPI', 'Google Cloud Run'],
    live: 'https://welcome-alphintra-kappa.vercel.app/',
    code: 'https://github.com/Sankavi1605',
    image: imgAlphintraWelcome,
  },
  {
    id: 'cipherlux',
    title: 'Cipherlux',
    subtitle: 'Real-Time Trading Platform',
    focus: 'Building the future of crypto trading with speed, security, and intelligence.',
    tech: ['Next.js', 'React.js', 'TypeScript', 'REST APIs'],
    live: 'https://app.cipherlux.com/',
    code: '',
    image: imgCipherLux,
  },
  {
    id: 'alphintra-company',
    title: 'Alphintra Company page',
    subtitle: 'AI, Web, Mobile, Cloud & 3D Engineering Studio',
    focus: 'Company website with projects, services, careers, about and contact pages.',
    tech: [],
    live: 'https://alphintra4.vercel.app/',
    code: '',
    image: imgAlphintraCompany,
  },
  {
    id: 'landing-pages',
    title: 'Landing pages',
    subtitle: 'Four landing pages I created',
    focus: 'Pick one to preview it, then open it live.',
    tech: [],
    live: '',
    code: '',
    image: null,
    /* a project with `pages` shows a gallery: one screenshot at a time, one live link each */
    pages: [
      { title: 'Parken Studio', live: 'https://canva-slidehero.vercel.app/', image: imgParken },
      { title: 'Alwayzz', live: 'https://alwayzz-grass-website.vercel.app/', image: imgAlwayzz },
      { title: 'Mountain Forest', live: 'https://mountain-forest.vercel.app/', image: imgMountainForest },
      { title: 'In the Clouds', live: 'https://in-the-clouds-hero-slider.vercel.app/', image: imgInTheClouds },
    ],
  },
  {
    id: 'bushub-lk',
    title: 'Bushub LK',
    subtitle: 'Transport Management Platform',
    focus: 'Reimagining public transport through digital operations and passenger tooling.',
    tech: ['React', 'React Native', 'MongoDB', 'REST APIs'],
    live: 'https://bus-hub-lk.vercel.app/',
    code: 'https://github.com/MurshidAkram/BusHubLK',
    image: imgBusHub,
  },
];
