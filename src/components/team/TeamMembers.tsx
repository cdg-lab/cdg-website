'use client';

import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';

import { type Profile } from '@/data/people';

import Button from '@/components/buttons/Button';
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
      <UnderlineLink
        href={person.website}
        className='text-xl font-semibold text-gray-800'
      >
        {name}
      </UnderlineLink>
      <p className='text-gray-600 mt-2'>{person.position}</p>
      <p className='text-gray-500 text-sm mt-1 font-light'>
        {`${person.joined} – ${person.until ?? 'Present'}`}
      </p>
    </div>
  );
};

export default function TeamMembers({ people }: { people: Profile[] }) {
  const [showAll, setShowAll] = useState(false);

  const filteredPeople = useMemo(() => {
    if (showAll) return people;
    return people.filter((person) => person.until === undefined);
  }, [people, showAll]);

  return (
    <>
      <div className='mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4'>
        {filteredPeople.map((person) => (
          <TeamMember key={person.lastName} person={person} />
        ))}
      </div>
      <div className='mt-12 text-center'>
        <Button
          onClick={() => setShowAll(!showAll)}
          variant='light'
          rightIcon={showAll ? ChevronUpIcon : ChevronDownIcon}
        >
          {showAll ? 'Show Less' : 'View Past Members'}
        </Button>
      </div>
    </>
  );
}
