import { people } from '@/data/people';

import TeamMembers from '@/components/team/TeamMembers';

export default function TeamSection() {
  return (
    <section id='team' className='bg-gray-50 py-20'>
      <div className='layout'>
        <h2 className='mb-12 text-center text-3xl font-bold text-gray-900'>
          Meet the Team
        </h2>
        <TeamMembers people={people} />
      </div>
    </section>
  );
}
