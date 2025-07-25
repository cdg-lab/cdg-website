import { parse } from '@retorquere/bibtex-parser';

import papers from './publications.bib';

const parsedPapers = parse(papers, {
  english: true,
  sentenceCase: false,
  verbatimFields: ['html'],
});

export const publications = parsedPapers.entries.map((entry) => {
  const fields = entry.fields;
  const venue =
    fields.journal ||
    (fields.booktitle && `In ${fields.booktitle}`) ||
    fields.school ||
    undefined;
  const year = parseInt(fields.year ?? '9999');
  const month = fields.month ? parseInt(fields.month) : undefined;

  return {
    title: fields.title,
    authors: (fields.author ?? []).map((author) => ({
      firstName: author.firstName,
      lastName: author.lastName,
      name: author.name,
    })),
    month: month,
    year: year,
    venue: venue,
    arxiv: fields.arxiv,
    doi: fields.doi,
    abstract: fields.abstract,
    bibtex: entry.input,
    image: fields.preview,
    www: fields.html,
    pdf: fields.pdf,
    video: fields.video,
    // json: JSON.stringify(fields, null, 2),
  };
});

export type Publication = (typeof publications)[number];
