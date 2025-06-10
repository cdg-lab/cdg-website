import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';

import UnstyledLink from '@/components/links/UnstyledLink';

import { siteConfig } from '@/constant/config';

// !STARTERCONF Change these default meta
// !STARTERCONF Look at @/constant/config to change them
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  // !STARTERCONF this is the default favicon, you can generate your own from https://realfavicongenerator.net/
  // ! copy to /favicon folder
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.jpg`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.jpg`],
    // creator: '@th_clarence',
  },
  // authors: [
  //   {
  //     name: 'Theodorus Clarence',
  //     url: 'https://theodorusclarence.com',
  //   },
  // ],
};

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <UnstyledLink
    href={href}
    className='rounded-md px-4 py-2 font-light text-gray-600 hover:text-gray-900'
  >
    {children}
  </UnstyledLink>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <main className='bg-white text-gray-800'>
          <header className='fixed top-0 z-10 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md'>
            <div className='layout flex h-20 items-center justify-between'>
              <UnstyledLink
                href='/'
                className='text-xl font-bold text-gray-900'
              >
                Computational Design Group
              </UnstyledLink>
              <nav className='hidden items-center space-x-1 md:flex'>
                <NavLink href='/publications'>Publications</NavLink>
                <NavLink href='/team'>Team</NavLink>
                <NavLink href='/news'>News</NavLink>
              </nav>
            </div>
          </header>

          <div className='pt-20'>{children}</div>
          <footer className='bg-gray-800 py-12 text-white'>
            <div className='layout text-center'>
              <p>
                &copy; {new Date().getFullYear()} Computational Design Group at
                Brown University.
              </p>
            </div>
          </footer>
        </main>
      </body>
    </html>
  );
}
