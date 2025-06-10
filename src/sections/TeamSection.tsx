const TeamMemberPlaceholder = ({
  name,
  role,
}: {
  name: string;
  role: string;
}) => (
  <div className='text-center'>
    <div className='mx-auto mb-4 h-32 w-32 rounded-full bg-gray-300'></div>
    <h4 className='text-lg font-semibold text-gray-800'>{name}</h4>
    <p className='text-gray-600'>{role}</p>
  </div>
);

export default function TeamSection() {
  return (
    <section id='team' className='bg-gray-50 py-20'>
      <div className='layout'>
        <h2 className='mb-12 text-center text-3xl font-bold text-gray-900'>
          Meet the Team
        </h2>
        <div className='mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4'>
          <TeamMemberPlaceholder
            name='Adriana Schulz'
            role='Principal Investigator'
          />
          <TeamMemberPlaceholder name='Student Name' role='PhD Student' />
          <TeamMemberPlaceholder name='Student Name' role='PhD Student' />
          <TeamMemberPlaceholder name='Student Name' role='Masters Student' />
        </div>
      </div>
    </section>
  );
}
