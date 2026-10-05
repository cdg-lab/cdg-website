import * as React from 'react';

/**
 * Stands in for SVG files that SVGR imports as React components. Renders an
 * empty `<svg>` and forwards props and ref to it.
 */
const SvgMock = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => <svg ref={ref} {...props} />,
);

export default SvgMock;
