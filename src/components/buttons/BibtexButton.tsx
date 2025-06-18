'use client';

import { useState } from 'react';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import Button from './Button';

interface BibtexButtonProps {
  bibtex: string;
  size?: 'sm' | 'base';
  variant?: 'light' | 'primary';
}

export default function BibtexButton({
  bibtex,
  size = 'sm',
  variant = 'light',
}: BibtexButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(bibtex);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={size} variant={variant}>
          BibTeX
        </Button>
      </DialogTrigger>
      <DialogContent className='max-w-2xl'>
        <DialogHeader>
          <DialogTitle>BibTeX</DialogTitle>
        </DialogHeader>
        <div className='mt-4 overflow-hidden w-full'>
          <pre className='p-4 bg-stone-100 rounded-md overflow-x-auto'>
            <code>{bibtex}</code>
          </pre>
          <div className='mt-4 flex justify-end'>
            <Button size='sm' variant='light' onClick={handleCopy}>
              {isCopied ? 'Copied!' : 'Copy to clipboard'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
