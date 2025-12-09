import { DownloadIcon } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';

import {
  type Assignment,
  type CourseInfo,
  type GradingPolicy,
  type ProjectMilestone,
  type ScheduleEntry,
} from '@/data/course';

import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';

export const metadata: Metadata = {
  title: 'CSCI 2952Y - Computational Design and Fabrication',
};

const courseInfo: CourseInfo = {
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

const gradingPolicy: GradingPolicy[] = [
  { component: 'Assignments', percentage: 40 },
  { component: 'Course Project', percentage: 45 },
  { component: 'Participation', percentage: 15 },
];

const assignments: Assignment[] = [
  { id: 'hw1', name: 'HW1', released: '09/11', due: '09/25' },
  { id: 'hw2', name: 'HW2', released: '09/25', due: '10/09' },
  { id: 'hw3', name: 'HW3', released: '10/09', due: '10/23' },
  { id: 'hw4', name: 'HW4', released: '10/23', due: '11/06' },
];

const projectMilestones: ProjectMilestone[] = [
  { id: 'pitches', name: 'Project Pitches', date: '10/17/2025' },
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

const schedule: ScheduleEntry[] = [
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
  {
    date: '10/10/2025',
    topic: 'Design Optimization Part 1: Intro to Numerical Methods',
  },
  { date: '10/13/2025', topic: 'Holiday' },
  {
    date: '10/17/2025',
    topic: 'Project Pitches',
  },
  {
    date: '10/20/2025',
    topic: 'Design Optimization Part 2: Topology Optimization',
  },
  {
    date: '10/24/2025',
    topic: 'Design Optimization Part 3: Multi-Objective Optimization',
  },
  {
    date: '10/27/2025',
    topic: 'Topics: Bi-level and Baysian Optimization',
  },
  {
    date: '10/31/2025',
    topic: 'Rubric Design',
  },
  { date: '11/03/2025', topic: 'Topics: NeuroSymbolic Design Abstractions' },
  { date: '11/14/2025', topic: 'Topics: Designing DSLs for Design' },
  { date: '11/10/2025', topic: 'Topics: Knitting' },
  { date: '11/14/2025', topic: 'Project Updates and Rubric Update' },
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

export default function CoursePage() {
  return (
    <div className='min-h-screen'>
      <section className='bg-gradient-to-b from-stone-50 to-white py-8'>
        <div className='max-w-[1100px] mx-auto px-2 xl:px-0'>
          <div>
            <h1 className='text-4xl font-bold text-stone-800 mb-1'>
              {courseInfo.code}
            </h1>
            <p className='text-xl text-stone-600'>{courseInfo.title}</p>
          </div>

          <div className='mt-8 grid gap-8 md:grid-cols-3'>
            <div className='md:col-span-2'>
              <div className='rounded-lg bg-white px-2 py-6 md:px-6 shadow-small'>
                <h2 className='mb-4 text-2xl font-semibold text-stone-800'>
                  Course Description
                </h2>
                <p className='text-stone-600 leading-relaxed mb-4'>
                  {courseInfo.description}
                </p>
                <div className='flex justify-start gap-2'>
                  <ButtonLink
                    href='/assets/course/SyllabusFall20250904.pdf'
                    className='gap-2'
                    variant='outline'
                  >
                    <DownloadIcon className='h-4 w-4' />
                    Syllabus (PDF)
                  </ButtonLink>
                  <ButtonLink
                    href='https://edstem.org/us/courses/86272/discussion'
                    variant='outline'
                  >
                    Ed Discussion Board
                  </ButtonLink>
                </div>
              </div>

              <div className='mt-6 rounded-lg bg-white px-2 py-6 md:px-6 shadow-small'>
                <h2 className='mb-4 text-2xl font-semibold text-stone-800'>
                  Grading
                </h2>
                <table className='w-full text-sm'>
                  <thead>
                    <tr className='border-b border-stone-200'>
                      <th className='text-left py-2 text-stone-700'>
                        Component
                      </th>
                      <th className='text-right py-2 text-stone-700'>
                        Percentage
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {gradingPolicy.map((item) => (
                      <tr
                        key={item.component}
                        className='border-b border-stone-100'
                      >
                        <td className='py-2 text-stone-600'>
                          {item.component}
                        </td>
                        <td className='py-2 text-right font-semibold text-stone-800'>
                          {item.percentage}%
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className='mt-6 rounded-lg bg-white px-2 py-6 md:px-6 shadow-small'>
                <h2 className='mb-4 text-2xl font-semibold text-stone-800'>
                  Assignments
                </h2>
                <table className='w-full text-sm'>
                  <thead>
                    <tr className='border-b border-stone-200'>
                      <th className='text-left py-2 text-stone-700'>
                        Assignment
                      </th>
                      <th className='text-center py-2 text-stone-700'>
                        Released
                      </th>
                      <th className='text-center py-2 text-stone-700'>Due</th>
                    </tr>
                  </thead>
                  <tbody>
                    {assignments.map((hw) => (
                      <tr key={hw.id} className='border-b border-stone-100'>
                        <td className='py-2 font-medium text-stone-800'>
                          {hw.name}
                        </td>
                        <td className='py-2 text-center text-stone-600'>
                          {hw.released}
                        </td>
                        <td className='py-2 text-center text-stone-600'>
                          {hw.due}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className='mt-6 rounded-lg bg-white px-2 py-6 md:px-6 shadow-small'>
                <h2 className='mb-4 text-2xl font-semibold text-stone-800'>
                  Final Project
                </h2>
                <table className='w-full text-sm'>
                  <thead>
                    <tr className='border-b border-stone-200'>
                      <th className='text-left py-2 text-stone-700'>
                        Milestone
                      </th>
                      <th className='text-right py-2 text-stone-700'>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projectMilestones.map((milestone) => (
                      <tr
                        key={milestone.id}
                        className='border-b border-stone-100'
                      >
                        <td className='py-2 font-medium text-stone-800'>
                          {milestone.name}
                        </td>
                        <td className='py-2 text-right text-stone-600'>
                          {milestone.date}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className='mt-6 rounded-lg bg-white px-2 py-6 md:px-6 shadow-small'>
                <h2 className='mb-4 text-2xl font-semibold text-stone-800'>
                  Lectures
                </h2>
                <div className='space-y-2'>
                  {schedule.map((entry, idx) => (
                    <div
                      key={idx}
                      className={`flex justify-between py-2 px-2 rounded ${
                        entry.topic.includes('Holiday')
                          ? 'bg-gray-100 text-gray-500'
                          : entry.topic.includes('Project') ||
                              entry.topic.includes('Final')
                            ? 'bg-blue-50'
                            : ''
                      }`}
                    >
                      <span className='text-sm text-stone-600 min-w-[100px]'>
                        {entry.date}
                      </span>
                      <span
                        className={`flex-1 ml-4 text-sm ${
                          entry.topic.includes('Holiday')
                            ? 'text-gray-500'
                            : entry.topic.includes('Project') ||
                                entry.topic.includes('Final')
                              ? 'font-medium text-blue-700'
                              : 'font-medium text-stone-800'
                        }`}
                      >
                        {entry.topic}
                      </span>
                      {entry.links && entry.links.length > 0 && (
                        <div className='flex gap-2'>
                          {entry.links.map((link, linkIdx) => (
                            <a
                              key={linkIdx}
                              href={link.href}
                              className='text-xs text-blue-600 hover:text-blue-800 underline'
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <p className='mt-6 text-xs text-stone-500 italic'>
                  Note: The lecture plan is tentative and subject to change.
                  Slides will be posted and updated throughout the course.
                </p>
              </div>
            </div>

            <div>
              <div className=''>
                <Image
                  src='/images/robogami.png'
                  alt='Computational Design Example'
                  width={1200}
                  height={400}
                  className='w-full rounded-lg shadow-small'
                />
              </div>

              <div className='mt-6 rounded-lg bg-white px-2 py-6 md:px-6 shadow-small'>
                <h2 className='mb-4 text-xl font-semibold text-stone-800'>
                  Course Logistics
                </h2>
                <div className='space-y-3 text-stone-600'>
                  <div>
                    <p className='font-medium text-stone-700'>Lecture Time</p>
                    <p>{courseInfo.time}</p>
                  </div>
                  <div>
                    <p className='font-medium text-stone-700'>Location</p>
                    <p>{courseInfo.location}</p>
                  </div>
                  <div>
                    <p className='font-medium text-stone-700'>Instructor</p>
                    <p>
                      <UnderlineLink href='/adriana'>
                        {courseInfo.instructor}
                      </UnderlineLink>
                    </p>
                  </div>
                  <div>
                    <p className='font-medium text-stone-700'>TA</p>
                    <p>{courseInfo.ta}</p>
                  </div>
                  <div>
                    <p className='font-medium text-stone-700'>Office Hours</p>
                    <p>{courseInfo.officeHours}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
