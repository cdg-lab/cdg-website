import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

export default function CourseHeader() {
  return (
    <div className='w-full border-b border-gray-200 bg-white'>
      <div className='max-w-[1100px] mx-auto px-2 xl:px-0 py-4'>
        <UnstyledLink
          href='/'
          className='inline-flex items-center text-stone-600 hover:text-stone-800'
        >
          <span className='mr-2'>←</span>
          <span>CDG Home</span>
        </UnstyledLink>
      </div>
    </div>
  );
}
