import { DownloadIcon } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';

import {
  assignments,
  courseInfo,
  gradingPolicy,
  projectMilestones,
  schedule,
} from '@/data/course';

import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';

export const metadata: Metadata = {
  title: 'CSCI 2952Y - Computational Design and Fabrication',
};

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
                    href='/assets/course/SyllabusWinter2025556.pdf'
                    className='gap-2'
                    variant='outline'
                  >
                    <DownloadIcon className='h-4 w-4' />
                    Syllabus (PDF)
                  </ButtonLink>
                  <ButtonLink href='https://edstem.org/' variant='outline'>
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
