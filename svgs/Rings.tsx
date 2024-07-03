import { SVGProps } from 'react';
export default function Rings(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={376}
      height={375}
      viewBox="0 0 376 375"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle opacity={0.85} cx={188} cy={187.176} r={186.555} stroke="url(#c)" />
      <circle cx={188} cy={187.176} r={103.703} stroke="url(#b)" />
      <circle opacity={0.85} cx={188} cy={187.176} r={144.093} stroke="url(#c)" />
      <defs>
        <linearGradient
          id="a"
          x1={188}
          y1={0.121}
          x2={188}
          y2={374.23}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ACACAC" />
          <stop offset={1} stopColor="#ACACAC" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="b"
          x1={188}
          y1={82.973}
          x2={188}
          y2={291.379}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ACACAC" />
          <stop offset={1} stopColor="#ACACAC" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="c"
          x1={188}
          y1={42.582}
          x2={188}
          y2={331.769}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ACACAC" />
          <stop offset={1} stopColor="#ACACAC" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  );
}
