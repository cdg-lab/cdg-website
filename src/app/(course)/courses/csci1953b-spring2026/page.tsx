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
  title: 'CSCI 1953B - Computational Design and Fabrication',
};

const courseInfo: CourseInfo = {
  code: 'CSCI 1953B',
  title: 'Special Topics in Computational Design and Fabrication',
  term: 'Spring 2026',
  instructor: 'Adriana Schulz (She/Her)',
  ta: 'Vivian Li (She/Her) \n Oras Phongpanangam (He/Him)',
  time: 'Monday/Wednesday, 9:00–10:20 AM',
  location: 'CIT Center 101',
  officeHours: 'TBD', // TODO: add office hours
  description: `This course explores the core mathematical, algorithmic, and computational principles that drive modern design tools, focusing on digital design representations, generative design, optimization, and interactive exploration. Students will learn to develop computational models for automating design processes, implement algorithms for shape generation and performance evaluation, and integrate digital design with fabrication techniques such as 3D printing, laser cutting, and machine knitting. The course includes hands-on assignments and a final project where students build their own computational design workflow.`,
};

const gradingPolicy: GradingPolicy[] = [
  { component: 'Assignments', percentage: 50 },
  { component: 'Course Project', percentage: 35 },
  { component: 'Participation', percentage: 15 },
];

const assignments: Assignment[] = [
  { id: 'hw1', name: 'HW1', released: '01/28/2026', due: '02/12/2026' },
  { id: 'hw2', name: 'HW2', released: '02/12/2026', due: '02/26/2026' },
  { id: 'hw3', name: 'HW3', released: '02/25/2026', due: '03/19/2026' },
  { id: 'hw4', name: 'HW4', released: '03/18/2026', due: '04/09/2026' },
  { id: 'hw5', name: 'HW5', released: '04/08/2026', due: '04/23/2026' },
];

const projectMilestones: ProjectMilestone[] = [
  {
    id: 'groupForming',
    name: 'Project Group Forming Activity',
    date: '02/18/2026',
  },
  {
    id: 'part1',
    name: 'Project Part 1: Domain-Specific Design Interface',
    date: '03/09/2026',
  },
  {
    id: 'part2',
    name: 'Project Part 2: Fabrication Demonstration',
    date: '04/01/2026',
  },
  {
    id: 'part3',
    name: 'Project Part 3: Automatic Design Generation',
    date: '05/04/2026',
  },
];

const schedule: ScheduleEntry[] = [
  { date: '01/21/2026', topic: 'Overview & Admin' },
  {
    date: '01/26/2026',
    topic: 'Design Representations Part 1: Data Structures',
  },
  {
    date: '01/28/2026',
    topic: 'Design Representations Part 2: More on Data Structures',
  },
  { date: '02/02/2026', topic: 'Design Representations Part 3: Programs' },
  { date: '02/04/2026', topic: 'Design Spaces Part 1: Symbolic Spaces' },
  {
    date: '02/09/2026',
    topic: 'Design Spaces Part 2: Variations from a Single Example',
  },
  {
    date: '02/12/2026',
    topic: 'Design Spaces Part 3: Learned Spaces from a Collection',
  },
  { date: '02/16/2026', topic: 'No class: Holiday' },
  {
    date: '02/18/2026',
    topic:
      'Design Spaces Part 4: NeuroSymbolic Design Spaces / Project Planning ',
  },
  { date: '02/23/2026', topic: 'Fabrication Part 1: Hardware Abstractions ' },
  {
    date: '02/25/2026',
    topic: 'Fabrication Part 2: BDW (3D Printing/ Laser Cutting)',
  },
  {
    date: '03/02/2026',
    topic: 'Fabrication Part 3: BDW (3D Printing/ Laser Cutting)',
  },
  { date: '03/04/2026', topic: 'Fabrication Part 4: Knitting' },
  { date: '03/09/2026', topic: 'Project Part 1 presentation ' },
  { date: '03/11/2026', topic: 'Design Evaluation Part 1: Intro to Sim' },
  { date: '03/16/2026', topic: 'Design Evaluation Part 2: FEA, Learning' },
  { date: '03/18/2026', topic: 'Design Evaluation Part 3: Sustainability ' },
  { date: '03/23/2026', topic: 'No class: Spring Break' },
  { date: '03/25/2026', topic: 'No class: Spring Break' },
  {
    date: '03/30/2026',
    topic: 'Design Optimization Part 1: Continuous and Discrete Optimization',
  },
  { date: '04/01/2026', topic: 'Project Part 2 presentation' },
  {
    date: '04/06/2026',
    topic: 'Design Optimization Part 2: Topology Optimization',
  },
  { date: '04/08/2026', topic: 'No class: Adriana OOF' },
  {
    date: '04/13/2026',
    topic: 'Design Optimization Part 3: Multi-Objective Optimization',
  },
  {
    date: '04/15/2026',
    topic: 'Design Optimization Part 4: Bi-level and Bayesian Optimization',
  },
  {
    date: '04/20/2026',
    topic:
      'Design Exploration Part 1: Visualization and Interactive Exploration',
  },
  { date: '04/22/2026', topic: 'Design Exploration Part 2: Inference' },
  {
    date: '04/27/2026',
    topic:
      'Design Exploration Part 3: Design Support that Improves Understanding',
  },
  { date: '04/29/2026', topic: 'Design Exploration Part 4: Accessibility ' },
  { date: '05/04/2026', topic: 'Final Project Presentations' },
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
                    href='/assets/course/SyllabusSpring20260115.pdf'
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
                        entry.topic.includes('No class')
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
                          entry.topic.includes('No class')
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
                    <p style={{ whiteSpace: 'pre-line' }}>{courseInfo.ta}</p>
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
