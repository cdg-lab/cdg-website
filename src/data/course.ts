export interface CourseInfo {
  code: string;
  title: string;
  term: string;
  instructor: string;
  ta: string;
  time: string;
  location: string;
  officeHours: string;
  description: string;
}

export interface Announcement {
  id: string;
  date: string;
  title: string;
  content: string;
  priority?: 'high' | 'normal' | 'low';
}

export interface ImportantDate {
  id: string;
  date: string;
  description: string;
}

export interface ScheduleEntryLink {
  label: string;
  href: string;
}

export interface ScheduleEntry {
  date: string;
  topic: string;
  links?: ScheduleEntryLink[];
}

export const courseInfo: CourseInfo = {
  code: 'CSE556',
  title: 'Computational Design and Fabrication',
  term: 'Spring 2025',
  instructor: 'Adriana Schulz',
  ta: 'Jack Zhang',
  time: 'Monday/Wednesday, 10:00-11:20am',
  location: 'CIT 241',
  officeHours: 'Wednesday 2:00-3:00pm or by appointment',
  description: `This course introduces students to the new and exciting field of computational design and fabrication, which is currently laying the foundations on which the next generation of manufacturing workflows and systems will be built. The focus of this course is the algorithms and mathematical fundamentals for supporting computational design. The majority of the course will be around computational techniques, however we will also discuss fabrication hardware and workflow. Students are not expected to have any experience with fabrication but we will require a mathematical and computer science background (such as linear algebra, geometry, and algorithmic analysis). Topics include concepts of geometry processing fundamentals, hardware abstraction languages, physics-based simulation, optimization techniques, and data-driven generative modeling.`,
};

export const schedule: ScheduleEntry[] = [
  {
    date: '01/06/25',
    topic: 'Course Overview',
    links: [
      { label: 'Notes', href: '/notes/lecture01.pdf' },
      { label: 'Slides', href: '/slides/lecture01.pdf' },
    ],
  },
  {
    date: '01/08/25',
    topic: 'Design Representations Part 1: Data Structures',
    links: [{ label: 'Slides', href: '/slides/lecture02.pdf' }],
  },
  {
    date: '01/13/25',
    topic: 'Design Representations Part 2: More on Data Structures',
    links: [{ label: 'Slides', href: '/slides/lecture03.pdf' }],
  },
  {
    date: '01/15/25',
    topic: 'Design Representations Part 3: Programs',
    links: [
      { label: 'Slides', href: '/slides/lecture04.pdf' },
      { label: 'Project ideas', href: '/project-ideas.pdf' },
    ],
  },
  {
    date: '01/20/25',
    topic: 'No Lecture',
  },
  {
    date: '01/22/25',
    topic: 'Design Spaces Part 1: Symbolic Spaces',
    links: [
      { label: 'Notes', href: '/notes/lecture05.pdf' },
      { label: 'Slides', href: '/slides/lecture05.pdf' },
    ],
  },
  {
    date: '01/27/25',
    topic: 'Design Spaces Part 2: Variations from a Single Example',
    links: [{ label: 'PDF', href: '/slides/lecture06.pdf' }],
  },
  {
    date: '01/29/25',
    topic: 'Project Pitches',
  },
  {
    date: '02/03/25',
    topic: 'Design Spaces Part 3: Learned Spaces from a Collection',
    links: [{ label: 'PDF', href: '/slides/lecture08.pdf' }],
  },
  {
    date: '02/05/25',
    topic: 'Fabrication Intro and Lab',
    links: [{ label: 'PDF', href: '/slides/lecture09.pdf' }],
  },
  {
    date: '02/10/25',
    topic: 'Fabrication Part 2 and Intro to Simulation',
    links: [{ label: 'PDF', href: '/slides/lecture10.pdf' }],
  },
  {
    date: '02/12/25',
    topic: 'Design Evaluation Part 2: Simulation Part 2',
    links: [{ label: 'PDF', href: '/slides/lecture11.pdf' }],
  },
  {
    date: '02/19/25',
    topic: 'Design Optimization Part 1: Continuous and Discrete Optimization',
    links: [
      { label: 'PDF - part 1', href: '/slides/lecture12-part1.pdf' },
      { label: 'PDF - part 2', href: '/slides/lecture12-part2.pdf' },
    ],
  },
  {
    date: '02/24/25',
    topic: 'Design Optimization Part 2: Topology Optimization',
    links: [{ label: 'PDF', href: '/slides/lecture13.pdf' }],
  },
  {
    date: '02/26/25',
    topic: 'Design Optimization Part 3: Multi-Objective Optimization',
    links: [{ label: 'PDF', href: '/slides/lecture14.pdf' }],
  },
  {
    date: '03/03/25',
    topic: 'Design Optimization Part 4: Bi-level and Bayesian Optimization',
    links: [{ label: 'PDF', href: '/slides/lecture15.pdf' }],
  },
  {
    date: '03/05/25',
    topic:
      'Design Exploration Part 1: Visualization and Interactive Exploration',
    links: [{ label: 'PDF', href: '/slides/lecture16.pdf' }],
  },
  {
    date: '03/10/25',
    topic: 'Design Exploration Part 2: Inference',
    links: [{ label: 'PDF', href: '/slides/lecture17.pdf' }],
  },
  {
    date: '03/12/25',
    topic: 'Project Presentations',
  },
];

export const announcements: Announcement[] = [
  {
    id: 'first-day',
    date: 'September 1, 2025',
    title: 'First Day of Class',
    content:
      'Our first class will be on September 1. Looking forward to seeing you all!',
    priority: 'normal',
  },
];

export const importantDates: ImportantDate[] = [
  {
    id: 'first-day',
    date: 'Jan 22',
    description: 'First Day of Class',
  },
  {
    id: 'midterm',
    date: 'Mar 7',
    description: 'Midterm Exam',
  },
  {
    id: 'project-proposal',
    date: 'Mar 19',
    description: 'Project Proposal Due',
  },
  {
    id: 'final-project',
    date: 'Apr 25',
    description: 'Final Project Due',
  },
];
