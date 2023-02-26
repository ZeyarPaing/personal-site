import { ReactNode, useEffect, useMemo, useState } from 'react';

function PatternBackground({
  children,
  homePage = false,
}: {
  children: ReactNode;
  homePage?: boolean;
}) {
  const [scrollY, setScrollY] = useState(0);

  const setScrollPosition = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    if (homePage) {
      window.addEventListener('scroll', setScrollPosition);
    }
    () => window.removeEventListener('scroll', setScrollPosition);
  }, []);

  let opacity = useMemo(
    () =>
      scrollY > 1300 ? (scrollY > 1400 ? scrollY / 4000 : 0.2) : 150 / scrollY,
    [scrollY],
  );

  return (
    <section>
      <div className="relative z-[1]">{children}</div>
      <div
        style={
          homePage
            ? {
                opacity: Math.min(Math.max(0, opacity), 1),
                // backgroundImage: `linear-gradient(${
                //   st / 2
                // }deg, var(--tw-gradient-stops))`,
              }
            : undefined
        }
        className="fixed z-0 inset-0 bg-gradient-to-r from-secondary-dark/50 to-primary-dark/50 opacity-100 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] "
      >
        <svg
          aria-hidden="true"
          className="absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-x-[-18deg] mix-blend-overlay fill-white/2.5 stroke-white/5"
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
          <rect
            width="100%"
            height="100%"
            strokeWidth="0"
            fill="url(#bPattern)"
          ></rect>
          <svg x="-12" y="4" className="overflow-visible">
            <rect strokeWidth="0" width="73" height="57" x="288" y="168"></rect>
            <rect strokeWidth="0" width="73" height="57" x="144" y="56"></rect>
            <rect strokeWidth="0" width="73" height="57" x="504" y="168"></rect>
            <rect strokeWidth="0" width="73" height="57" x="720" y="336"></rect>
          </svg>
        </svg>
      </div>
    </section>
  );
}

export default PatternBackground;
