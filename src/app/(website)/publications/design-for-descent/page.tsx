import { FaFilePdf, FaGithub } from 'react-icons/fa6';

import BibtexSection from '@/components/BibtexSection';
import {
  type Project,
  ProjectView,
  Section,
} from '@/components/ProjectComponents';

const project: Project = {
  title: 'Design for Descent: What Makes a Shape Grammar Easy to Optimize?',
  authors: [
    {
      name: 'Milin Kodnongbua',
      href: 'https://mkodnongbua.com',
      remark: '*,1',
    },
    {
      name: 'Zihan Jack Zhang',
      href: 'https://zzhang-18.github.io/',
      remark: '*,1',
    },
    { name: 'Nicholas Sharp', href: 'https://nmwsharp.com/', remark: '2' },
    {
      name: 'Adriana Schulz',
      href: 'https://www.computationaldesign.group/adriana',
      remark: '1',
    },
  ],
  authorRemarks: {
    '*': 'Equal contribution',
    '1': 'University of Washington',
    '2': 'NVIDIA',
  },
  venue: 'SIGGRAPH Asia 2025 (Conference Track)',
  links: [
    {
      icon: FaFilePdf,
      label: 'Paper, PDF (6 MB)',
      href: '/assets/papers/SIGA-2025-D4Descent.pdf',
    },
    {
      icon: FaGithub,
      label: 'Code',
      href: 'https://github.com/milmillin/d4descent',
    },
  ],
  teaser: '/assets/projects/d4descent/teaser.png',
  teaser_description: `Successive steps of a tree grammar designed for descent being optimized to match the SIGGRAPH logo. This work shows how careful consideration of
the needs of optimization motivates the design of shape grammars well-suited for descent, turning difficult inverse tasks on structured representations into a
straightforward gradient-based iterative optimization on the user's objectives.`,
} as const;

export default function Page() {
  return (
    <ProjectView project={project}>
      <Section title='Abstract'>
        <p>
          Shape grammars offer a powerful framework for computational design,
          but synthesizing shape programs to achieve specific goals remains
          challenging. Inspired by the success of gradient-based optimization in
          high-dimensional, nonconvex spaces such as those in machine learning,
          we ask: what makes a shape grammar amenable to gradient-based
          optimization? To explore this, we introduce Stochastic Rewrite Descent
          (SRD), an algorithm that interleaves structural rewrites with
          continuous parameter updates, taking steps in both to optimize a given
          objective. We analyze the core challenges which have previously
          prevented optimizing shape programs via descent, and identify a set of
          desirable properties for grammars that support effective optimization,
          along with concrete grammar design recommendations to achieve them. We
          validate this approach across three shape grammars, demonstrating its
          effectiveness in diverse domains including image fitting, text-driven
          generation, and topology optimization. Through ablations and
          comparisons, we show that grammars satisfying our proposed properties
          lead to significantly better optimization performance. The goal of
          this work is to open the door to more general and flexible
          computational paradigms for inverse design with shape grammars.
        </p>
      </Section>
      <Section title='Optimization towards Target Images'>
        <div className='rounded-md shadow-small p-2 mt-4 bg-white'>
          <video
            width='1080'
            height='360'
            loop
            autoPlay
            playsInline
            muted
            src='/assets/projects/d4descent/sig.webm'
          />
        </div>
      </Section>
      <Section title='Optimization towards Text Prompts using SDS Loss'>
        <div className='rounded-md shadow-small p-2 mt-4 bg-white'>
          <video
            width='1080'
            height='360'
            loop
            autoPlay
            playsInline
            muted
            src='/assets/projects/d4descent/sds.webm'
          />
        </div>
      </Section>
      <Section title='Topology Optimization'>
        <div className='rounded-md shadow-small p-2 mt-4 bg-white'>
          <video
            width='1080'
            height='360'
            loop
            autoPlay
            playsInline
            muted
            src='/assets/projects/d4descent/topopt.webm'
          />
        </div>
      </Section>
      <Section title='Acknowledgements'>
        <p>
          This work is supported by the National Science Foundation under Grant
          No. 2212049 and 2219864 and the Sloan Research Fellowship. GPU compute
          is provided by NVIDIA Academic Grant Program.
        </p>
      </Section>
      <BibtexSection>
        {`@inproceedings{kodnongbua2025d4descent,
  author    = {Kodnongbua, Milin and Zhang, Zihan and Sharp, Nicholas and Schulz, Adriana},
  title     = {Design for Descent: What Makes a Shape Grammar Easy to Optimize?},
  year      = {2025},
  isbn      = {9798400721373},
  publisher = {Association for Computing Machinery},
  address   = {New York, NY, USA},
  url       = {https://doi.org/10.1145/3757377.3764004},
  doi       = {10.1145/3757377.3764004},
  abstract  = {Shape grammars offer a powerful framework for computational design, but synthesizing shape programs to achieve specific goals remains challenging. Inspired by the success of gradient-based optimization in high-dimensional, nonconvex spaces such as those in machine learning, we ask: what makes a shape grammar amenable to gradient-based optimization? To explore this, we introduce Stochastic Rewrite Descent (SRD), an algorithm that interleaves structural rewrites with continuous parameter updates, taking steps in both to optimize a given objective. We analyze the core challenges which have previously prevented optimizing shape programs via descent, and identify a set of desirable properties for grammars that support effective optimization, along with concrete grammar design recommendations to achieve them. We validate this approach across three shape grammars, demonstrating its effectiveness in diverse domains including image fitting, text-driven generation, and topology optimization. Through ablations and comparisons, we show that grammars satisfying our proposed properties lead to significantly better optimization performance. The goal of this work is to open the door to more general and flexible computational paradigms for inverse design with shape grammars.},
  booktitle = {SIGGRAPH Asia 2025 Conference Papers},
  articleno = {210},
  numpages  = {12},
  location  = {Hong Kong, Hong Kong},
  series    = {SA '25},
  keywords  = {optimization, shape grammar, procedural modeling},
}`}
      </BibtexSection>
    </ProjectView>
  );
}
