import { ArrowLeftIcon } from 'lucide-react';
import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

export default function CourseHeader() {
  return (
    <div className='w-full border-b border-gray-200 bg-white'>
      <div className='max-w-[1100px] mx-auto px-2 xl:px-0 py-3'>
        <UnstyledLink
          href='/courses'
          className='flex items-center text-stone-600 hover:text-stone-800 gap-2 font-semibold'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>All Courses</span>
        </UnstyledLink>
      </div>
    </div>
  );
}
