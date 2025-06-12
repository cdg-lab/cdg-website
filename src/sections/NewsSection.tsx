'use server';

import { type News, news } from '@/data/news';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';

function NewsItem({ item }: { item: News }) {
  return (
    <div className='border-b pb-4'>
      <p className='text-sm text-stone-500'>
        {item.date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>
      <h3 className='mt-1 text-xl font-semibold'>{item.title}</h3>
      {item.content && (
        <p className='mt-2 text-stone-600 text-sm'>{item.content}</p>
      )}
      {item.link && (
        <ArrowLink className='mt-2 text-sm text-stone-600' href={item.link}>
          Source
        </ArrowLink>
      )}
    </div>
  );
}

export default async function NewsSection({
  showRecent,
}: {
  showRecent?: boolean;
}) {
  const newsToShow = showRecent ? news.slice(0, 3) : news;
  return (
    <section id='news' className='py-20 bg-stone-50'>
      <div className='layout'>
        <h2 className='mb-12 text-center text-3xl font-bold text-stone-800'>
          {showRecent ? 'Recent News' : 'News'}
        </h2>
        <div className='mx-auto max-w-4xl space-y-4'>
          {newsToShow.map((item) => (
            <NewsItem key={item.title} item={item} />
          ))}
        </div>
        {showRecent && (
          <div className='flex flex-col items-center mt-8'>
            <ArrowLink as={ButtonLink} variant='light' href='/news'>
              View All News
            </ArrowLink>
          </div>
        )}
      </div>
    </section>
  );
}
