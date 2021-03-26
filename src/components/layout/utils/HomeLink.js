import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CursorContext } from '../../../context/CursorContext'

const HomeLink = ({ classNames }) => {
  const { setHoveredState } = useContext(CursorContext)
  return (
    <article className={`home-link-bottom ${classNames}`}>
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
