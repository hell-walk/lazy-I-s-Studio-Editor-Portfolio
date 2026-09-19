/* Ported from the developer portfolio's components/ui/GradientBg.tsx
   (Aceternity background gradient animation). The blob keyframes and the
   gooey filter live in index.css under ".gbg". */
import React, { useEffect, useRef, useState } from "react";

export const BackgroundGradientAnimation = ({ children, className = "", interactive = true }) => {
  const pointer = useRef(null);
  const cur = useRef({ x: 0, y: 0 });
  const tgt = useRef({ x: 0, y: 0 });
  const [safari, setSafari] = useState(false);

  useEffect(() => {
    setSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  useEffect(() => {
    if (!interactive) return;
    let raf;
    const move = () => {
      cur.current.x += (tgt.current.x - cur.current.x) / 20;
      cur.current.y += (tgt.current.y - cur.current.y) / 20;
      if (pointer.current) {
        pointer.current.style.transform = `translate(${Math.round(cur.current.x)}px, ${Math.round(cur.current.y)}px)`;
      }
      raf = requestAnimationFrame(move);
    };
    raf = requestAnimationFrame(move);
    return () => cancelAnimationFrame(raf);
  }, [interactive]);

  const onMove = (e) => {
    if (!pointer.current) return;
    const r = pointer.current.getBoundingClientRect();
    tgt.current = { x: e.clientX - r.left, y: e.clientY - r.top };
  };

  return (
    <div className='gbg' onMouseMove={interactive ? onMove : undefined}>
      <svg className='hidden' aria-hidden='true'>
        <defs>
          <filter id='blurMe'>
            <feGaussianBlur in='SourceGraphic' stdDeviation='10' result='blur' />
            <feColorMatrix in='blur' mode='matrix' values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8' result='goo' />
            <feBlend in='SourceGraphic' in2='goo' />
          </filter>
        </defs>
      </svg>
      <div className={`gbg-blobs ${safari ? "gbg-safari" : ""}`}>
        <div className='gbg-b gbg-b1' />
        <div className='gbg-b gbg-b2' />
        <div className='gbg-b gbg-b3' />
        <div className='gbg-b gbg-b4' />
        <div className='gbg-b gbg-b5' />
        {interactive && <div ref={pointer} className='gbg-b gbg-pointer' />}
      </div>
      <div className={`gbg-content ${className}`}>{children}</div>
    </div>
  );
};

export default BackgroundGradientAnimation;
