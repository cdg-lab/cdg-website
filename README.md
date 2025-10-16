# Computational Design Group Website

Welcome to the CDG website repository! This guide will help you add your publications and create project pages.

## Introduction

The CDG website is built with:

- **Next.js 14** with App Router - React framework for production
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 3** - Utility-first CSS framework
- **BibTeX Parsing** - Publications are managed via BibTeX files using `@retorquere/bibtex-parser`
- **pnpm** - Fast, disk space efficient package manager

### Quick Start

```bash
# Install dependencies
pnpm install

# Start development server (runs on port 31417)
pnpm dev

# Build for production
pnpm build

# Run linting and formatting
pnpm lint:fix
```

Visit `http://localhost:31417` to see your changes.

### Before Making Changes

**Always sync with the latest version before starting work:**

```bash
git pull --rebase
pnpm install
```

This ensures you're working with the most up-to-date code and helps avoid merge conflicts.

### After Making Changes

When you're ready to commit your changes, follow these steps:

```bash
# Stage your changes
git add .

# Commit with a conventional commit message
git commit -m "feat: add new publication"
# or
git commit -m "feat: add project page for project-name"

# Push your changes
git push
```

**Important: Commit Message Format**

This repository uses [conventional commits](https://www.conventionalcommits.org/). Your commit message **must** follow this format or the pre-commit hook will fail:

```
<type>: <description>

Examples:
feat: add Design for Descent publication
feat: add project page for knitting templates
fix: correct author name in publication
docs: update README with new instructions
```

Common commit types:

- `feat:` - New feature or content (new publication, project page)
- `fix:` - Bug fix or correction
- `docs:` - Documentation changes
- `style:` - Formatting, styling changes
- `refactor:` - Code refactoring without changing functionality

## Adding a New Publication

Publications are managed through a BibTeX file. Follow these steps:

### 1. Add BibTeX Entry

Edit `src/data/publications.bib` and add your publication entry:

```bibtex
@inproceedings{yourname2025projectname,
  author    = {Last, First and Other, Author and Schulz, Adriana},
  title     = {Your Paper Title},
  year      = {2025},
  publisher = {Association for Computing Machinery},
  booktitle = {Conference Name},
  doi       = {10.1145/xxxxx},
  preview   = {2025-projectname.png},
  html      = {/publications/project-name},
  pdf       = {/assets/papers/Conference-2025-Your-Paper.pdf}
}
```

**Important BibTeX fields:**

- `preview` - Filename of teaser image (just the filename, not full path)
- `html` - Link to project page (use `/publications/project-name` for internal pages)
- `pdf` - Path to PDF file relative to `/public/`
- `video` - (Optional) Link to video
- `arxiv` - (Optional) arXiv ID

### 2. Add Teaser Image

Place your publication preview image in:

```
public/images/publication_preview/2025-projectname.png
```

**Image guidelines:**

- Use descriptive filenames with year prefix (e.g., `2025-projectname.png`)
- Common formats: PNG or JPG
- Recommended size: ~1200px wide for good quality

### 3. Add PDF (Optional)

If hosting the PDF on this site, place it in:

```
public/assets/papers/Conference-2025-Your-Paper.pdf
```

Then reference it in BibTeX:

```bibtex
pdf = {/assets/papers/Conference-2025-Your-Paper.pdf}
```

**Note:** You can also link to external PDFs hosted elsewhere by providing the full URL.

## Creating a Project Website

For publications that need a dedicated page with detailed content, videos, and supplementary materials:

### 1. Create Project Page

Create a new file at:

```
src/app/(website)/publications/[your-project-name]/page.tsx
```

### 2. Use the Template

Start with this template (adapted from `design-for-descent`):

```tsx
import { FaFilePdf, FaGithub } from 'react-icons/fa6';

import BibtexSection from '@/components/BibtexSection';
import {
  type Project,
  ProjectView,
  Section,
} from '@/components/ProjectComponents';

const project: Project = {
  title: 'Your Project Title',
  authors: [
    {
      name: 'Your Name',
      href: 'https://yourwebsite.com',
      remark: '1',
    },
    {
      name: 'Adriana Schulz',
      href: 'https://www.computationaldesign.group/adriana',
      remark: '1',
    },
  ],
  authorRemarks: {
    '1': 'University of Washington',
  },
  venue: 'Conference Name 2025',
  links: [
    {
      icon: FaFilePdf,
      label: 'Paper, PDF (6 MB)',
      href: '/assets/papers/Conference-2025-Your-Paper.pdf',
    },
    {
      icon: FaGithub,
      label: 'Code',
      href: 'https://github.com/yourusername/project',
    },
  ],
  teaser: '/assets/projects/your-project/teaser.png',
  teaser_description: `Brief description of your teaser image showing the key contribution or result.`,
} as const;

export default function Page() {
  return (
    <ProjectView project={project}>
      <Section title='Abstract'>
        <p>Your abstract text here...</p>
      </Section>

      <Section title='Video'>
        <div className='rounded-md shadow-small p-2 mt-4 bg-white'>
          <video
            width='1080'
            height='360'
            loop
            autoPlay
            playsInline
            muted
            src='/assets/projects/your-project/video.webm'
          />
        </div>
      </Section>

      <Section title='Acknowledgements'>
        <p>Acknowledgements and funding information...</p>
      </Section>

      <BibtexSection>
        {`@inproceedings{yourname2025projectname,
  author    = {Last, First and Schulz, Adriana},
  title     = {Your Project Title},
  year      = {2025},
  booktitle = {Conference Name},
  doi       = {10.1145/xxxxx}
}`}
      </BibtexSection>
    </ProjectView>
  );
}
```

### 3. Add Project Assets

Create a folder for your project assets:

```
public/assets/projects/your-project/
```

Add your media files:

- `teaser.png` - Main teaser image
- `video.webm` - Videos (WebM format recommended for web)
- Other supplementary images or files

### 4. Link from Publications Page

In your BibTeX entry in `publications.bib`, add:

```bibtex
html = {/publications/your-project}
```

This creates a clickable link from the publications list to your project page.

### Project Page Components

**Available icons** (import from `react-icons/fa6`):

- `FaFilePdf` - PDF links
- `FaGithub` - GitHub repositories
- `FaYoutube` - YouTube videos
- `FaGlobe` - External websites

**Author remarks** - Use for affiliations and equal contributions:

```tsx
authorRemarks: {
  '*': 'Equal contribution',
  '1': 'University of Washington',
  '2': 'Other Institution',
}
```

**Multiple sections** - Add as many as needed:

- Abstract
- Results
- Video
- Supplementary Material
- Acknowledgements
- BibTeX (always use `BibtexSection` component for this)

## File Structure Reference

```
cdg-website/
├── src/
│   ├── app/(website)/
│   │   └── publications/
│   │       └── [project-name]/
│   │           └── page.tsx          # Project pages
│   ├── data/
│   │   └── publications.bib          # All publications
│   └── components/
│       ├── ProjectComponents.tsx     # Project page components
│       └── BibtexSection.tsx         # BibTeX display
├── public/
│   ├── assets/
│   │   ├── papers/                   # PDF files
│   │   └── projects/                 # Project-specific assets
│   │       └── [project-name]/
│   └── images/
│       └── publication_preview/      # Teaser images
```

## Development Commands

```bash
pnpm dev              # Start development server on port 31417
pnpm build            # Build for production
pnpm start            # Start production server
pnpm lint             # Check for code issues
pnpm lint:fix         # Fix issues and format code
pnpm typecheck        # Check TypeScript types
pnpm format           # Format all files with Prettier
```

## Getting Help

- Check `CLAUDE.md` for additional technical details
- Review existing project pages in `src/app/(website)/publications/` for examples
- Look at `src/data/publications.bib` for BibTeX formatting examples

---

# Next.js + Tailwind CSS + TypeScript Starter and Boilerplate

<div align="center">
  <h2>🔋 ts-nextjs-tailwind-starter</h2>
  <p>Next.js + Tailwind CSS + TypeScript starter packed with useful development features.</p>
  <p>Made by <a href="https://theodorusclarence.com">Theodorus Clarence</a></p>

[![GitHub Repo stars](https://img.shields.io/github/stars/theodorusclarence/ts-nextjs-tailwind-starter)](https://github.com/theodorusclarence/ts-nextjs-tailwind-starter/stargazers)
[![Depfu](https://badges.depfu.com/badges/fc6e730632ab9dacaf7df478a08684a7/overview.svg)](https://depfu.com/github/theodorusclarence/ts-nextjs-tailwind-starter?project_id=30160)
[![Last Update](https://img.shields.io/badge/deps%20update-every%20sunday-blue.svg)](https://shields.io/)

</div>

## Features

This repository is 🔋 battery packed with:

- ⚡️ Next.js 14 with App Router
- ⚛️ React 18
- ✨ TypeScript
- 💨 Tailwind CSS 3 — Configured with CSS Variables to extend the **primary** color
- 💎 Pre-built Components — Components that will **automatically adapt** with your brand color, [check here for the demo](https://tsnext-tw.thcl.dev/components)
- 🃏 Jest — Configured for unit testing
- 📈 Absolute Import and Path Alias — Import components using `@/` prefix
- 📏 ESLint — Find and fix problems in your code, also will **auto sort** your imports
- 💖 Prettier — Format your code consistently
- 🐶 Husky & Lint Staged — Run scripts on your staged files before they are committed
- 🤖 Conventional Commit Lint — Make sure you & your teammates follow conventional commit
- ⏰ Release Please — Generate your changelog by activating the `release-please` workflow
- 👷 Github Actions — Lint your code on PR
- 🚘 Automatic Branch and Issue Autolink — Branch will be automatically created on issue **assign**, and auto linked on PR
- 🔥 Snippets — A collection of useful snippets
- 👀 Open Graph Helper Function — Awesome open graph generated using [og](https://github.com/theodorusclarence/og), fork it and deploy!
- 🗺 Site Map — Automatically generate sitemap.xml
- 📦 Expansion Pack — Easily install common libraries, additional components, and configs.

See the 👉 [feature details and changelog](https://github.com/theodorusclarence/ts-nextjs-tailwind-starter/blob/main/CHANGELOG.md) 👈 for more.

You can also check all of the **details and demos** on my blog post:

- [One-stop Starter to Maximize Efficiency on Next.js & Tailwind CSS Projects](https://theodorusclarence.com/blog/one-stop-starter)

## Getting Started

### 1. Clone this template using one of the three ways

1. Use this repository as template

   **Disclosure:** by using this repository as a template, there will be an attribution on your repository.

   I'll appreciate if you do, so this template can be known by others too 😄

   ![Use as template](https://user-images.githubusercontent.com/55318172/129183039-1a61e68d-dd90-4548-9489-7b3ccbb35810.png)

2. Using `create-next-app`

   ```bash
   pnpm create next-app  -e https://github.com/theodorusclarence/ts-nextjs-tailwind-starter ts-pnpm
   ```

   If you still want to use **pages directory** (_is not actively maintained_) you can use this command

   ```bash
   npx create-next-app -e https://github.com/theodorusclarence/ts-nextjs-tailwind-starter/tree/pages-directory project-name
   ```

3. Using `degit`

   ```bash
   npx degit theodorusclarence/ts-nextjs-tailwind-starter YOUR_APP_NAME
   ```

4. Deploy to Vercel

   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Ftheodorusclarence%2Fts-nextjs-tailwind-starter)

### 2. Install dependencies

It is encouraged to use **pnpm** so the husky hooks can work properly.

```bash
pnpm install
```

### 3. Run the development server

You can start the server using this command:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `src/pages/index.tsx`.

### 4. Change defaults

There are some things you need to change including title, urls, favicons, etc.

Find all comments with !STARTERCONF, then follow the guide.

Don't forget to change the package name in package.json

### 5. Commit Message Convention

This starter is using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), it is mandatory to use it to commit changes.

## Projects using ts-nextjs-tailwind-starter

<!--
TEMPLATE
- [sitename](https://sitelink.com) ([Source](https://github.com/githublink))
- [sitename](https://sitelink.com)
-->

- [theodorusclarence.com](https://theodorusclarence.com) ([Source](https://github.com/theodorusclarence/theodorusclarence.com))
- [Notiolink](https://notiolink.thcl.dev/) ([Source](https://github.com/theodorusclarence/notiolink))
- [NextJs + Materia UI + Typescript](https://github.com/AlexStack/nextjs-materia-mui-typescript-hook-form-scaffold-boilerplate-starter)

Are you using this starter? Please add your page (and repo) to the end of the list via a [Pull Request](https://github.com/theodorusclarence/ts-nextjs-tailwind-starter/edit/main/README.md). 😃

## Expansion Pack 📦

This starter is now equipped with an [expansion pack](https://github.com/theodorusclarence/expansion-pack).

You can easily add expansion such as React Hook Form + Components, Storybook, and more just using a single command line.

<https://user-images.githubusercontent.com/55318172/146631994-e1cac137-1664-4cfe-950b-a96decc1eaa6.mp4>

Check out the [expansion pack repository](https://github.com/theodorusclarence/expansion-pack) for the commands

### App Router Update

Due to App Router update, the expansion pack is currently **outdated**. It will be updated in the future. You can still use them by copy and pasting the files.
