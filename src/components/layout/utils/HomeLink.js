import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CursorContext } from '../../../context/CursorContext'

const HomeLink = () => {
  const { setHoveredState } = useContext(CursorContext)
  return (
    <article className='home-link-bottom'>
      <Link
        to='/'
        onMouseEnter={() => setHoveredState(true)}
        onMouseLeave={() => setHoveredState(false)}
      >
        Go Back
      </Link>
    </article>
  )
}

export default HomeLink
