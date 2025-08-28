import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
        cursorRef.current.style.opacity = 1;
      }
    };
    const hideCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = 0;
      }
    };
    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', hideCursor);
    document.addEventListener('mouseenter', moveCursor);
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', hideCursor);
      document.removeEventListener('mouseenter', moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '16px',
        height: '16px',
        borderRadius: '50%',
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        background: 'rgba(255,255,255,0.85)',
        mixBlendMode: 'difference',
        zIndex: 9999,
        transition: 'background 0.2s, transform 0.1s, opacity 0.2s',
        opacity: 1,
      }}
    />
  );
};

export default CustomCursor;
