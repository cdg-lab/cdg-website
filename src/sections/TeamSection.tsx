import Image from 'next/image';
import Link from 'next/link';

import { type Profile, people } from '@/data/people';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';

const TeamMember = ({ person }: { person: Profile }) => {
  const name = `${person.firstNames[0]} ${person.lastName}`;
  return (
    <div className='text-center'>
      <Link href={person.website} target='_blank' rel='noopener noreferrer'>
        <div className='mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full bg-gray-300 shadow-medium'>
          <Image
            src={`/images/${person.image}`}
            alt={`Profile picture of ${name}`}
            width={128}
            height={128}
            className='h-full w-full object-cover'
          />
        </div>
      </Link>
      <UnderlineLink href={person.website} className='text-xl font-semibold'>
        {name}
      </UnderlineLink>
      <p className='text-stone-600 mt-2'>{person.position}</p>
      {person.firstNames[0] !== 'Adriana' && (
        <p className='text-stone-500 text-sm mt-1 font-light'>
          {`${person.joined} – ${person.until ?? 'Present'}`}
        </p>
      )}
    </div>
  );
};

export default function TeamSection({
  showCurrent,
}: {
  showCurrent?: boolean;
}) {
  const currentPeople = people.filter((person) => person.until === undefined);
  const alumni = people.filter((person) => person.until !== undefined);
  return (
    <section id='team' className='py-20'>
      <div className='layout'>
        <h2 className='mb-12 text-center text-3xl font-bold text-stone-800'>
          {showCurrent ? 'Current Members' : 'Meet the Team'}
        </h2>
        <div className='grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4'>
          {currentPeople.map((person) => (
            <TeamMember key={person.lastName} person={person} />
          ))}
        </div>
        {!showCurrent && (
          <div>
            <h2 className='mt-20 mb-12 text-3xl font-bold text-stone-600'>
              Alumni
            </h2>
            <div className='grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4'>
              {alumni.map((person) => (
                <TeamMember key={person.lastName} person={person} />
              ))}
            </div>
          </div>
        )}
        {showCurrent && (
          <div className='flex flex-col items-center mt-12'>
            <ArrowLink as={ButtonLink} variant='light' href='/team'>
              View All Members
            </ArrowLink>
          </div>
        )}
      </div>
    </section>
  );
}
