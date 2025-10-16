import { LucideIcon } from 'lucide-react';
import Image from 'next/image';
import { IconType } from 'react-icons';

import { cn } from '@/lib/utils';

import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';

interface Author {
  name: string;
  href?: string;
  remark?: string;
}

interface Link {
  icon?: IconType | LucideIcon;
  label: string;
  href: string;
}

interface Project {
  title: string;
  authors: Author[];
  authorRemarks?: Record<string, string>;
  venue?: string;
  links: Link[];
  teaser?: string;
  teaser_description?: string;
}

function AuthorView({ author }: { author: Author }) {
  const remark = author.remark ? (
    <span className='text-stone-600 align-super text-sm'>{author.remark}</span>
  ) : null;
  const link = author.href ? (
    <UnderlineLink href={author.href} className='text-lg md:text-xl'>
      {author.name}
    </UnderlineLink>
  ) : (
    <span className='text-lg md:text-xl'>{author.name}</span>
  );
  return (
    <div>
      {link}
      {remark}
    </div>
  );
}

function ProjectView({
  project,
  children,
}: {
  project: Project;
  children?: React.ReactNode;
}) {
  return (
    <div className='min-h-screen'>
      <div className='bg-stone-50 py-12'>
        <div className='layout'>
          <h1 className='text-3xl md:text-4xl font-bold text-stone-800'>
            {project.title}
          </h1>
          <div className='mt-4 flex flex-row gap-x-2 flex-wrap'>
            {project.authors.map((author, i) => (
              <div key={i} className='flex'>
                <AuthorView author={author} />
                {i < project.authors.length - 1 && (
                  <span className='text-stone-600'>,</span>
                )}
              </div>
            ))}
          </div>
          {project.authorRemarks && (
            <div className='mt-3 text-stone-600 flex flex-row gap-x-2 flex-wrap'>
              {Object.entries(project.authorRemarks).map(([key, value]) => (
                <div key={key} className=''>
                  <span className='text-xs align-super text-stone-500'>
                    {key}
                  </span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          )}
          {project.venue && (
            <div className='mt-3 text-stone-600'>
              <span>{project.venue}</span>
            </div>
          )}
          <div className='mt-4 flex flex-row gap-2 flex-wrap'>
            {project.links.map((link) => (
              <ButtonLink
                key={link.href}
                href={link.href}
                variant='light'
                leftIcon={link.icon}
              >
                {link.label}
              </ButtonLink>
            ))}
          </div>
          {project.teaser && (
            <div className='mt-6'>
              <Image
                width={1100}
                height={256}
                src={project.teaser}
                alt={project.title ?? ''}
                className='p-4 bg-white flex-shrink-0 rounded-md object-contain shadow-small'
              />
              {project.teaser_description && (
                <p className='px-2 mt-3 text-sm text-stone-500'>
                  {project.teaser_description}
                </p>
              )}
            </div>
          )}
          <div className='mt-8 space-y-8'>{children}</div>
        </div>
      </div>
    </div>
  );
}

function Section({
  children,
  title,
  className,
}: {
  children?: React.ReactNode;
  title?: string;
  className?: string;
}) {
  return (
    <div className={cn('text-stone-800', className)}>
      {title && <h2 className='mb-3'>{title}</h2>}
      {children}
    </div>
  );
}

export { type Author, type Project, AuthorView, ProjectView, Section };
