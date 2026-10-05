# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

The Computational Design Group (CDG) website is a Next.js application using TypeScript, Tailwind CSS, and React. The site showcases research work, publications, team members, and news for the CDG at Brown University.

## Development Commands

```bash
# Start development server on port 31417
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Linting and formatting
pnpm lint           # Run ESLint
pnpm lint:fix       # Fix ESLint issues and format
pnpm lint:strict    # Strict ESLint with zero warnings
pnpm format         # Format with Prettier
pnpm format:check   # Check Prettier formatting

# Type checking
pnpm typecheck

# Testing
pnpm test           # Run tests
pnpm test:watch     # Run tests in watch mode
```

## Project Structure

### Core Architecture

- **Next.js App Router**: The project uses Next.js 14 with the app directory structure
- **Path Aliases**:
  - `@/*` maps to `./src/*`
  - `~/*` maps to `./public/*`

### Key Directories

- `/src/app/`: Next.js app router pages and layouts
  - `(website)/`: Route group for the main site, with pages `adriana/`, `components/`, `courses/`, `news/`, `publications/`, `team/`
  - `(course)/courses/`: Route group for individual course pages, with its own layout
  - API routes in `api/`
- `/src/sections/`: Main frontend components for different page sections
  - `HeroSection.tsx`: Landing page hero with logo
  - `PublicationsSection.tsx`: Publication list grouped by year, or recent publications only
  - `TeamSection.tsx`: Team member grid
  - `NewsSection.tsx`: News and announcements
  - `GallerySection.tsx`: Image galleries

- `/src/data/`: Data layer with TypeScript types
  - `people.ts`: Team member profiles with positions and metadata
  - `publication.ts`: Publication parser using BibTeX
  - `publications.bib`: Raw BibTeX data source
  - `news.ts`: News items and announcements
  - `course.ts`: Shared course listings and course page types

- `/src/components/`: Reusable UI components
  - `buttons/`: Various button components including BibtexButton
  - `links/`: Different link styles (ArrowLink, UnderlineLink, etc.)
  - `ui/`: Radix UI-based components

- `/src/lib/`: Shared utilities (class merging, logging, Open Graph metadata, environment validation, browser storage)
- `/src/constant/`: Site configuration and environment flags
- `/src/styles/`: Global CSS and color palette variables

### Data Flow

1. **Publications**: BibTeX file (`publications.bib`) → Parser (`@retorquere/bibtex-parser`) → TypeScript objects → UI components
2. **People**: TypeScript data with normalized lookups by last name for author matching
3. **Images**: Stored in `/public/images/` with subdirectories for profiles and publication previews

### Special Configurations

- **SVG Handling**: Custom webpack config for SVG imports as React components
- **BibTeX Support**: Raw loader for `.bib` files
- **Custom Port**: Development and production servers run on port 31417
- **Sitemap Generation**: Automatic sitemap generation post-build

### Styling

- Tailwind CSS with custom theme extensions
- Custom color system using CSS variables (`--tw-color-primary-*`)
- Typography plugin for prose content
- Custom animations: `flicker` and `shimmer`

### Code Quality

- ESLint with TypeScript support and import sorting rules
- Prettier
- Husky for pre-commit hooks
- Strict TypeScript with `noUncheckedIndexedAccess`

### Testing

- Jest with React Testing Library
- Tests located in `src/lib/__tests__/`
- SVG mocking for tests
