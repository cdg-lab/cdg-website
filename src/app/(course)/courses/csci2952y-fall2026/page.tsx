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
  term: 'Fall 2026',
  instructor: 'Adriana Schulz (She/Her)',
  ta: 'Xiaoyi Liu ("Jason") (He/Him)',
  time: 'Monday/Friday, 9:00–10:20 AM',
  location: 'CIT Center 316',
  officeHours: 'Fridays 10:20-11:00 AM at CIT 405',
  description: `This course explores the core mathematical, algorithmic, and computational principles that drive modern design tools, focusing on digital design representations, generative design, optimization, and interactive exploration. Students will learn to develop computational models for automating design processes, implement algorithms for shape generation and performance evaluation, and integrate digital design with fabrication techniques such as 3D printing, laser cutting, and machine knitting. The course includes hands-on assignments and a final project where students build their own computational design workflow.`,
};

const gradingPolicy: GradingPolicy[] = [
  { component: 'Project Milestones (5 x 10%)', percentage: 50 },
  { component: 'Participation', percentage: 20 },
  { component: 'Final Paper', percentage: 30 },
];

const assignments: Assignment[] = [];

const projectMilestones: ProjectMilestone[] = [
  {
    id: 'groupForming',
    name: 'Group Forming Activity',
    date: '09/25/2026',
  },
  {
    id: 'milestone1',
    name: 'Milestone 1: Intro, Related Work, and Design Space (paper submission pt.1)',
    date: '10/02/2026',
  },
  {
    id: 'milestone2',
    name: 'Milestone 2: Direct Design Demo and Fabrication Proposal (paper submission pt.2)',
    date: '10/16/2026',
  },
  {
    id: 'milestone3',
    name: 'Milestone 3: Fabricated Results and System Proposal (paper submission pt.3)',
    date: '10/30/2026',
  },
  {
    id: 'milestone4',
    name: 'Milestone 4: End-to-End Design Automation (paper submission pt.4)',
    date: '11/20/2026',
  },
  {
    id: 'milestone5',
    name: 'Milestone 5: Final Results, Ablations, and Comparisons (paper submission pt.5)',
    date: '12/04/2026',
  },
  {
    id: 'final',
    name: 'Final Paper Submission',
    date: '12/11/2026',
  },
];

const schedule: ScheduleEntry[] = [
  { date: '09/11/2026', topic: 'Intro Lecture & Project Ideation' },
  { date: '09/14/2026', topic: 'Design Representations Part 1' },
  { date: '09/18/2026', topic: 'Design Representations Part 2' },
  { date: '09/21/2026', topic: 'No class: Adriana OOF' },
  { date: '09/25/2026', topic: 'Design Spaces Part 1 & Group Forming Activity' },
  { date: '09/28/2026', topic: 'Design Spaces Part 2' },
  { date: '10/02/2026', topic: 'Project Presentations and Discussion (Milestone 1)' },
  { date: '10/05/2026', topic: 'Fabrication Part 1 (at BDW)' },
  { date: '10/09/2026', topic: 'Fabrication Part 2 (at BDW)' },
  { date: '10/12/2026', topic: 'No class: Brown Holiday' },
  { date: '10/16/2026', topic: 'Project Presentations and Discussion (Milestone 2)' },
  { date: '10/19/2026', topic: 'Optimization Part 1' },
  { date: '10/23/2026', topic: 'Project activity: How to write a good intro?' },
  { date: '10/26/2026', topic: 'Optimization Part 2' },
  { date: '10/30/2026', topic: 'Project Presentations and Discussion (Milestone 3)' },
  { date: '11/02/2026', topic: 'Optimization Part 3' },
  { date: '11/06/2026', topic: 'Project activity: What makes a good system?' },
  { date: '11/09/2026', topic: 'Topics 1: NeuroSymbolic Reasoning' },
  { date: '11/13/2026', topic: 'Project activity: What makes a good evaluation?' },
  { date: '11/16/2026', topic: 'Topics 2: Geometry and Deformation' },
  { date: '11/20/2026', topic: 'Project Presentations and Discussion (Milestone 4)' },
  { date: '11/23/2026', topic: 'Topics 3: Physics Simulation' },
  { date: '11/27/2026', topic: 'No class: Thanksgiving Recess' },
  { date: '11/30/2026', topic: 'Topics 4: Accessibility and Sustainability' },
  { date: '12/04/2026', topic: 'Project Presentations and Discussion (Milestone 5)' },
  { date: '12/07/2026', topic: 'No class: Reading Period' },
  { date: '12/11/2026', topic: 'Project Final Paper Due'},
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
                    href='/assets/course/SyllabusFall2026.pdf'
                    className='gap-2'
                    variant='outline'
                  >
                    <DownloadIcon className='h-4 w-4' />
                    Syllabus (PDF)
                  </ButtonLink>
                  <ButtonLink
                    href='https://edstem.org/us/courses/93835/discussion'
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

              {assignments.length > 0 && (
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
              )}

              <div className='mt-6 rounded-lg bg-white px-2 py-6 md:px-6 shadow-small'>
                <h2 className='mb-4 text-2xl font-semibold text-stone-800'>
                  Final Project
                </h2>
                <table className='w-full text-sm'>
                  <thead>
                    <tr className='border-b border-stone-200'>
                      <th className='text-left py-2 text-stone-700'>
                        Item
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
                    <p className='font-medium text-stone-700'>Term</p>
                    <p className='inline-block px-3 py-1 bg-stone-100 rounded-full text-sm font-medium'>
                      {courseInfo.term}
                    </p>
                  </div>
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
                    <p>
                      <UnderlineLink href='https://calendar.app.google/nSRhpyVwxLqTzyyF6'>
                        Book office hours here
                      </UnderlineLink>
                    </p>
                  </div>
                  <div>
                    <p className='font-medium text-stone-700'>TA</p>
                    <p style={{ whiteSpace: 'pre-line' }}>{courseInfo.ta}</p>
                  </div>
                  <div>
                    <p className='font-medium text-stone-700'>Office Hours</p>
                    <p style={{ whiteSpace: 'pre-line' }}>
                      {courseInfo.officeHours}
                    </p>
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
