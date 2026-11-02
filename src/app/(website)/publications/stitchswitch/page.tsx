import { FaFilePdf, FaLink } from 'react-icons/fa6';

import BibtexSection from '@/components/BibtexSection';
import {
  type Project,
  ProjectView,
  Section,
} from '@/components/ProjectComponents';

const project: Project = {
  title:
    'StitchSwitch: Programmable Surface Deformation and Bistability in Embroidered Textiles',
  authors: [
    {
      name: 'Vivian Li',
      href: 'https://vivli.io',
      remark: '1',
    },
    {
      name: 'Milin Kodnongbua',
      href: 'https://mkodnongbua.com',
      remark: '2',
    },
    {
      name: 'Heather Robertson',
      remark: '1',
    },
    {
      name: 'Yiyue Luo',
      remark: '2',
    },
    {
      name: 'Adriana Schulz',
      href: 'https://www.computationaldesign.group/adriana',
      remark: '1',
    },
  ],
  authorRemarks: {
    '1': 'Brown University',
    '2': 'University of Washington',
  },
  venue: 'UIST 2026',
  links: [
    {
      icon: FaFilePdf,
      label: 'Paper, PDF',
      href: '/assets/papers/UIST-2026-StitchSwitch.pdf',
    },
    {
      icon: FaLink,
      label: 'DOI',
      href: 'https://dl.acm.org/doi/10.1145/3830398.3830499',
    },
  ],
} as const;

export default function Page() {
  return (
    <ProjectView project={project}>
      <Section>
        <div className='rounded-md bg-white p-2 shadow-small'>
          <video
            controls
            preload='metadata'
            playsInline
            poster='/assets/projects/stitchswitch/poster.jpg'
            src='/assets/projects/stitchswitch/supplemental-vid.mp4'
            className='aspect-video w-full rounded'
          />
        </div>
      </Section>
      <Section title='Abstract'>
        <p>
          Programming 3D surface deformation has been widely explored in rigid
          and semi-rigid materials, but achieving predictable shape change in
          wearable textiles remains challenging. We present StitchSwitch, a
          computational design and fabrication system for programming surface
          deformation and bistability into embroidered textiles through a
          continuous parametric tessellation design space. Embroidering
          triangle-tessellated patches onto pre-stretched elastic fabric encodes
          out-of-plane deformation and passive bistability directly into the
          textile. We characterize how patch diameter and embroidery fill
          percentage govern deformation, revealing varied deformation outcomes
          and a saturation regime where increasing density shifts deformation
          from vertical height to lateral distribution. We develop a
          reduced-space simulation model predicting this relationship in real
          time, integrated into a garment-scale design tool supporting live 3D
          preview, inverse design, and fabrication-aware export. We demonstrate
          StitchSwitch through two garment-integrated applications, a tactile
          garment interface and a deformation-based storage pocket, showing how
          programmable bistable deformation enables functional structures
          directly within textiles.
        </p>
      </Section>
      <BibtexSection>
        {`@inproceedings{li2026stitchswitch,
  author = {Li, Vivian and Kodnongbua, Milin and Robertson, Heather and Luo, Yiyue and Schulz, Adriana},
  title = {StitchSwitch: Programmable Surface Deformation and Bistability in Embroidered Textiles},
  year = {2026},
  publisher = {Association for Computing Machinery},
  address = {New York, NY, USA},
  url = {https://doi.org/10.1145/3830398.3830499},
  doi = {10.1145/3830398.3830499},
  abstract = {Programming 3D surface deformation has been widely explored in rigid and semi-rigid materials, but achieving predictable shape change in wearable textiles remains challenging. We present StitchSwitch, a computational design and fabrication system for programming surface deformation and bistability into embroidered textiles through a continuous parametric tessellation design space. Embroidering triangle-tessellated patches onto pre-stretched elastic fabric encodes out-of-plane deformation and passive bistability directly into the textile. We characterize how patch diameter and embroidery fill percentage govern deformation, revealing varied deformation outcomes and a saturation regime where increasing density shifts deformation from vertical height to lateral distribution. We develop a reduced-space simulation model predicting this relationship in real time, integrated into a garment-scale design tool supporting live 3D preview, inverse design, and fabrication-aware export. We demonstrate StitchSwitch through two garment-integrated applications, a tactile garment interface and a deformation-based storage pocket, showing how programmable bistable deformation enables functional structures directly within textiles.},
  booktitle = {Proceedings of the 39th Annual ACM Symposium on User Interface Software and Technology},
  numpages = {8},
  keywords = {shape-change, programmable textiles, machine embroidery, bistability, computational design, digital fabrication},
  location = {Detroit, MI, USA},
  series = {UIST '26},
}
`}
      </BibtexSection>
    </ProjectView>
  );
}
