import React from 'react'
import githubSvgAlt from '../../assets/icons/githubLogo_alt.svg'

const ReactCard = ({ project, className }) => {
  const { img, title, projectLink, sourceLink } = project

  return (
    <div className={className}>
      <div className='react-card'>
        <div className='react-img-container'>
          <img src={img} alt='react-project-card' />
        </div>
        <div className='react-card-content'>
          <h2>{title}</h2>
          <a
            href={projectLink}
            className='hover-elem'
            target='_blank'
            rel='noopener noreferrer'
          >
            Live Demo
          </a>
          <a
            href={sourceLink}
            className='hover-elem'
            target='_blank'
            rel='noopener noreferrer'
          >
            Source Code{' '}
            <span>
              <img src={githubSvgAlt} alt='githubLogo_alt' />
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ReactCard
