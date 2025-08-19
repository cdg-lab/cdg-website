import { Metadata } from 'next';
import Image from 'next/image';

import { courseInfo } from '@/data/course';

import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';

export const metadata: Metadata = {
  title: 'Home',
};

export default function CoursePage() {
  return (
    <div className='min-h-screen'>
      <section className='bg-gradient-to-b from-stone-50 to-white py-16'>
        <div className='layout'>
          <h1 className='text-4xl font-bold text-stone-800'>
            {courseInfo.code}: {courseInfo.title}
          </h1>
          <p className='mt-2 text-lg text-stone-600'>{courseInfo.term}</p>

          <div className='mt-8 grid gap-8 md:grid-cols-3'>
            <div className='md:col-span-2'>
              <div className='rounded-lg bg-white p-6 shadow-sm'>
                <h2 className='mb-4 text-2xl font-semibold text-stone-800'>
                  Course Overview
                </h2>
                <p className='text-stone-600 leading-relaxed'>
                  {courseInfo.description}
                </p>

                <div className='mt-6'>
                  <h3 className='mb-2 text-lg font-semibold text-stone-800'>
                    Prerequisites
                  </h3>
                  <ul className='list-inside list-disc space-y-1 text-stone-600'>
                    {courseInfo.prerequisites.map((prereq, idx) => (
                      <li key={idx}>{prereq}</li>
                    ))}
                  </ul>
                </div>

                <div className='mt-6'>
                  <h3 className='mb-2 text-lg font-semibold text-stone-800'>
                    Topics Covered
                  </h3>
                  <div className='grid grid-cols-2 gap-2 text-stone-600'>
                    <ul className='list-inside list-disc space-y-1'>
                      <li>Geometry Processing</li>
                      <li>Mesh Algorithms</li>
                      <li>Parametric Design</li>
                      <li>Physical Simulation</li>
                    </ul>
                    <ul className='list-inside list-disc space-y-1'>
                      <li>Design Optimization</li>
                      <li>Fabrication Planning</li>
                      <li>Machine Learning for Design</li>
                      <li>Interactive Design Tools</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className='mt-6 rounded-lg bg-white p-6 shadow-sm'>
                <h2 className='mb-4 text-2xl font-semibold text-stone-800'>
                  Recent Announcements
                </h2>
                <div className='space-y-4'>
                  <div className='border-l-4 border-blue-500 pl-4'>
                    <p className='text-sm text-stone-500'>January 15, 2025</p>
                    <p className='font-medium text-stone-800'>
                      Welcome to CSE556!
                    </p>
                    <p className='mt-1 text-stone-600'>
                      Course website is now live. Please review the syllabus and
                      course schedule.
                    </p>
                  </div>
                  <div className='border-l-4 border-stone-300 pl-4'>
                    <p className='text-sm text-stone-500'>January 10, 2025</p>
                    <p className='font-medium text-stone-800'>
                      First Day of Class
                    </p>
                    <p className='mt-1 text-stone-600'>
                      Our first class will be on January 22. Looking forward to
                      seeing you all!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className='rounded-lg bg-white p-6 shadow-sm'>
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
                    <p className='font-medium text-stone-700'>Office Hours</p>
                    <p>{courseInfo.officeHours}</p>
                  </div>
                </div>
              </div>

              <div className='mt-6 rounded-lg bg-white p-6 shadow-sm'>
                <h2 className='mb-4 text-xl font-semibold text-stone-800'>
                  Quick Links
                </h2>
                <div className='space-y-2'>
                  <ButtonLink
                    href='/course/syllabus'
                    className='w-full justify-center'
                    variant='outline'
                  >
                    View Syllabus
                  </ButtonLink>
                  <ButtonLink
                    href='https://edstem.org/'
                    className='w-full justify-center'
                    variant='outline'
                  >
                    Ed Discussion Board
                  </ButtonLink>
                  <ButtonLink
                    href='/course/schedule'
                    className='w-full justify-center'
                    variant='outline'
                  >
                    Course Schedule
                  </ButtonLink>
                </div>
              </div>

              <div className='mt-6 rounded-lg bg-blue-50 p-6'>
                <h3 className='mb-2 text-lg font-semibold text-blue-900'>
                  Important Dates
                </h3>
                <ul className='space-y-1 text-sm text-blue-800'>
                  <li>Jan 22: First Day of Class</li>
                  <li>Mar 7: Midterm Exam</li>
                  <li>Mar 19: Project Proposal Due</li>
                  <li>Apr 25: Final Project Due</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='mt-8'>
            <Image
              src='/images/robogami.png'
              alt='Computational Design Example'
              width={1200}
              height={400}
              className='w-full rounded-lg shadow-md'
            />
            <p className='mt-2 text-center text-sm text-stone-500'>
              Example of computational design: Interactive robogami design and
              fabrication
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
