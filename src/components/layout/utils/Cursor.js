import React, { useState, useEffect } from 'react';

const Cursor = () => {
  const [posOne, setPosOne] = useState({ y: 0, x: 0 });
  const [posTwo, setPosTwo] = useState({ y: 0, x: 0 });
  const [newOpacity, setNewOpacity] = useState(0);
  const [hoveredState, setHoveredState] = useState(
    'cursor__inner cursor__inner--circle'
  );

  const setHovered = () => {
    setHoveredState((prevState) => (prevState += ' hovered'));
  };

  const setNotHovered = () => {
    setHoveredState('cursor__inner cursor__inner--circle');
  };

  useEffect(() => {
    const setCursor = (e) => {
      const targetOneY = e.pageY - 10;
      const targetOneX = e.pageX - 10;
      const targetTwoY = e.pageY - 3;
      const targetTwoX = e.pageX - 3;
      setPosOne({ y: targetOneY, x: targetOneX });
      setPosTwo({ y: targetTwoY, x: targetTwoX });
      setNewOpacity(1);
    };

    document.addEventListener('mousemove', setCursor);
    return () => document.removeEventListener('mousemove', setCursor);
  }, []);

  useEffect(() => {
    document.querySelectorAll('.hover-elem').forEach((el) => {
      el.addEventListener('mouseenter', setHovered);
      return () => el.removeEventListener('mouseenter', setHovered);
    });
  }, []);

  useEffect(() => {
    document.querySelectorAll('.hover-elem').forEach((el) => {
      el.addEventListener('mouseleave', setNotHovered);
      return () => el.removeEventListener('mouseleave', setNotHovered);
    });
  }, []);

  return (
    <div className='cursor'>
      <div
        className={hoveredState}
        style={{
          top: `${posOne.y}px`,
          left: `${posOne.x}px`,
          opacity: newOpacity,
        }}
      ></div>
      <div
        className='cursor__inner cursor__inner--dot'
        style={{
          top: `${posTwo.y}px`,
          left: `${posTwo.x}px`,
          opacity: newOpacity,
        }}
      ></div>
    </div>
  );
};

export default Cursor;
