import React from 'react';

const Cursor = () => {
  const cursor1 = document.querySelector('.cursor__inner--circle');
  const cursor2 = document.querySelector('.cursor__inner--dot');

  if (cursor1 && cursor2) {
    document.addEventListener('mousemove', e => {
      cursor1.setAttribute(
        'style',
        `top:${e.pageY - 10}px; left:${e.pageX - 10}px; opacity: 1`
      );
      cursor2.setAttribute(
        'style',
        `top:${e.pageY - 3}px; left:${e.pageX - 3}px; opacity: 1`
      );
    });
  }

  document.querySelectorAll('a').forEach(e => {
    e.addEventListener('mouseenter', () => (cursor1.className += ' hovered'));
  });

  document.querySelectorAll('a').forEach(e => {
    e.addEventListener(
      'mouseleave',
      () => (cursor1.className = 'cursor__inner cursor__inner--circle')
    );
  });

  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener(
      'mouseenter',
      () => (cursor1.className += ' hovered')
    );
  });

  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener(
      'mouseleave',
      () => (cursor1.className = 'cursor__inner cursor__inner--circle')
    );
  });

  return (
    <div className='cursor'>
      <div className='cursor__inner cursor__inner--circle'></div>
      <div className='cursor__inner cursor__inner--dot'></div>
    </div>
  );
};

export default Cursor;
