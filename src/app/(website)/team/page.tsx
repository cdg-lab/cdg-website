import { Metadata } from 'next';

import TeamSection from '@/sections/TeamSection';

export const metadata: Metadata = {
  title: 'Team',
};

export default async function NewsPage() {
  return <TeamSection />;
}
