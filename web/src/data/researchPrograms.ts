export interface OnlineProgram {
  id: string;
  name: string;
  org: string;
  deadline: string;
  shortDesc: string;
  fullDesc: string;
  eligibility: string;
  duration: string;
  cost: string;
  url: string;
}

export interface InPersonProgram {
  id: string;
  name: string;
  institution: string;
  city: string;
  state: string;
  lat: number;
  lon: number;
  duration: string;
  deadline: string;
  description: string;
  url: string;
}

// Add new online programs by appending to this array.
export const ONLINE_PROGRAMS: OnlineProgram[] = [
  {
    id: 'polygence',
    name: 'Polygence',
    org: 'Polygence',
    deadline: 'Rolling admissions',
    shortDesc: 'One-on-one mentorship with PhD researchers on a self-directed research project of your choice.',
    fullDesc: 'Polygence pairs students with PhD mentors to conduct independent research and produce a publishable paper or poster. Students choose their own topic, work with their mentor to design a project, and present their findings.',
    eligibility: 'High school students (grades 8–12)',
    duration: '12 sessions over ~6 months',
    cost: 'Paid (financial aid available)',
    url: 'https://www.polygence.org',
  },
  {
    id: 'inspirit-ai',
    name: 'Inspirit AI',
    org: 'Inspirit AI',
    deadline: 'Rolling admissions',
    shortDesc: 'Live online AI program led by Stanford and MIT alumni — apply machine learning to real-world problems.',
    fullDesc: 'Inspirit AI runs cohort-based courses where high schoolers learn machine learning and AI through project-based learning. Students build AI projects with applications in healthcare, climate science, and other domains.',
    eligibility: 'High school students (grades 8–12)',
    duration: '10 weeks (part-time)',
    cost: 'Paid (scholarships available)',
    url: 'https://www.inspiritai.org',
  },
  {
    id: 'mit-primes',
    name: 'MIT PRIMES',
    org: 'MIT',
    deadline: 'December annually',
    shortDesc: 'Prestigious year-long research at MIT for high schoolers in math, CS, and computational biology.',
    fullDesc: 'MIT PRIMES is a highly selective research program where students work on advanced research projects mentored by MIT researchers and graduate students. The program is free and exceptionally competitive.',
    eligibility: 'High school juniors and seniors with strong math/CS background',
    duration: 'Year-long (January–December)',
    cost: 'Free',
    url: 'https://math.mit.edu/research/highschool/primes/',
  },
  {
    id: 'lumiere',
    name: 'Lumiere Research Scholar Program',
    org: 'Lumiere Education',
    deadline: 'Rolling admissions (3 cohorts/year)',
    shortDesc: '1-on-1 mentorship with PhD researchers from top universities — aimed at publishable research.',
    fullDesc: 'Lumiere pairs students with PhD mentors from universities like Harvard, MIT, and Stanford. Students conduct independent research and work toward publishing in academic journals or presenting at conferences.',
    eligibility: 'High school students (grades 9–12)',
    duration: '12 weeks',
    cost: 'Paid (financial aid available)',
    url: 'https://www.lumiere.education',
  },
  {
    id: 'veritas-ai',
    name: 'Veritas AI',
    org: 'Veritas AI',
    deadline: 'Rolling admissions',
    shortDesc: 'AI research mentorship led by Harvard PhDs — from beginner-friendly to publication-level projects.',
    fullDesc: 'Veritas AI offers mentored research programs in machine learning and AI, with tracks for beginners and advanced students. Students produce research papers and gain skills in Python, deep learning, and scientific writing.',
    eligibility: 'High school students with interest in AI/ML (no prior experience required for intro track)',
    duration: '10–20 weeks depending on track',
    cost: 'Paid (merit scholarships available)',
    url: 'https://www.veritasai.org',
  },
  {
    id: 'nih-virtual',
    name: 'NIH Virtual Summer Program',
    org: 'National Institutes of Health',
    deadline: 'February–March annually',
    shortDesc: 'Virtual biomedical research experience hosted by NIH scientists across all institutes.',
    fullDesc: 'The NIH Virtual Summer Program offers high school students exposure to biomedical research through lectures, seminars, and mentored projects with NIH scientists. Students learn about ongoing research and career pathways in science.',
    eligibility: 'High school students (16+) with US citizenship or permanent residency',
    duration: '8 weeks (summer)',
    cost: 'Free (stipend may be available)',
    url: 'https://www.training.nih.gov',
  },
  {
    id: 'regeneron-sts',
    name: 'Regeneron Science Talent Search',
    org: 'Society for Science',
    deadline: 'November annually',
    shortDesc: 'The most prestigious US science competition for high school seniors — requires original research.',
    fullDesc: 'The Regeneron STS is America\'s oldest and most prestigious pre-college science competition. Students submit an original research paper on any STEM topic. Finalists present in Washington D.C. for a chance at up to $250,000 in awards.',
    eligibility: 'US high school seniors',
    duration: 'Project-based (submit completed research)',
    cost: 'Free to apply',
    url: 'https://www.societyforscience.org/regeneron-sts/',
  },
  {
    id: 'simons-summer',
    name: 'Simons Summer Research Program',
    org: 'Stony Brook University',
    deadline: 'January annually',
    shortDesc: 'Selective summer research at Stony Brook — students work in real university labs.',
    fullDesc: 'The Simons Summer Research Program places exceptional high school students in Stony Brook University labs for 7 weeks. Students work alongside faculty on real research projects in science, math, and engineering.',
    eligibility: 'High school juniors (primarily from Long Island, NY)',
    duration: '7 weeks (summer)',
    cost: 'Free (highly competitive)',
    url: 'https://www.stonybrook.edu/commcms/simons/',
  },
];

// Add new in-person programs by appending to this array.
export const INPERSON_PROGRAMS: InPersonProgram[] = [
  {
    id: 'regeneron-hsmp',
    name: 'Regeneron HSMP',
    institution: 'Regeneron Pharmaceuticals',
    city: 'Old Tappan',
    state: 'NJ',
    lat: 40.9776,
    lon: -74.0154,
    duration: '8 weeks (summer)',
    deadline: 'February annually',
    description: 'Paid summer internship at Regeneron working alongside scientists on cutting-edge biomedical research.',
    url: 'https://www.regeneron.com/students',
  },
  {
    id: 'nih-sip',
    name: 'NIH Summer Internship Program',
    institution: 'National Institutes of Health',
    city: 'Bethesda',
    state: 'MD',
    lat: 39.0000,
    lon: -77.1000,
    duration: '8–10 weeks (summer)',
    deadline: 'March annually',
    description: 'Work alongside NIH scientists at one of the world\'s leading biomedical research campuses.',
    url: 'https://www.training.nih.gov/programs/hs-sip',
  },
  {
    id: 'cshl',
    name: 'Cold Spring Harbor Lab Intern Program',
    institution: 'Cold Spring Harbor Laboratory',
    city: 'Cold Spring Harbor',
    state: 'NY',
    lat: 40.8676,
    lon: -73.4679,
    duration: '6–8 weeks (summer)',
    deadline: 'February annually',
    description: 'Research internship at a world-renowned genetics and neuroscience laboratory on Long Island.',
    url: 'https://www.cshl.edu/education/',
  },
  {
    id: 'salk',
    name: 'Salk Institute High School Program',
    institution: 'Salk Institute for Biological Studies',
    city: 'La Jolla',
    state: 'CA',
    lat: 32.8732,
    lon: -117.2348,
    duration: '8 weeks (summer)',
    deadline: 'February annually',
    description: 'Summer research experience at one of the world\'s premier biological research institutions.',
    url: 'https://www.salk.edu/education/',
  },
  {
    id: 'stanford-simr',
    name: 'Stanford SIMR',
    institution: 'Stanford University',
    city: 'Stanford',
    state: 'CA',
    lat: 37.4275,
    lon: -122.1697,
    duration: '8 weeks (summer)',
    deadline: 'February annually',
    description: 'Stanford Immersion in Medical Research places high schoolers in Stanford medical research labs.',
    url: 'https://simr.stanford.edu',
  },
  {
    id: 'jax',
    name: 'Jackson Laboratory Summer Program',
    institution: 'The Jackson Laboratory',
    city: 'Bar Harbor',
    state: 'ME',
    lat: 44.3876,
    lon: -68.2039,
    duration: '10 weeks (summer)',
    deadline: 'February annually',
    description: 'Competitive summer program at JAX, the world leader in mouse genetics and genomics research.',
    url: 'https://www.jax.org/education-and-learning/high-school-students-and-undergraduates',
  },
  {
    id: 'broad',
    name: 'Broad Institute Summer Research',
    institution: 'Broad Institute of MIT and Harvard',
    city: 'Cambridge',
    state: 'MA',
    lat: 42.3626,
    lon: -71.0921,
    duration: '8–10 weeks (summer)',
    deadline: 'Varies by program',
    description: 'Research at the Broad Institute, a global leader in genomics, disease biology, and drug discovery.',
    url: 'https://www.broadinstitute.org/education',
  },
  {
    id: 'dana-farber',
    name: 'Dana-Farber Cancer Institute Internship',
    institution: 'Dana-Farber Cancer Institute',
    city: 'Boston',
    state: 'MA',
    lat: 42.3376,
    lon: -71.1059,
    duration: '6–8 weeks (summer)',
    deadline: 'March annually',
    description: 'Summer research at one of the world\'s leading cancer research and treatment hospitals.',
    url: 'https://www.dana-farber.org/research/education-and-training/',
  },
  {
    id: 'md-anderson',
    name: 'MD Anderson High School Summer Program',
    institution: 'MD Anderson Cancer Center',
    city: 'Houston',
    state: 'TX',
    lat: 29.7070,
    lon: -95.3973,
    duration: '8 weeks (summer)',
    deadline: 'February annually',
    description: 'Hands-on cancer research at the nation\'s top-ranked cancer center in the Texas Medical Center.',
    url: 'https://www.mdanderson.org/education-training/high-school-students.html',
  },
  {
    id: 'mayo-clinic',
    name: 'Mayo Clinic Summer Research Fellowship',
    institution: 'Mayo Clinic',
    city: 'Rochester',
    state: 'MN',
    lat: 44.0225,
    lon: -92.4669,
    duration: '8 weeks (summer)',
    deadline: 'February annually',
    description: 'Immersive research fellowship at Mayo Clinic, working with physician-scientists on clinical and translational research.',
    url: 'https://college.mayo.edu/academics/explore-health-care-careers/opportunities-for-high-school-students/',
  },
];
