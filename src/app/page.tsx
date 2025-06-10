'use client';

import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

import GallerySection from '@/sections/GallerySection';
import HeroSection from '@/sections/HeroSection';
import NewsSection from '@/sections/NewsSection';
import PublicationsSection from '@/sections/PublicationsSection';
import TeamSection from '@/sections/TeamSection';

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <UnstyledLink
    href={href}
    className='rounded-md px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900'
  >
    {children}
  </UnstyledLink>
);

export default function HomePage() {
  return (
    <main className='bg-white text-gray-800'>
      <header className='fixed top-0 z-10 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md'>
        <div className='layout flex h-20 items-center justify-between'>
          <UnstyledLink href='/' className='text-xl font-bold text-gray-900'>
            Computational Design Group
          </UnstyledLink>
          <nav className='hidden items-center space-x-1 md:flex'>
            <NavLink href='#publications'>Publications</NavLink>
            <NavLink href='#team'>Team</NavLink>
            <NavLink href='#news'>News</NavLink>
            <NavLink href='#gallery'>Gallery</NavLink>
          </nav>
        </div>
      </header>

      <div className='pt-20'>
        <HeroSection />
        <PublicationsSection />
        <TeamSection />
        <NewsSection />
        <GallerySection />
      </div>

      <footer className='bg-gray-800 py-12 text-white'>
        <div className='layout text-center'>
          <p>
            &copy; {new Date().getFullYear()} Computational Design Group at
            Brown University.
          </p>
        </div>
      </footer>
    </main>
  );
}
