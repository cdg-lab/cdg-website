import { Clock, Mail, MapPin } from 'lucide-react';
import { Metadata } from 'next';

import { staff } from '@/data/course';

import UnderlineLink from '@/components/links/UnderlineLink';

export const metadata: Metadata = {
  title: 'Staff',
};

export default function StaffPage() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-stone-50 to-white py-16'>
      <div className='layout'>
        <h1 className='mb-8 text-4xl font-bold text-stone-800'>Course Staff</h1>

        <div className='grid gap-6 md:grid-cols-2'>
          {staff.map((member, idx) => (
            <div
              key={idx}
              className='rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md'
            >
              <div className='flex items-start gap-6'>
                <div className='flex-shrink-0'>
                  <div className='h-24 w-24 rounded-full bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center'>
                    <span className='text-3xl font-bold text-stone-600'>
                      {member.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </span>
                  </div>
                </div>
                <div className='flex-grow'>
                  <h2 className='text-xl font-semibold text-stone-800'>
                    {member.name === 'Adriana Schulz' ? (
                      <UnderlineLink href='/adriana'>
                        {member.name}
                      </UnderlineLink>
                    ) : (
                      member.name
                    )}
                  </h2>
                  <p className='mb-3 text-stone-600'>{member.role}</p>

                  <div className='space-y-2 text-sm'>
                    <div className='flex items-center gap-2 text-stone-600'>
                      <Mail className='h-4 w-4' />
                      <a
                        href={`mailto:${member.email}`}
                        className='hover:text-stone-800 underline'
                      >
                        {member.email}
                      </a>
                    </div>

                    {member.office && (
                      <div className='flex items-center gap-2 text-stone-600'>
                        <MapPin className='h-4 w-4' />
                        <span>{member.office}</span>
                      </div>
                    )}

                    {member.officeHours && (
                      <div className='flex items-center gap-2 text-stone-600'>
                        <Clock className='h-4 w-4' />
                        <span>{member.officeHours}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-12 space-y-6'>
          <h2 className='text-2xl font-semibold text-stone-800'>
            Contact Information
          </h2>

          <div className='rounded-lg bg-white p-6 shadow-sm'>
            <h3 className='mb-3 text-lg font-semibold text-stone-800'>
              Office Hours
            </h3>
            <p className='mb-4 text-stone-600'>
              Office hours are the best way to get help with course material,
              discuss project ideas, or clarify assignment requirements. All
              office hours are held in-person unless otherwise noted.
            </p>
            <ul className='space-y-2 text-stone-600'>
              <li className='flex items-start'>
                <span className='mr-2'>•</span>
                <div>
                  <strong>Instructor Office Hours:</strong> Wednesday
                  2:00-3:00pm in CIT 543, or by appointment
                </div>
              </li>
              <li className='flex items-start'>
                <span className='mr-2'>•</span>
                <div>
                  <strong>TA Office Hours:</strong> Tuesday 3:00-5:00pm in CIT
                  201
                </div>
              </li>
              <li className='flex items-start'>
                <span className='mr-2'>•</span>
                <div>
                  <strong>Additional Support:</strong> Schedule appointments via
                  email for times outside regular office hours
                </div>
              </li>
            </ul>
          </div>

          <div className='rounded-lg bg-blue-50 p-6'>
            <h3 className='mb-3 text-lg font-semibold text-blue-900'>
              Communication Guidelines
            </h3>
            <ul className='space-y-2 text-sm text-blue-800'>
              <li>
                • Use Ed Discussion for general course questions that may
                benefit other students
              </li>
              <li>
                • Email staff directly for personal matters or grade-related
                questions
              </li>
              <li>
                • Include "CSE556" in your email subject line for faster
                response
              </li>
              <li>• Allow 24-48 hours for email responses during weekdays</li>
              <li>• For urgent matters, please visit during office hours</li>
            </ul>
          </div>

          <div className='rounded-lg bg-amber-50 p-6'>
            <h3 className='mb-3 text-lg font-semibold text-amber-900'>
              Research Opportunities
            </h3>
            <p className='text-sm text-amber-800'>
              Students interested in computational design and fabrication
              research are encouraged to discuss potential opportunities with
              the instructor. The Computational Design Group regularly has
              openings for undergraduate and graduate researchers. Strong
              performance in this course can lead to research positions in the
              lab.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
