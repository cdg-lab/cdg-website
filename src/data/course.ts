export interface CourseInfo {
  code: string;
  title: string;
  term: string;
  instructor: string;
  time: string;
  location: string;
  officeHours: string;
  description: string;
  prerequisites: string[];
}

export interface StaffMember {
  name: string;
  role: string;
  email: string;
  officeHours?: string;
  office?: string;
  imageUrl?: string;
}

export interface ScheduleEntry {
  week: number;
  date: string;
  topic: string;
  readings?: string[];
  assignments?: string[];
  notes?: string;
}

export interface Assignment {
  id: string;
  title: string;
  dueDate: string;
  description: string;
  points?: number;
  resources?: string[];
  submissionLink?: string;
}

export interface Resource {
  category: string;
  title: string;
  description?: string;
  url?: string;
  type: 'pdf' | 'link' | 'video' | 'book';
}

export const courseInfo: CourseInfo = {
  code: 'CSE556',
  title: 'Computational Design and Fabrication',
  term: 'Spring 2025',
  instructor: 'Adriana Schulz',
  time: 'Monday/Wednesday, 10:00-11:20am',
  location: 'CIT 241',
  officeHours: 'Wednesday 2:00-3:00pm or by appointment',
  description: `This course introduces students to the fundamental concepts of computational design and fabrication. 
    We will explore algorithms and mathematical foundations underlying these topics, including geometry processing, 
    physical simulation, optimization, and interaction techniques. Students will gain hands-on experience with 
    both theoretical concepts and practical applications in digital fabrication.`,
  prerequisites: [
    'CSCI 0330 or CSCI 0300 (Introduction to Computer Systems)',
    'CSCI 0320 or CSCI 0160 (Introduction to Software Engineering)',
    'Basic linear algebra and calculus',
  ],
};

export const staff: StaffMember[] = [
  {
    name: 'Adriana Schulz',
    role: 'Instructor',
    email: 'adriana_schulz@brown.edu',
    officeHours: 'Wednesday 2:00-3:00pm',
    office: 'CIT 543',
  },
  {
    name: 'Teaching Assistant',
    role: 'TA',
    email: 'ta_cse556@brown.edu',
    officeHours: 'Tuesday 3:00-5:00pm',
    office: 'CIT 201',
  },
];

export const schedule: ScheduleEntry[] = [
  {
    week: 1,
    date: 'Jan 22',
    topic: 'Introduction to Computational Design',
    readings: ['Chapter 1: Fundamentals of Computational Geometry'],
    notes: 'Course overview and introduction to key concepts',
  },
  {
    week: 1,
    date: 'Jan 24',
    topic: 'Geometric Representations',
    readings: ['Mesh Data Structures', 'Point Clouds and Voxels'],
  },
  {
    week: 2,
    date: 'Jan 29',
    topic: 'Mesh Processing Fundamentals',
    readings: ['Chapter 2: Mesh Operations'],
    assignments: ['Assignment 1: Mesh Viewer'],
  },
  {
    week: 2,
    date: 'Jan 31',
    topic: 'Surface Reconstruction',
    readings: ['Poisson Surface Reconstruction', 'Marching Cubes'],
  },
  {
    week: 3,
    date: 'Feb 5',
    topic: 'Parametric Design',
    readings: ['Parametric Modeling Techniques'],
  },
  {
    week: 3,
    date: 'Feb 7',
    topic: 'Procedural Modeling',
    readings: ['L-Systems', 'Shape Grammars'],
    assignments: ['Assignment 2: Procedural Generation'],
  },
  {
    week: 4,
    date: 'Feb 12',
    topic: 'Physical Simulation I: Basics',
    readings: ['Introduction to Physics-Based Animation'],
  },
  {
    week: 4,
    date: 'Feb 14',
    topic: 'Physical Simulation II: Deformables',
    readings: ['Mass-Spring Systems', 'FEM Basics'],
  },
  {
    week: 5,
    date: 'Feb 19',
    topic: 'Optimization for Design',
    readings: ['Gradient-Based Optimization', 'Evolutionary Algorithms'],
    assignments: ['Assignment 3: Design Optimization'],
  },
  {
    week: 5,
    date: 'Feb 21',
    topic: 'Topology Optimization',
    readings: ['SIMP Method', 'Level Set Methods'],
  },
  {
    week: 6,
    date: 'Feb 26',
    topic: 'Fabrication Constraints',
    readings: ['Design for Manufacturing'],
  },
  {
    week: 6,
    date: 'Feb 28',
    topic: 'Support Structure Generation',
    readings: ['Support Generation Algorithms'],
  },
  {
    week: 7,
    date: 'Mar 5',
    topic: 'Midterm Review',
    notes: 'Review session for midterm exam',
  },
  {
    week: 7,
    date: 'Mar 7',
    topic: 'Midterm Exam',
    notes: 'In-class midterm examination',
  },
  {
    week: 8,
    date: 'Mar 19',
    topic: 'Interactive Design Tools',
    readings: ['HCI for Design Tools'],
    assignments: ['Project Proposal Due'],
  },
  {
    week: 8,
    date: 'Mar 21',
    topic: 'Machine Learning for Design',
    readings: ['Neural Networks in CAD'],
  },
  {
    week: 9,
    date: 'Mar 26',
    topic: 'Generative Design',
    readings: ['Generative Adversarial Networks for 3D'],
  },
  {
    week: 9,
    date: 'Mar 28',
    topic: 'Material-Aware Design',
    readings: ['Multi-Material 3D Printing'],
  },
  {
    week: 10,
    date: 'Apr 2',
    topic: 'Robotic Fabrication',
    readings: ['Path Planning for Fabrication'],
  },
  {
    week: 10,
    date: 'Apr 4',
    topic: 'Assembly Planning',
    readings: ['Automated Assembly Sequences'],
  },
  {
    week: 11,
    date: 'Apr 9',
    topic: 'Computational Origami',
    readings: ['Mathematics of Paper Folding'],
  },
  {
    week: 11,
    date: 'Apr 11',
    topic: 'Soft Robotics Design',
    readings: ['Computational Design of Soft Robots'],
  },
  {
    week: 12,
    date: 'Apr 16',
    topic: 'Project Presentations I',
    notes: 'Student project presentations',
  },
  {
    week: 12,
    date: 'Apr 18',
    topic: 'Project Presentations II',
    notes: 'Student project presentations',
  },
  {
    week: 13,
    date: 'Apr 23',
    topic: 'Advanced Topics & Future Directions',
    notes: 'Discussion of emerging research areas',
  },
  {
    week: 13,
    date: 'Apr 25',
    topic: 'Course Wrap-up',
    notes: 'Final review and course conclusion',
    assignments: ['Final Project Due'],
  },
];

export const assignments: Assignment[] = [
  {
    id: 'hw1',
    title: 'Assignment 1: Mesh Viewer',
    dueDate: 'February 5, 2025',
    description:
      'Implement a basic 3D mesh viewer with rotation, zoom, and pan controls. Support loading OBJ and PLY file formats.',
    points: 100,
    resources: ['Starter code on GitHub', 'OBJ file format specification'],
  },
  {
    id: 'hw2',
    title: 'Assignment 2: Procedural Generation',
    dueDate: 'February 19, 2025',
    description:
      'Create a procedural modeling system using L-systems or shape grammars to generate complex geometric structures.',
    points: 100,
    resources: ['L-system tutorial', 'Example grammars'],
  },
  {
    id: 'hw3',
    title: 'Assignment 3: Design Optimization',
    dueDate: 'March 5, 2025',
    description:
      'Implement an optimization algorithm to solve a design problem with constraints.',
    points: 100,
    resources: ['Optimization library documentation'],
  },
  {
    id: 'project',
    title: 'Final Project',
    dueDate: 'April 25, 2025',
    description:
      'Design and implement a computational design tool or fabrication-aware algorithm. Projects can be done individually or in groups of 2-3.',
    points: 300,
    resources: ['Project guidelines', 'Previous year examples'],
  },
];

export const resources: Resource[] = [
  {
    category: 'Textbooks',
    title: 'Polygon Mesh Processing',
    description:
      'Botsch et al. - Comprehensive guide to mesh processing algorithms',
    type: 'book',
    url: 'https://www.pmp-book.org/',
  },
  {
    category: 'Textbooks',
    title: 'Computational Geometry: Algorithms and Applications',
    description:
      'de Berg et al. - Fundamental algorithms in computational geometry',
    type: 'book',
  },
  {
    category: 'Software',
    title: 'MeshLab',
    description:
      'Open source system for processing and editing 3D triangular meshes',
    type: 'link',
    url: 'https://www.meshlab.net/',
  },
  {
    category: 'Software',
    title: 'Blender',
    description: 'Free and open-source 3D creation suite',
    type: 'link',
    url: 'https://www.blender.org/',
  },
  {
    category: 'Software',
    title: 'OpenSCAD',
    description: 'Programmatic CAD for creating solid 3D objects',
    type: 'link',
    url: 'https://openscad.org/',
  },
  {
    category: 'Libraries',
    title: 'libigl',
    description: 'Simple C++ geometry processing library',
    type: 'link',
    url: 'https://libigl.github.io/',
  },
  {
    category: 'Libraries',
    title: 'CGAL',
    description: 'Computational Geometry Algorithms Library',
    type: 'link',
    url: 'https://www.cgal.org/',
  },
  {
    category: 'Papers',
    title: 'Course Reading List',
    description: 'Collection of research papers relevant to course topics',
    type: 'pdf',
    url: '/course/reading-list.pdf',
  },
  {
    category: 'Tutorials',
    title: 'Git for Beginners',
    description: 'Introduction to version control with Git',
    type: 'link',
    url: 'https://git-scm.com/book',
  },
  {
    category: 'Tutorials',
    title: 'Linear Algebra Review',
    description: 'Quick review of linear algebra concepts for graphics',
    type: 'pdf',
    url: '/course/linear-algebra-review.pdf',
  },
];
