import { DownloadIcon } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';

import { announcements, courseInfo, importantDates } from '@/data/course';

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
              <div className='rounded-lg bg-white px-2 py-6 md:px-6 shadow-small'>
                <h2 className='mb-4 text-2xl font-semibold text-stone-800'>
                  Course Overview
                </h2>
                <p className='text-stone-600 leading-relaxed'>
                  {courseInfo.description}
                </p>
              </div>

              <div className='mt-6 rounded-lg bg-white px-2 py-6 md:px-6 shadow-small'>
                <h2 className='mb-4 text-2xl font-semibold text-stone-800'>
                  Recent Announcements
                </h2>
                <div className='space-y-4'>
                  {announcements.map((announcement) => (
                    <div
                      key={announcement.id}
                      className={`border-l-4 pl-4 ${
                        announcement.priority === 'high'
                          ? 'border-blue-500'
                          : 'border-stone-300'
                      }`}
                    >
                      <p className='text-sm text-stone-500'>
                        {announcement.date}
                      </p>
                      <p className='font-medium text-stone-800'>
                        {announcement.title}
                      </p>
                      <p className='mt-1 text-stone-600'>
                        {announcement.content}
                      </p>
                    </div>
                  ))}
                </div>
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

              <div className='mt-6 rounded-lg bg-white px-2 py-6 md:px-6 shadow-small'>
                <h2 className='mb-4 text-xl font-semibold text-stone-800'>
                  Quick Links
                </h2>
                <div className='space-y-2'>
                  <ButtonLink
                    href='/assets/course/SyllabusWinter2025556.pdf'
                    className='w-full justify-center gap-2'
                    variant='outline'
                  >
                    <DownloadIcon className='h-4 w-4' />
                    Syllabus [PDF]
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

              <div className='mt-6 rounded-lg bg-blue-50 px-2 py-6 md:px-6 shadow-small'>
                <h3 className='mb-2 text-lg font-semibold text-blue-900'>
                  Important Dates
                </h3>
                <ul className='space-y-1 text-sm text-blue-800'>
                  {importantDates.map((date) => (
                    <li key={date.id}>
                      {date.date}: {date.description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
