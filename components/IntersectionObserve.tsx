import React, { useLayoutEffect, useRef } from 'react';

type interSectionProps = {
  children: React.ReactNode;
};
const IntersectionObserve = ({ children }: interSectionProps) => {
  let ref = useRef<HTMLDivElement>(null);

  const intersectionObserve: () => IntersectionObserver = () =>
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        } else {
          // entry.target.classList.remove('animated');
        }
      });
    });

  useLayoutEffect(() => {
    ref.current?.classList.add('before-animate');
    intersectionObserve().observe(ref.current!);
  }, []);

  return <div ref={ref}>{children}</div>;
};

export default IntersectionObserve;
