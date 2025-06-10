import UnderlineLink from '@/components/links/UnderlineLink';

export default function HeroSection() {
  return (
    <section className='flex min-h-[60vh] items-center'>
      <div className='layout text-center'>
        <h1 className='text-4xl font-extrabold leading-tight text-gray-900 md:text-6xl'>
          Computational Design Group
        </h1>
        <p className='mx-auto mt-4 max-w-3xl text-lg text-gray-600'>
          Investigating problems in digital fabrication and computer graphics.
          Led by{' '}
          <UnderlineLink href='https://vivo.brown.edu/display/aschulz4'>
            Adriana Schulz
          </UnderlineLink>{' '}
          at Brown University.
        </p>
      </div>
    </section>
  );
}
