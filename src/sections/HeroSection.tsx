import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
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
    <section className='flex items-center bg-gradient-to-b from-stone-50 to-stone-100'>
      <div className='layout flex flex-col md:flex-row items-center justify-center py-8 gap-4'>
        <Logo className='w-[128px] md:w-[256px]' />
        <div className='text-center md:text-left'>
          <h1 className='text-3xl md:text-4xl font-bold leading-tight text-stone-600 mt-2'>
            Computational Design Group (CDG)
          </h1>
          <p className='mt-4 text-stone-500'>
            Investigating problems in digital fabrication and computer graphics.
            <br />
            Led by <UnderlineLink href='/adriana'>
              Adriana Schulz
            </UnderlineLink>{' '}
            at Brown University.
          </p>
          <ArrowLink
            as={ButtonLink}
            variant='light'
            href='https://docs.google.com/document/d/1_WPgUFt8hEySCtvC--cteFJAOPxfl_3KkaU7c8LlJRE/edit?usp=sharing'
            className='mt-4'
          >
            For Prospective Students
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}
