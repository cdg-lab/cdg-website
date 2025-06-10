import UnderlineLink from '@/components/links/UnderlineLink';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Logo from '~/svg/MainLogo.svg';

export default function HeroSection() {
  return (
    <section className='flex min-h-[60vh] items-center bg-gradient-to-b from-stone-50 to-stone-100'>
      <div className='layout flex flex-col text-center items-center py-16'>
        <Logo className='w-[300px]' />
        <h1 className='text-4xl font-bold leading-tight text-stone-600 md:text-5xl mt-2'>
          Computational Design Group (CDG)
        </h1>
        <p className='mx-auto mt-4 max-w-3xl text-lg text-stone-500'>
          Investigating problems in digital fabrication and computer graphics.
          <br />
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
