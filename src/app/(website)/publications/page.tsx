import { Metadata } from 'next';

import PublicationsSection from '@/sections/PublicationsSection';

export const metadata: Metadata = {
  title: 'Publications',
};

export default async function NewsPage() {
  return <PublicationsSection />;
}
