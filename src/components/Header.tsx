'use client';

import { usePathname } from 'next/navigation';
import * as React from 'react';

import { cn } from '@/lib/utils';

import UnstyledLink from '@/components/links/UnstyledLink';

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <UnstyledLink
      href={href}
      className={cn(
        'rounded-md px-4 py-2 font-light text-gray-600 hover:text-gray-900',
        isActive && 'font-semibold text-gray-900'
      )}
    >
      {children}
    </UnstyledLink>
  );
};

export default function Header() {
  return (
    <header className='fixed top-0 z-10 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md'>
      <div className='layout flex h-20 items-center justify-between'>
        <UnstyledLink href='/' className='text-xl font-bold text-gray-900'>
          Computational Design Group
        </UnstyledLink>
        <nav className='hidden items-center space-x-1 md:flex'>
          <NavLink href='/publications'>Publications</NavLink>
          <NavLink href='/team'>Team</NavLink>
          <NavLink href='/news'>News</NavLink>
        </nav>
      </div>
    </header>
  );
}
