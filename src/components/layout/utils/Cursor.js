import React, { useState, useEffect } from 'react';

const Cursor = () => {
  const cursor1 = document.querySelector('.cursor__inner--circle');
  const cursor2 = document.querySelector('.cursor__inner--dot');
  const [hoveredState, setHoveredState] = useState(
    'cursor__inner cursor__inner--circle'
  );

  useEffect(() => {
    const setCursor = e => {
      cursor1.setAttribute(
        'style',
        `top:${e.pageY - 10}px; left:${e.pageX - 10}px; opacity: 1`
      );
      cursor2.setAttribute(
        'style',
        `top:${e.pageY - 3}px; left:${e.pageX - 3}px; opacity: 1`
      );
    };

    document.addEventListener('mousemove', setCursor);
    return () => document.removeEventListener('mousemove', setCursor);
  }, [cursor1, cursor2]);

  useEffect(() => {
    const setHovered = () => {
      setHoveredState(prevState => (prevState += ' hovered'));
    };
    document.querySelectorAll('a').forEach(link => {
      link.addEventListener('mouseenter', setHovered);
      return () => link.removeEventListener('mouseenter', setHovered);
    });
  }, []);

  useEffect(() => {
    const setNotHovered = () => {
      setHoveredState('cursor__inner cursor__inner--circle');
    };
    document.querySelectorAll('a').forEach(link => {
      link.addEventListener('mouseleave', setNotHovered);
      return () => link.removeEventListener('mouseleave', setNotHovered);
    });
  }, []);

  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener(
      'mouseenter',
      () => (cursor1.className += ' hovered')
    );
    card.addEventListener(
      'mouseleave',
      () => (cursor1.className = 'cursor__inner cursor__inner--circle')
    );
  });

  return (
    <div className='cursor'>
      <div className={hoveredState}></div>
      <div className='cursor__inner cursor__inner--dot'></div>
    </div>
  );
};

export default Cursor;
