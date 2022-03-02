import React, { useEffect, useRef, useContext } from 'react'
import { CursorContext } from '../../../context/CursorContext'

const Cursor = () => {
  const { hoveredState } = useContext(CursorContext)
  const dotRef = useRef(null)
  const circleRef = useRef(null)

  useEffect(() => {
    const setCursor = e => {
      const { pageX, pageY } = e
      const dotX = pageX - 3
      const dotY = pageY - 3
      const circleX = pageX - 10
      const circleY = pageY - 10
      dotRef.current.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`
      dotRef.current.style.opacity = 1
      circleRef.current.style.opacity = 1
      hoveredState
        ? (circleRef.current.style.transform = `translate3d(${circleX}px, ${circleY}px, 0) scale(2.8)`)
        : (circleRef.current.style.transform = `translate3d(${circleX}px, ${circleY}px, 0)`)
    }

    window.addEventListener('mousemove', setCursor)
    return () => window.removeEventListener('mousemove', setCursor)
  }, [hoveredState])

  return (
    <div className='cursor'>
      <div
        className='cursor__inner cursor__inner--circle'
        ref={circleRef}
      ></div>
      <div className='cursor__inner cursor__inner--dot' ref={dotRef}></div>
    </div>
  )
}

export default Cursor
