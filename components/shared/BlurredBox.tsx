import React, { useEffect, useRef } from 'react';
import { blurBoxProps } from 'types';

const BlurredBox = ({ size, color, position, range = 1000 }: blurBoxProps) => {
  let bRef = useRef<HTMLDivElement>(null);

  function animate() {
    let x = (Math.random() - 0.6) * range;
    let y = (Math.random() - 0.6) * range;
    if (bRef.current) {
      bRef.current.style.transform = `translateX(${x}%) translateY(${y}%)`;
    }
  }

  useEffect(() => {
    let interval = setInterval(animate, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={bRef}
      className="basset absolute transition-transform ease-linear duration-[4s] z-20"
      style={{
        filter: `blur(calc(${size.width} * 1.1))`,
        backgroundColor: color,
        top: position.y + '%',
        left: position.x + '%',
        width: size.width,
        height: size.height,
      }}
    />
  );
};

export default BlurredBox;
