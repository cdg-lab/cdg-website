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
];

news.sort((a, b) => b.date.getTime() - a.date.getTime());
