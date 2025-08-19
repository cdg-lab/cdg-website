import { Download } from 'lucide-react';
import { Metadata } from 'next';

import { courseInfo } from '@/data/course';

import ButtonLink from '@/components/links/ButtonLink';

export const metadata: Metadata = {
  title: 'Syllabus',
};

export default function SyllabusPage() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-stone-50 to-white py-16'>
      <div className='layout max-w-4xl'>
        <div className='mb-8 flex items-center justify-between'>
          <h1 className='text-4xl font-bold text-stone-800'>Course Syllabus</h1>
          <ButtonLink
            href='/course/syllabus.pdf'
            variant='outline'
            className='gap-2'
          >
            <Download className='h-4 w-4' />
            Download PDF
          </ButtonLink>
        </div>

        <div className='space-y-8'>
          <section className='rounded-lg bg-white p-6 shadow-sm'>
            <h2 className='mb-4 text-2xl font-semibold text-stone-800'>
              Course Information
            </h2>
            <dl className='grid grid-cols-1 gap-4 md:grid-cols-2'>
              <div>
                <dt className='font-semibold text-stone-700'>Course</dt>
                <dd className='text-stone-600'>
                  {courseInfo.code}: {courseInfo.title}
                </dd>
              </div>
              <div>
                <dt className='font-semibold text-stone-700'>Term</dt>
                <dd className='text-stone-600'>{courseInfo.term}</dd>
              </div>
              <div>
                <dt className='font-semibold text-stone-700'>Meeting Time</dt>
                <dd className='text-stone-600'>{courseInfo.time}</dd>
              </div>
              <div>
                <dt className='font-semibold text-stone-700'>Location</dt>
                <dd className='text-stone-600'>{courseInfo.location}</dd>
              </div>
              <div>
                <dt className='font-semibold text-stone-700'>Instructor</dt>
                <dd className='text-stone-600'>{courseInfo.instructor}</dd>
              </div>
              <div>
                <dt className='font-semibold text-stone-700'>Office Hours</dt>
                <dd className='text-stone-600'>{courseInfo.officeHours}</dd>
              </div>
            </dl>
          </section>

          <section className='rounded-lg bg-white p-6 shadow-sm'>
            <h2 className='mb-4 text-2xl font-semibold text-stone-800'>
              Course Description
            </h2>
            <p className='text-stone-600 leading-relaxed'>
              {courseInfo.description}
            </p>
          </section>

          <section className='rounded-lg bg-white p-6 shadow-sm'>
            <h2 className='mb-4 text-2xl font-semibold text-stone-800'>
              Learning Objectives
            </h2>
            <p className='mb-4 text-stone-600'>
              By the end of this course, students will be able to:
            </p>
            <ul className='space-y-2 text-stone-600'>
              <li className='flex items-start'>
                <span className='mr-2'>•</span>
                <span>
                  Understand and implement fundamental algorithms in
                  computational geometry and mesh processing
                </span>
              </li>
              <li className='flex items-start'>
                <span className='mr-2'>•</span>
                <span>
                  Design and optimize 3D models for digital fabrication with
                  consideration for physical constraints
                </span>
              </li>
              <li className='flex items-start'>
                <span className='mr-2'>•</span>
                <span>
                  Apply physical simulation techniques to predict and validate
                  design behavior
                </span>
              </li>
              <li className='flex items-start'>
                <span className='mr-2'>•</span>
                <span>
                  Develop interactive tools for computational design using
                  modern software frameworks
                </span>
              </li>
              <li className='flex items-start'>
                <span className='mr-2'>•</span>
                <span>
                  Critically evaluate and apply machine learning techniques to
                  design problems
                </span>
              </li>
            </ul>
          </section>

          <section className='rounded-lg bg-white p-6 shadow-sm'>
            <h2 className='mb-4 text-2xl font-semibold text-stone-800'>
              Prerequisites
            </h2>
            <ul className='space-y-2 text-stone-600'>
              {courseInfo.prerequisites.map((prereq, idx) => (
                <li key={idx} className='flex items-start'>
                  <span className='mr-2'>•</span>
                  <span>{prereq}</span>
                </li>
              ))}
            </ul>
            <p className='mt-4 text-sm text-stone-500'>
              Note: Prior experience with 3D modeling or fabrication is helpful
              but not required.
            </p>
          </section>

          <section className='rounded-lg bg-white p-6 shadow-sm'>
            <h2 className='mb-4 text-2xl font-semibold text-stone-800'>
              Grading Policy
            </h2>
            <div className='mb-4'>
              <table className='w-full'>
                <thead>
                  <tr className='border-b'>
                    <th className='pb-2 text-left text-stone-700'>Component</th>
                    <th className='pb-2 text-right text-stone-700'>Weight</th>
                  </tr>
                </thead>
                <tbody className='text-stone-600'>
                  <tr className='border-b'>
                    <td className='py-2'>Homework Assignments (3)</td>
                    <td className='py-2 text-right'>30%</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='py-2'>Midterm Exam</td>
                    <td className='py-2 text-right'>20%</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='py-2'>Final Project</td>
                    <td className='py-2 text-right'>40%</td>
                  </tr>
                  <tr>
                    <td className='py-2'>Class Participation</td>
                    <td className='py-2 text-right'>10%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='rounded-lg bg-stone-50 p-4'>
              <h3 className='mb-2 font-semibold text-stone-700'>Grade Scale</h3>
              <div className='grid grid-cols-2 gap-2 text-sm text-stone-600 md:grid-cols-4'>
                <div>A: 93-100%</div>
                <div>A-: 90-92%</div>
                <div>B+: 87-89%</div>
                <div>B: 83-86%</div>
                <div>B-: 80-82%</div>
                <div>C+: 77-79%</div>
                <div>C: 70-76%</div>
                <div>NC: &lt;70%</div>
              </div>
            </div>
          </section>

          <section className='rounded-lg bg-white p-6 shadow-sm'>
            <h2 className='mb-4 text-2xl font-semibold text-stone-800'>
              Course Policies
            </h2>

            <div className='space-y-4'>
              <div>
                <h3 className='mb-2 font-semibold text-stone-700'>
                  Attendance
                </h3>
                <p className='text-stone-600'>
                  Regular attendance is expected. While not explicitly graded,
                  participation points require presence in class. Lectures will
                  not be recorded, but slides will be posted after each class.
                </p>
              </div>

              <div>
                <h3 className='mb-2 font-semibold text-stone-700'>Late Work</h3>
                <p className='text-stone-600'>
                  Assignments submitted late will incur a 10% penalty per day up
                  to 3 days. Assignments more than 3 days late will not be
                  accepted except in cases of documented emergencies.
                </p>
              </div>

              <div>
                <h3 className='mb-2 font-semibold text-stone-700'>
                  Academic Integrity
                </h3>
                <p className='text-stone-600'>
                  All submitted work must be your own. Collaboration on
                  assignments is encouraged for discussion and conceptual
                  understanding, but code and written solutions must be
                  completed independently. Violations will result in course
                  failure and academic disciplinary action.
                </p>
              </div>

              <div>
                <h3 className='mb-2 font-semibold text-stone-700'>
                  Accommodations
                </h3>
                <p className='text-stone-600'>
                  Students with documented disabilities who may need
                  accommodations should make an appointment with the instructor
                  as soon as possible. All discussions will remain confidential.
                  Students should also contact Student Accessibility Services to
                  verify their eligibility for reasonable accommodations.
                </p>
              </div>
            </div>
          </section>

          <section className='rounded-lg bg-blue-50 p-6'>
            <h2 className='mb-4 text-2xl font-semibold text-blue-900'>
              Resources and Support
            </h2>
            <ul className='space-y-2 text-blue-800'>
              <li className='flex items-start'>
                <span className='mr-2'>•</span>
                <span>
                  <strong>Ed Discussion Board:</strong> Primary platform for
                  course Q&A and announcements
                </span>
              </li>
              <li className='flex items-start'>
                <span className='mr-2'>•</span>
                <span>
                  <strong>Office Hours:</strong> Best resource for assignment
                  help and conceptual questions
                </span>
              </li>
              <li className='flex items-start'>
                <span className='mr-2'>•</span>
                <span>
                  <strong>Course Website:</strong> All materials, assignments,
                  and resources
                </span>
              </li>
              <li className='flex items-start'>
                <span className='mr-2'>•</span>
                <span>
                  <strong>Academic Resource Center:</strong> Additional tutoring
                  and study support
                </span>
              </li>
            </ul>
          </section>

          <section className='rounded-lg bg-amber-50 p-6'>
            <h2 className='mb-4 text-2xl font-semibold text-amber-900'>
              Important Notes
            </h2>
            <p className='text-amber-800'>
              This syllabus is subject to change. Any modifications will be
              announced in class and posted on the course website. Students are
              responsible for checking the website regularly for updates and
              announcements.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
