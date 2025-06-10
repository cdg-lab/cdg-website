import { peopleByLastName } from '@/data/people';
import { type Publication, publications } from '@/data/publication';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';

const Month: Record<number, string> = {
  1: 'Jan',
  2: 'Feb',
  3: 'Mar',
  4: 'Apr',
  5: 'May',
  6: 'Jun',
  7: 'Jul',
  8: 'Aug',
  9: 'Sep',
  10: 'Oct',
  11: 'Nov',
  12: 'Dec',
};

const Publication = ({ publication }: { publication: Publication }) => {
  const authors = publication.authors.map((author) => {
    const parts = [];
    if (author.firstName) parts.push(author.firstName);
    if (author.lastName) parts.push(author.lastName);
    const name = parts.length > 0 ? parts.join(' ') : author.name;
    const peopleCandidate =
      author.lastName !== undefined
        ? peopleByLastName[author.lastName.toLowerCase()]
        : undefined;
    const people = peopleCandidate?.firstNames.includes(author.firstName ?? '')
      ? peopleCandidate
      : undefined;
    return {
      name,
      people,
    };
  });

  const displayYear = publication.month
    ? `${Month[publication.month]} ${publication.year}`
    : publication.year?.toString();

  return (
    <div className='border-b border-gray-200 py-4'>
      <h3 className='text-lg font-semibold text-gray-800'>
        {publication.title}
      </h3>
      <p className='mt-1 text-gray-600'>
        {authors.map((author, i) => [
          i > 0 && ', ',
          author.people ? (
            <UnderlineLink href={author.people.website}>
              {author.name}
            </UnderlineLink>
          ) : (
            author.name
          ),
        ])}
      </p>
      <p className='mt-1 text-gray-600 font-light'>
        {publication.venue && (
          <span className='italic'>{publication.venue}</span>
        )}
        {publication.venue && displayYear && ', '}
        {displayYear}
      </p>
      <p className='mt-2'>
        {publication.arxiv && (
          <ButtonLink
            size='sm'
            variant='light'
            href={`https://doi.org/${publication.doi}`}
          >
            Arxiv
          </ButtonLink>
        )}
        {publication.doi && (
          <ButtonLink
            size='sm'
            variant='light'
            href={`https://doi.org/${publication.doi}`}
          >
            DOI
          </ButtonLink>
        )}
      </p>
    </div>
  );
};

export default function PublicationsSection() {
  const recentPublications = publications; // .slice(0, 3);

  return (
    <section id='publications' className='py-20'>
      <div className='layout'>
        <h2 className='mb-12 text-center text-3xl font-bold text-gray-900'>
          Publications
        </h2>
        <div className='mx-auto max-w-4xl'>
          {recentPublications.map((p) => (
            <Publication key={p.doi} publication={p} />
          ))}
        </div>
        <div className='mt-8 text-center'>
          <ArrowLink href='/publications' as={UnstyledLink}>
            View all publications
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}
