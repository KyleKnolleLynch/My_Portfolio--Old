import React, { useContext } from 'react'
import { CursorContext } from '../../context/CursorContext'
import { Github } from '../../assets/svgIcons'

const ReactCard = ({ project, className }) => {
  const { img, title, projectLink, sourceLink } = project
  const { setHoveredState } = useContext(CursorContext)

  return (
    <div className={className}>
      <div className='react-card'>
        <div className='react-img-container'>
          <img src={img} alt='react-project-card' width='250' height='250' />
        </div>
        <div className='react-card-content'>
          <h2>{title}</h2>
          <div>
            <a
              href={projectLink}
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
                <Github fill='#dfdfdf' />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReactCard
