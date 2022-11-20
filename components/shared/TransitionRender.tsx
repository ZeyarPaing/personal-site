import { FC, ReactNode, useEffect, useRef } from 'react';

type TransitionWrapperProps = {
  children: ReactNode;
  render: boolean;
  className?: string;
  renderClassName: string;
  hiddenClassName: string;
};

const TransitionRender: FC<TransitionWrapperProps> = function ({
  children,
  render,
  className,
  renderClassName,
  hiddenClassName,
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hideElem = () => {
      if (!render) {
        ref.current?.classList.add('hidden');
        ref.current?.classList.remove('block');
      }
    };
    if (ref.current) {
      if (render) {
        ref.current.classList.remove('hidden');
        ref.current.classList.add('block');
        requestAnimationFrame(() => {
          ref.current?.classList.add(...renderClassName.split(' '));
        });
      } else {
        ref.current.classList.remove(...renderClassName.split(' '));
        ref.current.classList.add(...hiddenClassName.split(' '));
        requestAnimationFrame(hideElem);
      }
      // ref.current.addEventListener('transitionend', hideElem, {
      //   capture: false,
      //   once: true,
      //   passive: false,
      // });
    }
  }, [render]);

  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  );
};

export default TransitionRender;
