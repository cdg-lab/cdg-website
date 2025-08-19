import { BookOpen, FileText, Link, Video } from 'lucide-react';
import { Metadata } from 'next';

import { resources } from '@/data/course';

import ButtonLink from '@/components/links/ButtonLink';

export const metadata: Metadata = {
  title: 'Resources',
};

const IconMap = {
  book: BookOpen,
  pdf: FileText,
  link: Link,
  video: Video,
};

export default function ResourcesPage() {
  const groupedResources = resources.reduce(
    (acc, resource) => {
      if (!acc[resource.category]) {
        acc[resource.category] = [];
      }
      acc[resource.category].push(resource);
      return acc;
    },
    {} as Record<string, typeof resources>,
  );

  return (
    <div className='min-h-screen bg-gradient-to-b from-stone-50 to-white py-16'>
      <div className='layout'>
        <h1 className='mb-8 text-4xl font-bold text-stone-800'>
          Course Resources
        </h1>

        <div className='mb-8 rounded-lg bg-blue-50 p-6'>
          <h2 className='mb-2 text-lg font-semibold text-blue-900'>
            Getting Started
          </h2>
          <p className='text-sm text-blue-800'>
            These resources will help you succeed in the course. Start with the
            textbooks for foundational knowledge, explore the software tools for
            hands-on practice, and refer to the libraries for implementation
            details.
          </p>
        </div>

        <div className='space-y-8'>
          {Object.entries(groupedResources).map(
            ([category, categoryResources]) => (
              <div key={category}>
                <h2 className='mb-4 text-2xl font-semibold text-stone-800'>
                  {category}
                </h2>
                <div className='grid gap-4 md:grid-cols-2'>
                  {categoryResources.map((resource, idx) => {
                    const Icon = IconMap[resource.type];
                    return (
                      <div
                        key={idx}
                        className='flex gap-4 rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md'
                      >
                        <div className='flex-shrink-0'>
                          <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-stone-100'>
                            <Icon className='h-6 w-6 text-stone-600' />
                          </div>
                        </div>
                        <div className='flex-grow'>
                          <h3 className='mb-1 font-semibold text-stone-800'>
                            {resource.title}
                          </h3>
                          {resource.description && (
                            <p className='mb-3 text-sm text-stone-600'>
                              {resource.description}
                            </p>
                          )}
                          {resource.url && (
                            <ButtonLink
                              href={resource.url}
                              variant='outline'
                              size='sm'
                            >
                              {resource.type === 'pdf'
                                ? 'Download PDF'
                                : 'Visit Resource'}
                            </ButtonLink>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ),
          )}
        </div>

        <div className='mt-12 space-y-6'>
          <h2 className='text-2xl font-semibold text-stone-800'>
            Additional Resources
          </h2>

          <div className='rounded-lg bg-white p-6 shadow-sm'>
            <h3 className='mb-3 text-lg font-semibold text-stone-800'>
              Development Environment
            </h3>
            <ul className='space-y-2 text-stone-600'>
              <li className='flex items-start'>
                <span className='mr-2'>•</span>
                <div>
                  <strong>Recommended IDE:</strong> Visual Studio Code with C++
                  and Python extensions
                </div>
              </li>
              <li className='flex items-start'>
                <span className='mr-2'>•</span>
                <div>
                  <strong>Compiler:</strong> GCC 9+ or Clang 10+ with C++17
                  support
                </div>
              </li>
              <li className='flex items-start'>
                <span className='mr-2'>•</span>
                <div>
                  <strong>Build System:</strong> CMake 3.16+ for C++ projects
                </div>
              </li>
              <li className='flex items-start'>
                <span className='mr-2'>•</span>
                <div>
                  <strong>Python:</strong> Version 3.8+ with NumPy, SciPy, and
                  Matplotlib
                </div>
              </li>
            </ul>
          </div>

          <div className='rounded-lg bg-white p-6 shadow-sm'>
            <h3 className='mb-3 text-lg font-semibold text-stone-800'>
              Online Communities
            </h3>
            <ul className='space-y-2 text-stone-600'>
              <li className='flex items-start'>
                <span className='mr-2'>•</span>
                <div>
                  <strong>Graphics Programming:</strong> r/GraphicsProgramming
                  subreddit
                </div>
              </li>
              <li className='flex items-start'>
                <span className='mr-2'>•</span>
                <div>
                  <strong>Computational Geometry:</strong> CGAL User Mailing
                  List
                </div>
              </li>
              <li className='flex items-start'>
                <span className='mr-2'>•</span>
                <div>
                  <strong>3D Printing:</strong> RepRap Forums and Prusa
                  Community
                </div>
              </li>
            </ul>
          </div>

          <div className='rounded-lg bg-amber-50 p-6'>
            <h3 className='mb-3 text-lg font-semibold text-amber-900'>
              Academic Support
            </h3>
            <p className='text-sm text-amber-800'>
              If you need additional help with course material, please utilize
              office hours, the Ed discussion board, or schedule a one-on-one
              meeting with the instructor or TAs. The university also provides
              tutoring services through the Academic Resource Center.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
