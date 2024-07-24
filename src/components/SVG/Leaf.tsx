import * as React from "react";
import type { SVGProps } from "react";
const SvgLeaf = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <rect width="100%" height="100%" fill="#fef2f2" />
    <g stroke="#79043C">
      <path d="M15.185 13.392c6.945-4.486 14.132-1.266 20.773-8.297 1.547-1.64.648 18.399-7.664 25.992-6.077 5.547-15.461 4.929-18.625-.462-3.164-5.39-1.428-12.748 5.516-17.233ZM8.906 30c-1.472.787-2.996 1.254-5 1.429" />
    </g>
  </svg>
);
export default SvgLeaf;
