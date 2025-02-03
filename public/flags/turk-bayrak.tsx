import React from "react";
import type { SVGProps } from "react";

export function CircleFlagsLangTr(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={512}
      height={512}
      viewBox="0 0 512 512"
      {...props}
    >
      <mask id="circleFlagsLangTr0">
        <circle cx={256} cy={256} r={256} fill="#fff"></circle>
      </mask>
      <g mask="url(#circleFlagsLangTr0)">
        <path fill="#d80027" d="M0 0h512v512H0z"></path>
        <g fill="#eee">
          <path d="m350 182l33 46l54-18l-33 46l33 46l-54-18l-33 46v-57l-54-17l54-18z"></path>
          <path d="M260 370a114 114 0 1 1 54-215a141 141 0 1 0 0 202c-17 9-35 13-54 13"></path>
        </g>
      </g>
    </svg>
  );
}
