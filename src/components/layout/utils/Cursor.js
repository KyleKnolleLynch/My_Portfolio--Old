import React, { useState, useEffect } from 'react';

const Cursor = () => {
  const [posOne, setPosOne] = useState({ y: 0, x: 0 });
  const [posTwo, setPosTwo] = useState({ y: 0, x: 0 });
  const [newOpacity, setNewOpacity] = useState(0);
  const [hoveredState, setHoveredState] = useState(false);

  const setHovered = () => {
    setHoveredState(true);
  };

  const setNotHovered = () => {
    setHoveredState(false);
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

  const styleHovered = {
    transform: `translate(${posOne.x}px, ${posOne.y}px) scale(2.8)`,
    opacity: newOpacity,
  };

  const styleNotHovered = {
    transform: `translate(${posOne.x}px, ${posOne.y}px)`,
    opacity: newOpacity,
  };

  return (
    <div className='cursor'>
      <div
        className='cursor__inner cursor__inner--circle'
        style={hoveredState ? styleHovered : styleNotHovered}
      ></div>
      <div
        className='cursor__inner cursor__inner--dot'
        style={{
          transform: `translate(${posTwo.x}px, ${posTwo.y}px)`,
          opacity: newOpacity,
        }}
      ></div>
    </div>
  );
};

export default Cursor;
