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
          className='absolute right-2 top-2 z-10'
        >
          {copied ? 'Copied' : 'Copy'}
        </Button>
        <pre className='overflow-x-auto rounded-md bg-stone-200 p-4 shadow-inner'>
          <code>{children}</code>
        </pre>
      </div>
    </Section>
  );
}
