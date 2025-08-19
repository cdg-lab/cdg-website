import * as React from 'react';

import GallerySection from '@/sections/GallerySection';
import HeroSection from '@/sections/HeroSection';
import NewsSection from '@/sections/NewsSection';
import PublicationsSection from '@/sections/PublicationsSection';
import TeamSection from '@/sections/TeamSection';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <PublicationsSection showRecent />
      <NewsSection showRecent />
      <TeamSection showCurrent />
      <GallerySection />
    </div>
  );
}
