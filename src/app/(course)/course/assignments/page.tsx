import { Metadata } from 'next';

import { assignments } from '@/data/course';

import ButtonLink from '@/components/links/ButtonLink';

export const metadata: Metadata = {
  title: 'Assignments',
};

export default function AssignmentsPage() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-stone-50 to-white py-16'>
      <div className='layout'>
        <h1 className='mb-8 text-4xl font-bold text-stone-800'>Assignments</h1>

        <div className='mb-8 rounded-lg bg-amber-50 p-6'>
          <h2 className='mb-2 text-lg font-semibold text-amber-900'>
            Submission Guidelines
          </h2>
          <ul className='space-y-1 text-sm text-amber-800'>
            <li>• All assignments must be submitted via Gradescope</li>
            <li>• Late submissions incur a 10% penalty per day</li>
            <li>• Code must be well-documented and follow style guidelines</li>
            <li>• Academic integrity policy applies to all submissions</li>
          </ul>
        </div>

        <div className='grid gap-6 md:grid-cols-2'>
          {assignments.map((assignment) => (
            <div
              key={assignment.id}
              className='rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md'
            >
              <div className='mb-2 flex items-start justify-between'>
                <h2 className='text-xl font-semibold text-stone-800'>
                  {assignment.title}
                </h2>
                {assignment.points && (
                  <span className='rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800'>
                    {assignment.points} pts
                  </span>
                )}
              </div>

              <p className='mb-4 text-stone-600'>{assignment.description}</p>

              <div className='mb-4 flex items-center text-sm'>
                <span className='font-medium text-stone-700'>Due:</span>
                <span className='ml-2 text-red-600'>{assignment.dueDate}</span>
              </div>

              {assignment.resources && assignment.resources.length > 0 && (
                <div className='mb-4'>
                  <h3 className='mb-2 text-sm font-semibold text-stone-700'>
                    Resources:
                  </h3>
                  <ul className='space-y-1'>
                    {assignment.resources.map((resource, idx) => (
                      <li key={idx} className='text-sm text-stone-600'>
                        • {resource}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className='flex gap-2'>
                <ButtonLink
                  href={`/course/assignments/${assignment.id}`}
                  variant='outline'
                  size='sm'
                >
                  View Details
                </ButtonLink>
                {assignment.submissionLink && (
                  <ButtonLink
                    href={assignment.submissionLink}
                    variant='primary'
                    size='sm'
                  >
                    Submit
                  </ButtonLink>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className='mt-12'>
          <h2 className='mb-6 text-2xl font-semibold text-stone-800'>
            Grading Breakdown
          </h2>
          <div className='rounded-lg bg-white p-6 shadow-sm'>
            <div className='space-y-3'>
              <div className='flex justify-between border-b pb-2'>
                <span className='text-stone-600'>
                  Assignments (3 × 100 pts)
                </span>
                <span className='font-semibold text-stone-800'>30%</span>
              </div>
              <div className='flex justify-between border-b pb-2'>
                <span className='text-stone-600'>Midterm Exam</span>
                <span className='font-semibold text-stone-800'>20%</span>
              </div>
              <div className='flex justify-between border-b pb-2'>
                <span className='text-stone-600'>Final Project</span>
                <span className='font-semibold text-stone-800'>40%</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-stone-600'>Class Participation</span>
                <span className='font-semibold text-stone-800'>10%</span>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-8 rounded-lg bg-stone-100 p-6'>
          <h3 className='mb-3 text-lg font-semibold text-stone-800'>
            Collaboration Policy
          </h3>
          <p className='text-sm text-stone-600'>
            Discussion of assignment problems with peers is encouraged, but all
            submitted work must be your own. Code sharing or copying is strictly
            prohibited and will result in academic integrity violations. For
            group projects, all team members must contribute equally and
            document their contributions.
          </p>
        </div>
      </div>
    </div>
  );
}
