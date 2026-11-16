export type News = {
  title: string;
  date: Date;
  content?: string;
  link?: string;
  image?: string;
};

export const news: News[] = [
  {
    date: new Date('2024-02-20'),
    title: 'Adriana Schulz Named 2024 SLOAN Fellow',
    link: 'https://sloan.org/fellowships',
  },
  {
    date: new Date('2024-03-18'),
    title:
      'Adriana Schulz Receives NSF CAREER Award on SmartCAD: Shaping the Next Revolution in Computer-Aided Design',
    link: 'https://www.nsf.gov/funding/opportunities/career-faculty-early-career-development-program',
  },
  {
    date: new Date('2024-06-07'),
    title: 'Ben Jones Defends PhD Thesis',
    content:
      'Congratulations to Ben Jones on defending his PhD thesis titled: "Enabling AI in Computer Aided Design through Representations". He is joining MIT as a postdoctoral researcher.',
  },
  {
    date: new Date('2024-07-30'),
    title: 'Adriana Schulz Receives ACM Significant New Researcher Award 2024',
    link: 'https://www.siggraph.org/awards/significant-new-researcher-award/',
  },
  {
    date: new Date('2024-12-06'),
    title: 'James Noeckel Defends PhD Thesis',
    content:
      'Congratulations to James Noeckel on defending his PhD thesis titled: "Fabrication-Aware Reconstruction". He is joining Apple as a graphics software engineer.',
  },
  {
    date: new Date('2025-04-26'),
    title: 'Honorable Mention at CHI 2025',
    content:
      'Our paper "Incorporating Sustainability in Electronics Design: Obstacles and Opportunities" received an Honorable Mention at CHI 2025.',
    link: 'https://doi.org/10.1145/3706598.3713299',
  },
  {
    date: new Date('2025-05-14'),
    title: 'Yuxuan Mei Defends PhD Thesis',
    content:
      'Congratulations to Yuxuan Mei on defending his PhD thesis titled: "Design for Sustainable Fabrication". She is joining Wesleyan University as an Assistant Professor.',
  },
  {
    date: new Date('2025-06-05'),
    title: 'Adriana Schulz Named 2025 CRA Anita Borg Early Career Award Winner',
    link: 'https://cra.org/crn/2025/06/cra-early-career-awards-adriana-schulz-named-2025-cra-anita-borg-early-career-award-recipient/',
  },
  {
    date: new Date('2025-07-03'),
    title: 'Adriana Schulz Gave a Keynote at SGP 2025',
    link: 'https://sgp2025.my.canva.site/program-page-sgp',
    image: 'sgp2025.jpg',
  },
  {
    date: new Date('2025-08-19'),
    title: 'Adriana Schulz Joins Brown CS',
    content:
      'Adriana Schulz has joined the Department of Computer Science at Brown University as an Associate Professor, moving from the University of Washington.',
    link: 'https://cs.brown.edu/news/2025/08/19/adriana-schulz-joins-brown-cs-as-associate-professor/',
  },
  {
    date: new Date('2026-06-11'),
    title: 'Amy Zhu Defends PhD Thesis',
    content:
      'Congratulations to Amy Zhu on defending her PhD thesis titled: "Beyond Shape: Construction-Aware Languages for Design for the Physical World". She is joining CLO Virtual Fashion (CLO3D).',
    link: 'https://hdl.handle.net/1773/57744',
  },
  {
    date: new Date('2026-07-24'),
    title: 'Our Paper Featured on the Cover of Nature Electronics',
    content:
      'Our paper "Sustainability assessment using multimodal artificial intelligence agents" is the cover article of Nature Electronics Volume 9, Issue 7 (July 2026), accompanied by the editorial "An AI fix for an AI problem?".',
    link: 'https://www.nature.com/articles/s41928-026-01679-0',
    image: 'nature-electronics-cover.jpg',
  },
  {
    date: new Date('2026-09-01'),
    title: 'Three New PhD Students Join the Lab',
    content:
      'Welcome to Joanna Yoo, Alice Wei and Jackie Aslarus, who join the lab as PhD students in fall 2026.',
  },
  {
    date: new Date('2026-10-21'),
    title: 'Adriana Schulz Keynotes Pacific Graphics 2026',
    content:
      'Adriana Schulz gave the keynote "Designing for the Physical World" at Pacific Graphics 2026.',
    link: 'https://cs.brown.edu/news/2026/10/21/adriana-schulz-keynotes-pacific-graphics-2026/',
    image: 'pacific-graphics-2026.jpg',
  },
];

news.sort((a, b) => b.date.getTime() - a.date.getTime());
