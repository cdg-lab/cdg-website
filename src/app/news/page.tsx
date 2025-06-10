import { Metadata } from 'next';

import NewsSection from '@/sections/NewsSection';

export const metadata: Metadata = {
  title: 'News',
};

export default async function NewsPage() {
  return <NewsSection />;
}
