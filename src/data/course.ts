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

export interface Assignment {
  id: string;
  name: string;
  released: string;
  due: string;
}

export interface ProjectMilestone {
  id: string;
  name: string;
  date: string;
}

export interface GradingPolicy {
  component: string;
  percentage: number;
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
  code: 'CSCI 2952Y',
  title: 'Special Topics in Computational Design and Fabrication',
  term: 'Fall 2025',
  instructor: 'Adriana Schulz (She/Her)',
  ta: 'Jack Zhang (He/Him)',
  time: 'Monday/Friday, 9:00–10:20 AM',
  location: 'CIT Center (Thomas Watson CIT) 316',
  officeHours: 'Wed 2pm-3pm @ CIT 205',
  description: `This course explores the core mathematical, algorithmic, and computational principles that drive modern design tools, focusing on digital design representations, generative design, optimization, and interactive exploration. Students will learn to develop computational models for automating design processes, implement algorithms for shape generation and performance evaluation, and integrate digital design with fabrication techniques such as 3D printing, laser cutting, and machine knitting. The course includes hands-on assignments and a final project where students build their own computational design workflow.`,
};

export const gradingPolicy: GradingPolicy[] = [
  { component: 'Assignments', percentage: 40 },
  { component: 'Course Project', percentage: 45 },
  { component: 'Participation', percentage: 15 },
];

export const assignments: Assignment[] = [
  { id: 'hw1', name: 'HW1', released: '09/11', due: '09/25' },
  { id: 'hw2', name: 'HW2', released: '09/25', due: '10/09' },
  { id: 'hw3', name: 'HW3', released: '10/09', due: '10/23' },
  { id: 'hw4', name: 'HW4', released: '10/23', due: '11/06' },
];

export const projectMilestones: ProjectMilestone[] = [
  { id: 'pitches', name: 'Project Pitches', date: '10/10/2025' },
  {
    id: 'updates',
    name: 'Project Updates and Rubric Design',
    date: '11/14/2025',
  },
  {
    id: 'presentations',
    name: 'Final Project Presentations',
    date: '12/08/2025',
  },
  { id: 'qa', name: 'Final Project Q&A', date: '12/12/2025' },
];

export const schedule: ScheduleEntry[] = [
  { date: '09/05/2025', topic: 'Overview & Admin' },
  {
    date: '09/08/2025',
    topic: 'Design Representations Part 1: Data Structures',
  },
  {
    date: '09/12/2025',
    topic: 'Design Representations Part 2: More on Data Structures',
  },
  { date: '09/15/2025', topic: 'Design Representations Part 3: Programs' },
  { date: '09/19/2025', topic: 'Design Spaces Part 1: Symbolic Spaces' },
  {
    date: '09/22/2025',
    topic: 'Design Spaces Part 2: Variations from a Single Example',
  },
  {
    date: '09/26/2025',
    topic: 'Design Spaces Part 3: Learned Spaces from a Collection',
  },
  {
    date: '09/29/2025',
    topic: 'Design Realization and Evaluation Part 1: Intro to Fabrication',
  },
  {
    date: '10/03/2025',
    topic: 'Design Realization and Evaluation Part 2: 3D Printing',
  },
  {
    date: '10/06/2025',
    topic: 'Design Realization and Evaluation Part 3: Intro to Simulation',
  },
  { date: '10/10/2025', topic: 'Project Pitches' },
  { date: '10/13/2025', topic: 'Holiday' },
  {
    date: '10/17/2025',
    topic: 'Design Optimization Part 1: Topolgoy Optimization',
  },
  {
    date: '10/20/2025',
    topic: 'Design Optimization Part 2: Discrete Optimization',
  },
  {
    date: '10/24/2025',
    topic: 'Design Optimization Part 3: Multi-Objective Optimization',
  },
  {
    date: '10/27/2025',
    topic: 'Topics: NeuroSymbolic Design Abstractions',
  },
  {
    date: '10/31/2025',
    topic: 'Topics: Fabrication Iteration and Lazer Cutting',
  },
  { date: '11/03/2025', topic: 'Topics: Knitting Design and Abstractions' },
  { date: '11/14/2025', topic: 'Project Updates and Rubric Design' },
  { date: '11/10/2025', topic: 'Topics: Design and Fabrication with LLMs' },
  { date: '11/14/2025', topic: 'Topics: Bi-level and Bayesian Optimization' },
  {
    date: '11/17/2025',
    topic: 'Topics: Visualization and Interactive Exploration',
  },
  {
    date: '11/21/2025',
    topic: 'SCF Conference — Students encouraged to attend',
    links: [{ label: 'SCF Conference', href: 'https://scf.acm.org/2025/' }],
  },
  {
    date: '11/24/2025',
    topic: 'Topics: Design Support that Improves Understanding',
  },
  { date: '11/28/2025', topic: 'Holiday' },
  { date: '12/01/2025', topic: 'Topics: Sustainability' },
  { date: '12/05/2025', topic: 'Topics: Accessibility' },
  { date: '12/08/2025', topic: 'Final Project Presentations' },
  { date: '12/12/2025', topic: 'Final Project Q&A' },
];

export const announcements: Announcement[] = [
  {
    id: 'first-day',
    date: 'September 5, 2025',
    title: 'First Day of Class',
    content:
      'Our first class will be on September 5. Looking forward to seeing you all!',
    priority: 'normal',
  },
];

export const importantDates: ImportantDate[] = [
  {
    id: 'first-day',
    date: 'Sep 5',
    description: 'First Day of Class',
  },
  {
    id: 'hw1-due',
    date: 'Sep 26',
    description: 'HW1 Due',
  },
  {
    id: 'project-pitches',
    date: 'Oct 10',
    description: 'Project Pitches',
  },
  {
    id: 'project-updates',
    date: 'Nov 7',
    description: 'Project Updates',
  },
  {
    id: 'final-presentations',
    date: 'Dec 8',
    description: 'Final Presentations',
  },
];
