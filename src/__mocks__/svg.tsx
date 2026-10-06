import * as React from 'react';

type SvgMockProps = React.SVGProps<SVGSVGElement> & {
  title?: string;
  titleId?: string;
};

/**
 * Jest's stand-in for `*.svg` imports, which next.config.js turns into React
 * components with `@svgr/webpack`. Renders an empty `<svg>` that, like SVGR's
 * `titleProp: true` output, takes `title` and `titleId` props and renders
 * `title` as a `<title>` element with the id given by `titleId`.
 */
const SvgMock = ({ title, titleId, ...props }: SvgMockProps) => (
  <svg aria-labelledby={titleId} {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
  </svg>
);

export default SvgMock;
