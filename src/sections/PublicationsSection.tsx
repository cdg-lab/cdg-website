'use server';

import Image from 'next/image';

import { peopleByLastName } from '@/data/people';
import { type Publication, publications } from '@/data/publication';

import BibtexButton from '@/components/buttons/BibtexButton';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';

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

const PublicationView = ({ publication }: { publication: Publication }) => {
  const authors = publication.authors.map((author) => {
    const parts = [];
    if (author.firstName) parts.push(author.firstName);
    if (author.lastName) parts.push(author.lastName);
    const name = parts.length > 0 ? parts.join(' ') : author.name;
    const peopleCandidate =
      author.lastName !== undefined
        ? peopleByLastName[author.lastName.toLowerCase().normalize()]
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
    <div className='flex flex-col md:flex-row items-start gap-4 border-gray-200 py-4'>
      {publication.image && (
        <Image
          width={256}
          height={256}
          src={`/images/publication_preview/${publication.image}`}
          alt={publication.title ?? ''}
          className='flex-shrink-0 rounded-md object-contain shadow-small'
        />
      )}
      <div className='flex-grow'>
        <p className='text-lg font-semibold text-stone-800'>
          {publication.title}
        </p>
        <p className='mt-1 text-stone-600'>
          {authors.map((author, i) => [
            i > 0 && <span key={i}>{', '}</span>,
            author.people ? (
              <UnderlineLink href={author.people.website} key={author.name}>
                {author.name}
              </UnderlineLink>
            ) : (
              <span key={author.name}>{author.name}</span>
            ),
          ])}
        </p>
        <p className='mt-1 text-stone-600 font-light text-sm'>
          {publication.venue && (
            <span className='italic'>{publication.venue}</span>
          )}
          {publication.venue && displayYear && ', '}
          {displayYear}
        </p>
        <p className='mt-2 flex flex-row gap-2'>
          {publication.www && (
            <ButtonLink size='sm' variant='light' href={publication.www}>
              Project Page
            </ButtonLink>
          )}
          {publication.code && (
            <ButtonLink size='sm' variant='light' href={publication.code}>
              Code
            </ButtonLink>
          )}
          {publication.pdf && (
            <ButtonLink size='sm' variant='light' href={publication.pdf}>
              PDF
            </ButtonLink>
          )}
          {publication.video && (
            <ButtonLink size='sm' variant='light' href={publication.video}>
              Video
            </ButtonLink>
          )}
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
          {publication.bibtex && (
            <BibtexButton
              size='sm'
              variant='light'
              bibtex={publication.bibtex}
            />
          )}
        </p>
      </div>
    </div>
  );
};

export default async function PublicationsSection({
  showRecent,
}: {
  showRecent?: boolean;
}) {
  const publicationsByYear = publications.reduce<Record<string, Publication[]>>(
    (acc, publication) => {
      const year = publication.year.toString();
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year]!.push(publication);
      return acc;
    },
    {},
  );

  const sortedYears = Object.keys(publicationsByYear).sort((a, b) => {
    return Number(b) - Number(a);
  });

  return (
    <section id='publications' className='py-20'>
      <div className='layout'>
        <h2 className='mb-12 text-center text-3xl font-bold text-stone-800'>
          {showRecent ? 'Recent Publications' : 'Publications'}
        </h2>
        <div className='mx-auto'>
          {showRecent
            ? publications
                .slice(0, 5)
                .map((publication) => (
                  <PublicationView
                    key={publication.doi}
                    publication={publication}
                  />
                ))
            : sortedYears.map((year) => (
                <div key={year} className='mt-12 first:mt-0'>
                  <h3 className='mb-2 pt-4 text-3xl font-semibold text-stone-400 text-right border-t border-stone-200'>
                    {year}
                  </h3>
                  {publicationsByYear[year]?.map((p) => (
                    <PublicationView key={p.doi} publication={p} />
                  ))}
                </div>
              ))}
        </div>
        {showRecent && (
          <div className='flex flex-col items-center mt-8'>
            <ArrowLink as={ButtonLink} variant='light' href='/publications'>
              View All Publications
            </ArrowLink>
          </div>
        )}
      </div>
    </section>
  );
}
