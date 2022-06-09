import React, { useEffect, useRef } from 'react';

type interSectionProps = {
  children: React.ReactNode;
};
const IntersectionObserve = ({ children }: interSectionProps) => {
  let ref = useRef();

  const intersectionObserve: () => IntersectionObserver = () =>
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        } else {
          entry.target.classList.remove('animated');
        }
      });
    });

  useEffect(() => {
    // @ts-ignore
    ref.current.classList.add('before-animate');
    // @ts-ignore
    intersectionObserve().observe(ref.current);
  }, []);
  // @ts-ignore
  return <div ref={ref}>{children}</div>;
};

export default IntersectionObserve;
