import { Metadata } from 'next';

import { schedule } from '@/data/course';

export const metadata: Metadata = {
  title: 'Schedule',
};

export default function SchedulePage() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-stone-50 to-white py-16'>
      <div className='layout'>
        <h1 className='mb-8 text-4xl font-bold text-stone-800'>
          Course Schedule
        </h1>

        <div className='overflow-x-auto rounded-lg bg-white shadow-sm'>
          <table className='w-full'>
            <thead className='bg-stone-100'>
              <tr>
                <th className='px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-stone-600'>
                  Week
                </th>
                <th className='px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-stone-600'>
                  Date
                </th>
                <th className='px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-stone-600'>
                  Topic
                </th>
                <th className='px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-stone-600'>
                  Readings
                </th>
                <th className='px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-stone-600'>
                  Assignments
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-stone-200'>
              {schedule.map((entry, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? 'bg-white' : 'bg-stone-50'}
                >
                  <td className='px-6 py-4 text-sm text-stone-900'>
                    {entry.week}
                  </td>
                  <td className='whitespace-nowrap px-6 py-4 text-sm text-stone-900'>
                    {entry.date}
                  </td>
                  <td className='px-6 py-4'>
                    <div className='text-sm font-medium text-stone-900'>
                      {entry.topic}
                    </div>
                    {entry.notes && (
                      <div className='text-xs text-stone-500 mt-1'>
                        {entry.notes}
                      </div>
                    )}
                  </td>
                  <td className='px-6 py-4'>
                    {entry.readings && entry.readings.length > 0 ? (
                      <ul className='text-sm text-stone-600'>
                        {entry.readings.map((reading, rIdx) => (
                          <li key={rIdx} className='mb-1'>
                            • {reading}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <span className='text-sm text-stone-400'>—</span>
                    )}
                  </td>
                  <td className='px-6 py-4'>
                    {entry.assignments && entry.assignments.length > 0 ? (
                      <ul className='text-sm'>
                        {entry.assignments.map((assignment, aIdx) => (
                          <li key={aIdx} className='font-medium text-blue-600'>
                            {assignment}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <span className='text-sm text-stone-400'>—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className='mt-8 rounded-lg bg-blue-50 p-6'>
          <h2 className='mb-3 text-lg font-semibold text-blue-900'>
            Schedule Notes
          </h2>
          <ul className='space-y-2 text-sm text-blue-800'>
            <li>• Schedule is subject to change based on class progress</li>
            <li>• Spring Break: March 10-14 (No classes)</li>
            <li>• Reading materials will be posted on the course website</li>
            <li>
              • Assignment due dates are at 11:59 PM ET unless otherwise
              specified
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
