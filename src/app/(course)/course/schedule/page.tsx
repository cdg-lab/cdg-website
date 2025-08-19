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

        <div className='overflow-x-auto rounded-lg bg-white shadow-small'>
          <table className='w-full'>
            <thead className='bg-stone-200'>
              <tr>
                <th className='px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-stone-600'>
                  Date
                </th>
                <th className='px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-stone-600'>
                  Topic
                </th>
                <th className='px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-stone-600'>
                  Materials
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-stone-200'>
              {schedule.map((entry, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? 'bg-white' : 'bg-stone-50'}
                >
                  <td className='whitespace-nowrap px-6 py-4 text-sm text-stone-900'>
                    {entry.date}
                  </td>
                  <td className='px-6 py-4'>
                    <div className='text-sm font-medium text-stone-900'>
                      {entry.topic}
                    </div>
                  </td>
                  <td className='px-6 py-4'>
                    {entry.links && entry.links.length > 0 ? (
                      <div className='flex flex-wrap gap-2'>
                        {entry.links.map((link, linkIdx) => (
                          <a
                            key={linkIdx}
                            href={link.href}
                            className='inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 hover:bg-blue-100'
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    ) : (
                      <span className='text-sm text-stone-400'>—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
