import { Metadata } from 'next';
import Link from 'next/link';

import { courses } from '@/data/course';

export const metadata: Metadata = {
  title: 'Courses - Computational Design Group',
  description:
    'Courses offered by the Computational Design Group at Brown University',
};

export default function CoursesPage() {
  return (
    <div className='min-h-screen'>
      <section className='bg-gradient-to-b from-stone-50 to-white py-8'>
        <div className='mx-auto max-w-[1100px] px-2 xl:px-0'>
          <div className='mb-8'>
            <h1 className='mb-2 text-4xl font-bold text-stone-800'>Courses</h1>
            <p className='text-lg text-stone-600'>
              Courses offered by the Computational Design Group at Brown
              University
            </p>
          </div>

          <div className='grid gap-6'>
            {courses.map((course, i) => (
              <Link
                key={course.id}
                href={course.href}
                className='group block rounded-lg bg-white px-6 py-6 shadow-small transition-all hover:shadow-medium'
              >
                <div className='mb-4 flex items-start justify-between'>
                  <div>
                    <h2 className='text-2xl font-bold text-stone-800 transition-colors group-hover:text-primary-700'>
                      {course.code}
                    </h2>
                    <p className='mt-1 text-lg text-stone-600'>
                      {course.title}
                    </p>
                  </div>
                  <div className='flex gap-2'>
                    {i == 0 && (
                      <span className='inline-block rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700'>
                        Current
                      </span>
                    )}
                    <span className='inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700'>
                      {course.term}
                    </span>
                  </div>
                </div>

                <p className='mb-4 line-clamp-2 text-stone-600'>
                  {course.description}
                </p>

                <div className='flex flex-wrap gap-4 text-sm text-stone-500'>
                  <div>
                    <span className='font-medium'>Instructor:</span>{' '}
                    {course.instructor}
                  </div>
                  <div>
                    <span className='font-medium'>Schedule:</span>{' '}
                    {course.schedule}
                  </div>
                  <div>
                    <span className='font-medium'>Location:</span>{' '}
                    {course.location}
                  </div>
                </div>

                <div className='mt-4 text-sm font-medium text-primary-600 group-hover:text-primary-700'>
                  View course details →
                </div>
              </Link>
            ))}
          </div>

          {courses.length === 0 && (
            <div className='rounded-lg bg-white px-6 py-12 text-center shadow-small'>
              <p className='text-stone-600'>
                No courses are currently available. Please check back later.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
