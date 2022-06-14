import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CursorContext } from '../../context/CursorContext'
import { FeatherDownload } from '../../assets/svgIcons'

const Navbar = ({
  title1,
  title2,
  titleDisabled,
  noDisplay,
  linkName,
  target,
}) => {
  const { setHoveredState } = useContext(CursorContext)
  const resumeLink = '/KYLE_LYNCH_RESUME.pdf'
  return (
    <nav>
      <ul>
        <li>
          <span
            className='link-disabled'
            onMouseMove={() => setHoveredState(false)}
          >
            {titleDisabled}
          </span>
          <Link
            to='/'
            className={`nav-link ${noDisplay}`}
            onMouseEnter={() => setHoveredState(true)}
            onMouseLeave={() => setHoveredState(false)}
          >
            <span className='link-inner'>{title1}</span>
            <div className='link-inner-top'>{title1}</div>
            <div className='link-inner-bottom'>{title1}</div>
          </Link>
        </li>
        <li>
          <Link
            to={linkName}
            className='nav-link'
            onMouseEnter={() => setHoveredState(true)}
            onMouseLeave={() => setHoveredState(false)}
            target={target}
            download
          >
            <span className='link-inner'>
              {title2}
              {linkName === resumeLink && (
                <span className='feather-download'>
                  <FeatherDownload />
                </span>
              )}
            </span>
            <div className='link-inner-top'>
              {title2}
              {linkName === resumeLink && (
                <span className='feather-download'>
                  <FeatherDownload />
                </span>
              )}
            </div>
            <div className='link-inner-bottom'>
              {title2}
              {linkName === resumeLink && (
                <span className='feather-download'>
                  <FeatherDownload />
                </span>
              )}
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
