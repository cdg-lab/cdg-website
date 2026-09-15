import { ReactNode } from 'react';

export interface CourseInfo {
  code: string;
  title: string;
  term: string;
  instructor: string;
  ta: string;
  time: string;
  location: string;
  officeHours: string;
  description: ReactNode;
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

export interface ScheduleEntryLink {
  label: string;
  href: string;
}

export interface ScheduleEntry {
  date: string;
  topic: string;
  links?: ScheduleEntryLink[];
}

/**
 * Summary of a course, used to list courses outside of their own page.
 */
export interface CourseStub {
  id: string;
  code: string;
  title: string;
  term: string;
  instructor: string;
  description: string;
  href: string;
  schedule: string;
  location: string;
}

/** Courses taught by the group, most recent first. */
export const courses: CourseStub[] = [
  {
    id: 'csci-2952y-fall2026',
    code: 'CSCI 2952Y',
    title: 'Special Topics in Computational Design and Fabrication',
    term: 'Fall 2026',
    instructor: 'Adriana Schulz',
    description:
      'This course explores the core mathematical, algorithmic, and computational principles that drive modern design tools, focusing on digital design representations, generative design, optimization, and interactive exploration.',
    href: '/courses/csci2952y-fall2026',
    schedule: 'Monday/Friday, 9:00–10:20 AM',
    location: 'CIT Center 316',
  },
  {
    id: 'csci-1953b',
    code: 'CSCI 1953B',
    title: 'Special Topics in Computational Design and Fabrication',
    term: 'Spring 2026',
    instructor: 'Adriana Schulz',
    description:
      'This course explores the core mathematical, algorithmic, and computational principles that drive modern design tools, focusing on digital design representations, generative design, optimization, and interactive exploration.',
    href: '/courses/csci1953b-spring2026',
    schedule: 'Monday/Wednesday, 9:00–10:20 AM',
    location: 'CIT Center 101',
  },
  {
    id: 'csci-2952y',
    code: 'CSCI 2952Y',
    title: 'Special Topics in Computational Design and Fabrication',
    term: 'Fall 2025',
    instructor: 'Adriana Schulz',
    description:
      'This course explores the core mathematical, algorithmic, and computational principles that drive modern design tools, focusing on digital design representations, generative design, optimization, and interactive exploration.',
    href: '/courses/csci2952y-fall2025',
    schedule: 'Monday/Friday, 9:00–10:20 AM',
    location: 'CIT Center 316',
  },
];
