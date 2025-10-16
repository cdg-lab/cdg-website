'use client';

import { useState } from 'react';

import Button from '@/components/buttons/Button';
import { Section } from '@/components/ProjectComponents';

export default function BibtexSection({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section className={className} title='Citation'>
      <div className='relative'>
        <Button
          onClick={handleCopy}
          variant='light'
          size='sm'
          className='absolute top-2 right-2 z-10'
        >
          {copied ? 'Copied' : 'Copy'}
        </Button>
        <pre className='p-4 bg-stone-200 rounded-md shadow-inner overflow-x-auto'>
          <code>{children}</code>
        </pre>
      </div>
    </Section>
  );
}
