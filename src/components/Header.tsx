'use client';

import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import * as React from 'react';

import { cn } from '@/lib/utils';

import UnstyledLink from '@/components/links/UnstyledLink';

import FlatLogo from '~/svg/FlatLogo.svg';

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
        'rounded-md px-4 py-2 font-light text-stone-600 hover:text-stone-900',
        isActive && 'font-semibold text-stone-900'
      )}
    >
      {children}
    </UnstyledLink>
  );
};

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <div className='fixed top-0 z-10 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md'>
        <div className='layout flex h-20 items-center justify-between'>
          <UnstyledLink
            href='/'
            className='hidden text-xl font-bold text-stone-800 md:inline-flex gap-2'
          >
            <FlatLogo className='h-6 w-auto' />
            Computational Design Group
          </UnstyledLink>
          <UnstyledLink
            href='/'
            className='md:hidden text-xl font-bold text-stone-800 inline-flex gap-2'
          >
            <FlatLogo className='h-6 w-auto' />
            CDG
          </UnstyledLink>
          <nav className='hidden items-center space-x-1 md:flex'>
            <NavLink href='/publications'>Publications</NavLink>
            <NavLink href='/team'>Team</NavLink>
            <NavLink href='/news'>News</NavLink>
          </nav>
          <button
            className='z-50 md:hidden'
            onClick={() => setIsOpen((o) => !o)}
            aria-label='Open menu'
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          'fixed top-0 left-0 h-screen w-full bg-white/80 pt-40 backdrop-blur-md transition-opacity duration-300 ease-in-out md:hidden',
          isOpen ? 'opacity-100' : 'invisible opacity-0'
        )}
        onClick={() => setIsOpen(false)}
      >
        <nav>
          <div className='layout flex flex-col items-center space-y-4 py-4 text-lg'>
            <NavLink href='/publications'>Publications</NavLink>
            <NavLink href='/team'>Team</NavLink>
            <NavLink href='/news'>News</NavLink>
          </div>
        </nav>
      </div>
    </>
  );
}
