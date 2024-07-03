import { ReactNode, useEffect, useMemo, useState } from 'react';

function PatternBackground({ children }: { children: ReactNode; homePage?: boolean }) {
  return (
    <section>
      <div>{children}</div>
      <div className="absolute inset-0 z-[-1] bg-gradient-to-r from-zinc-500/50 to-neutral-600/50 opacity-100 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
        <svg
          aria-hidden="true"
          className="fill-white/2.5 absolute inset-x-0 inset-y-[-50%] h-[200%] w-full stroke-white/5 mix-blend-overlay"
        >
          <defs>
            <pattern
              id="bPattern"
              width="72"
              height="56"
              patternUnits="userSpaceOnUse"
              x="-12"
              y="4"
            >
              <path d="M.5 56V.5H72" fill="none"></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" strokeWidth="0" fill="url(#bPattern)"></rect>
          <svg x="-12" y="4" className="overflow-visible">
            <rect strokeWidth="0" width="73" height="57" x="288" y="168"></rect>
            <rect strokeWidth="0" width="73" height="57" x="144" y="56"></rect>
            <rect strokeWidth="0" width="73" height="57" x="504" y="168"></rect>
            {/* <rect strokeWidth="0" width="73" height="57" x="720" y="336"></rect> */}
          </svg>
        </svg>
      </div>
    </section>
  );
}

export default PatternBackground;
