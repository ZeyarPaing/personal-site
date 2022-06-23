import React, { useEffect, useRef } from 'react';

type blurProps = {
  size: {
    width: string;
    height: string;
  };
  color: string;
  position: {
    x: number;
    y: number;
  };
  range?: number;
};

const BlurredBox = ({ size, color, position, range = 1000 }: blurProps) => {
  let bRef = useRef();

  function animate() {
    let x = (Math.random() - 0.6) * range;
    let y = (Math.random() - 0.6) * range;
    // @ts-ignore
    bRef.current.style.transform = `translateX(${x}%) translateY(${y}%)`;
    // requestAnimationFrame(animate);
  }

  useEffect(() => {
    setInterval(animate, 4000);
  }, []);

  return (
    <div
      // @ts-ignore
      ref={bRef}
      className="basset absolute transition-transform ease-linear duration-[4s]"
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
