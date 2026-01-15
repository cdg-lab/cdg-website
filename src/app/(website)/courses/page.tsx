import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Courses - Computational Design Group',
  description:
    'Courses offered by the Computational Design Group at Brown University',
};

const courses = [
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
    location: 'TBD', // TODO: add location
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

export default function CoursesPage() {
  return (
    <div className='min-h-screen'>
      <section className='bg-gradient-to-b from-stone-50 to-white py-8'>
        <div className='max-w-[1100px] mx-auto px-2 xl:px-0'>
          <div className='mb-8'>
            <h1 className='text-4xl font-bold text-stone-800 mb-2'>Courses</h1>
            <p className='text-lg text-stone-600'>
              Courses offered by the Computational Design Group at Brown
              University
            </p>
          </div>

          <div className='grid gap-6'>
            {courses.map((course) => (
              <Link
                key={course.id}
                href={course.href}
                className='group block rounded-lg bg-white px-6 py-6 shadow-small transition-all hover:shadow-medium'
              >
                <div className='flex justify-between items-start mb-4'>
                  <div>
                    <h2 className='text-2xl font-bold text-stone-800 group-hover:text-primary-700 transition-colors'>
                      {course.code}
                    </h2>
                    <p className='text-lg text-stone-600 mt-1'>
                      {course.title}
                    </p>
                  </div>
                  <span className='inline-block px-3 py-1 text-sm font-medium text-blue-700 bg-blue-50 rounded-full'>
                    {course.term}
                  </span>
                </div>

                <p className='text-stone-600 mb-4 line-clamp-2'>
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

                <div className='mt-4 text-primary-600 group-hover:text-primary-700 font-medium text-sm'>
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
