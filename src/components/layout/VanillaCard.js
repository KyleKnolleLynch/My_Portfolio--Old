import React, { useContext } from 'react'
import { CursorContext } from '../../context/CursorContext'
import { Github } from '../../assets/svgIcons'

const VanillaCard = ({
  project: { img, demoLink, title, desc, sourceLink },
}) => {
  const { setHoveredState } = useContext(CursorContext)
  return (
    <div className='vanilla-card'>
      <div className='vanilla-img-container'>
        <img src={img} alt='vanilla-projects' width='400' height='350' />
      </div>
      <div className='vanilla-card-content'>
        <h2>{title}</h2>
        <p>{desc}</p>
        <div>
          <a
            href={demoLink}
            onMouseEnter={() => setHoveredState(true)}
            onMouseLeave={() => setHoveredState(false)}
            target='_blank'
            rel='noopener noreferrer'
          >
            Demo
          </a>
          <a
            href={sourceLink}
            onMouseEnter={() => setHoveredState(true)}
            onMouseLeave={() => setHoveredState(false)}
            target='_blank'
            rel='noopener noreferrer'
          >
            Code{' '}
            <span>
              <Github fill='#454545' />
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default VanillaCard
