import { Metadata } from 'next';
import Image from 'next/image';
import ReactMarkdown, { Components } from 'react-markdown';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';

export const metadata: Metadata = {
  title: 'Adriana Schulz',
};

const content = `
I am an Associate Professor of [Computer Science](https://cs.brown.edu/) at [Brown University](https://brown.edu/) and a member of the [Brown Visual Computing](https://visual.cs.brown.edu/) group. I am also an affiliate faculty at the [Paul G. Allen School of Computer Science & Engineering](https://www.cs.washington.edu/) at the [University of Washington](https://www.washington.edu/) and the chair of [WiGRAPH](https://www.wigraph.org/).

My research group creates design tools and systems that will revolutionize how we build physical artifacts. A central challenge for design tools in manufacturing is the need to simultaneously nurture the creative ability to conceive novel designs and the analytical capacity to critically evaluate and optimize functionality and production. My group tackles this challenge through innovative solutions that are grounded in the fundamentals of geometry processing and combine insights from machine learning and programming languages.

My research has been recognized by the [Alfred P. Sloan Foundation Fellowship](https://sloan.org/fellowships/2024-Fellows), [MIT Technology Review's Innovators Under 35 award](https://www.technologyreview.com/innovator/adriana-schulz/), an NSF CAREER award, and faculty awards from Google, Amazon, and Intel, among others. I am honored to receive the [2024 ACM SIGGRAPH Significant New Researcher Award](https://www.siggraph.org/awards/significant-new-researcher-award/2024).
` as const;

const content2 = `
## Teaching

- Fall 2019: Computational Fabrication ([CSE 556](https://courses.cs.washington.edu/courses/cse556/19au/))
- Spring 2019: Reseach Seminar: Geometry Processing ([CSE 590-K](https://homes.cs.washington.edu/~adriana/GeoProc/index.html))
- Winter 2019: Special Topics in Computational Fabrication ([CSE 599-J1](https://courses.cs.washington.edu/courses/cse599j1/19wi/))
- Fall 2018: Computational Fabrication ([CSE 556](https://courses.cs.washington.edu/courses/cse556/18au/))

## Bio

I grew up in Brazil, where I earned a Bachelor's degree in Electronics Engineering from [UFRJ](http://www.impa.br/) and a Master's in Mathematics from [IMPA](http://www.impa.br/). I completed my Ph.D. in Computer Science at [MIT](https://www.csail.mit.edu/) in 2018. After that, I spent several wonderful years at the [University of Washington](https://www.cs.washington.edu/), where I served as an Assistant Professor of Computer Science and was later promoted to Associate Professor with tenure. I joined [Brown University](https://brown.edu) in 2025.
` as const;

const components: Components = {
  a: ({ node: _node, href, children, ...props }) => {
    if (!href) {
      return <>{children}</>;
    }
    return (
      <UnderlineLink href={href} {...props}>
        {children}
      </UnderlineLink>
    );
  },
} as const;

export default function Page() {
  return (
    <section id='adriana-bio' className='py-12 bg-stone-50'>
      <div className='layout'>
        <div className='grid grid-cols-1 md:grid-cols-[fit-content(256px)_1fr] gap-12'>
          {/* Left column for image and contact info */}
          <div className=''>
            <div className=''>
              <div className='w-full max-w-[256px] h-auto mx-auto md:mx-0 mb-6 overflow-hidden rounded-lg bg-gray-300 shadow-lg'>
                <Image
                  src='/images/profile/adriana-full.jpg'
                  alt='Profile picture of Adriana'
                  width={256}
                  height={256}
                  className='h-full w-full object-cover'
                />
              </div>
              <div className='text-sm text-stone-700 space-y-1 text-center md:text-left'>
                <div>Associate Professor</div>
                <div>Brown University</div>
                <div>adriana_schulz [at] brown.edu</div>
              </div>
            </div>
          </div>
          {/* Right column for name and bio */}
          <div className=''>
            <h2 className='mb-6 text-5xl font-bold text-stone-800 tracking-tight'>
              Adriana Schulz
            </h2>
            <div className='prose prose-stone prose-a:no-underline max-w-none'>
              <ReactMarkdown components={components}>{content}</ReactMarkdown>
              <div className='flex flex-col mt-4 gap-4 items-start'>
                <ArrowLink as={ButtonLink} variant='light' href='/'>
                  View my Publications, News, and more
                </ArrowLink>
                <ArrowLink
                  as={ButtonLink}
                  variant='light'
                  href='https://docs.google.com/document/d/1_WPgUFt8hEySCtvC--cteFJAOPxfl_3KkaU7c8LlJRE/edit?usp=sharing'
                >
                  Info for Prospective Students
                </ArrowLink>
              </div>
              <ReactMarkdown components={components}>{content2}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
