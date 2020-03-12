import React, { useState, useEffect } from 'react';

const Cursor = () => {
  const cursor1 = document.querySelector('.cursor__inner--circle');
  const cursor2 = document.querySelector('.cursor__inner--dot');
  const [posOne, setPosOne] = useState({ y: 0, x: 0 });
  const [posTwo, setPosTwo] = useState({ y: 0, x: 0 });
  const [hoveredState, setHoveredState] = useState(
    'cursor__inner cursor__inner--circle'
  );

  const setHovered = () => {
    setHoveredState(prevState => (prevState += ' hovered'));
  };

  const setNotHovered = () => {
    setHoveredState('cursor__inner cursor__inner--circle');
  };

  useEffect(() => {
    const setCursor = e => {
      setPosOne({ y: e.pageY - 10, x: e.pageX - 10 });
      setPosTwo({ y: e.pageY - 3, x: e.pageX - 3 });
      cursor1.setAttribute(
        'style',
        `top:${posOne.y}px; left:${posOne.x}px; opacity: 1`
      );
      cursor2.setAttribute(
        'style',
        `top:${posTwo.y}px; left:${posTwo.x}px; opacity: 1`
      );
    };

    document.addEventListener('mousemove', setCursor);
    return () => document.removeEventListener('mousemove', setCursor);
  }, [cursor1, cursor2, posOne.y, posOne.x, posTwo.y, posTwo.x]);

  useEffect(() => {
    document.querySelectorAll('a').forEach(link => {
      link.addEventListener('mouseenter', setHovered);
      return () => link.removeEventListener('mouseenter', setHovered);
    });
  }, []);

  useEffect(() => {
    document.querySelectorAll('a').forEach(link => {
      link.addEventListener('mouseleave', setNotHovered);
      return () => link.removeEventListener('mouseleave', setNotHovered);
    });
  }, []);

  useEffect(() => {
    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('mouseenter', setHovered);
      return () => card.removeEventListener('mouseenter', setHovered);
    });
  }, []);

  useEffect(() => {
    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('mouseleave', setNotHovered);
      return () => card.removeEventListener('mouseleave', setNotHovered);
    });
  }, []);

  return (
    <div className='cursor'>
      <div className={hoveredState}></div>
      <div className='cursor__inner cursor__inner--dot'></div>
    </div>
  );
};

export default Cursor;
