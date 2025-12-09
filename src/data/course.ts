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

export interface ScheduleEntryLink {
  label: string;
  href: string;
}

export interface ScheduleEntry {
  date: string;
  topic: string;
  links?: ScheduleEntryLink[];
}
