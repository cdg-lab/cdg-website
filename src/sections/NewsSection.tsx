import { type News, news } from '@/data/news';

import ArrowLink from '@/components/links/ArrowLink';

function NewsItem({ item }: { item: News }) {
  return (
    <div className='border-b pb-4'>
      <p className='text-sm text-gray-500'>
        {item.date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>
      <h3 className='mt-1 text-xl font-semibold'>{item.title}</h3>
      {item.content && (
        <p className='mt-2 text-gray-600 text-sm'>{item.content}</p>
      )}
      {item.link && (
        <ArrowLink className='mt-2 text-sm text-gray-600' href={item.link}>
          Source
        </ArrowLink>
      )}
    </div>
  );
}

export default function NewsSection() {
  return (
    <section id='news' className='py-20'>
      <div className='layout'>
        <h2 className='mb-12 text-center text-3xl font-bold text-gray-900'>
          News
        </h2>
        <div className='mx-auto max-w-4xl space-y-8'>
          {news.map((item) => (
            <NewsItem key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
