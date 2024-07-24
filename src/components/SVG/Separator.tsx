import * as React from "react";
import type { SVGProps } from "react";
const SvgSeparator = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#A10550"
      d="m12.787 21.502-9.79-9.79v2c0 .53.21 1.04.59 1.41l7.79 7.79c.78.78 2.05.78 2.83 0l6.21-6.21c.78-.78.78-2.05 0-2.83z"
    />
    <path
      fill="#A10550"
      d="M11.377 17.912c.39.39.9.59 1.41.59s1.02-.2 1.41-.59l6.21-6.21c.78-.78.78-2.05 0-2.83l-7.79-7.79c-.37-.37-.88-.58-1.41-.58h-6.21c-1.1 0-2 .9-2 2v6.21c0 .53.21 1.04.59 1.41zm-6.38-15.41h6.21l7.79 7.79-6.21 6.21-7.79-7.79z"
    />
    <path
      fill="#A10550"
      d="M7.247 6.002a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
    />
  </svg>
);
export default SvgSeparator;
