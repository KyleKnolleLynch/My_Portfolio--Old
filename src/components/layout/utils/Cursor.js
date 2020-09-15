import React, { useState, useEffect, useRef } from 'react';

const Cursor = () => {
  const dotRef = useRef(null);
  const circleRef = useRef(null);
  const [hoveredState, setHoveredState] = useState(false);

  useEffect(() => {
    const setCursor = (e) => {
      const { pageX, pageY } = e;
      const dotX = pageX - 3;
      const dotY = pageY - 3;
      const circleX = pageX - 10;
      const circleY = pageY - 10;
      dotRef.current.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`;
      dotRef.current.style.opacity = 1;
      circleRef.current.style.opacity = 1;
      hoveredState
        ? (circleRef.current.style.transform = `translate3d(${circleX}px, ${circleY}px, 0) scale(2.8)`)
        : (circleRef.current.style.transform = `translate3d(${circleX}px, ${circleY}px, 0)`);
    };

    document.addEventListener('mousemove', setCursor);
    return () => document.removeEventListener('mousemove', setCursor);
  }, [hoveredState]);

  useEffect(() => {
    document.querySelectorAll('.hover-elem').forEach((el) => {
      const setHovered = () => {
        setHoveredState(true);
      };

      el.addEventListener('mouseenter', setHovered);
      return () => el.removeEventListener('mouseenter', setHovered);
    });
  }, []);

  useEffect(() => {
    document.querySelectorAll('.hover-elem').forEach((el) => {
      const setNotHovered = () => {
        setHoveredState(false);
      };

      el.addEventListener('mouseleave', setNotHovered);
      return () => el.removeEventListener('mouseleave', setNotHovered);
    });
  }, []);

  return (
    <div className='cursor'>
      <div
        className='cursor__inner cursor__inner--circle'
        ref={circleRef}
      ></div>
      <div className='cursor__inner cursor__inner--dot' ref={dotRef}></div>
    </div>
  );
};

export default Cursor;
