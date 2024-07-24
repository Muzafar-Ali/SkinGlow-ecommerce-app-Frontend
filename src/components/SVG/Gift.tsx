import * as React from "react";
import type { SVGProps } from "react";
const SvgGift = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#A10550"
      d="M20 6.5h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68c-.54-.8-1.45-1.34-2.5-1.34-1.66 0-3 1.34-3 3 0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19.5c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2v-11c0-1.11-.89-2-2-2m-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m-6 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m11 15H4v-2h16zm0-5H4v-6h5.08L7 11.33l1.62 1.17L12 7.9l3.38 4.6L17 11.33 14.92 8.5H20z"
    />
  </svg>
);
export default SvgGift;
