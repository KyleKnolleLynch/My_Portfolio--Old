import React, { useContext } from 'react'
import { CursorContext } from '../../context/CursorContext'

const Footer = () => {
  const { setHoveredState } = useContext(CursorContext)
  return (
    <footer>
      <ul>
        <li>
          <a
            href='https://github.com/KyleKnolleLynch'
            target='_blank'
            rel='noopener noreferrer'
            className='nav-link'
            onMouseEnter={() => setHoveredState(true)}
            onMouseLeave={() => setHoveredState(false)}
          >
            <span className='link-inner'>GH</span>
            <div className='link-inner-top'>GH</div>
            <div className='link-inner-bottom'>GH</div>
          </a>
        </li>
        {/* <li>
          <a
          
            href='https://github.com/KyleKnolleLynch'
            target='_blank'
            rel='noopener noreferrer'
            className='nav-link'
            onMouseEnter={() => setHoveredState(true)}
            onMouseLeave={() => setHoveredState(false)}
          >
            <span className='link-inner'>TW</span>
            <div className='link-inner-top'>TW</div>
            <div className='link-inner-bottom'>TW</div>
          </a>
        </li> */}
        <li>
          <a
            href='https://codepen.io/kyleknollelynch'
            target='_blank'
            rel='noopener noreferrer'
            className='nav-link'
            onMouseEnter={() => setHoveredState(true)}
            onMouseLeave={() => setHoveredState(false)}
          >
            <span className='link-inner'>CP</span>
            <div className='link-inner-top'>CP</div>
            <div className='link-inner-bottom'>CP</div>
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
