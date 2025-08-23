import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/globals.css';
import '@/styles/colors.css';

import CourseHeader from '@/components/CourseHeader';

import { siteConfig } from '@/constant/config';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'CSE556: Computational Design and Fabrication',
    template: `%s | CSE556`,
  },
  description:
    'CSE556: Computational Design and Fabrication course at Brown University',
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: 'CSE556: Computational Design and Fabrication',
    description:
      'CSE556: Computational Design and Fabrication course at Brown University',
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.jpg`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CSE556: Computational Design and Fabrication',
    description:
      'CSE556: Computational Design and Fabrication course at Brown University',
    images: [`${siteConfig.url}/images/og.jpg`],
  },
};

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <main className='bg-white text-gray-800'>
          <CourseHeader />

          <div>{children}</div>

          <footer className='bg-stone-200 py-12 text-stone-600'>
            <div className='layout text-center'>
              <p className='text-sm'>
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
