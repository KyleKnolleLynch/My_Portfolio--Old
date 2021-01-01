import React from 'react'
import githubSvg from '../../assets/icons/githubLogo.svg'

const VanillaCard = ({
  project: { img, demoLink, title, desc, sourceLink },
}) => {
  return (
    <div className='vanilla-card'>
      <div className='vanilla-img-div'>
        <img src={img} alt='vanilla-projects' />
        <span>
          <a
            href={demoLink}
            className='hover-elem'
            target='_blank'
            rel='noopener noreferrer'
          >
            Demo
          </a>
        </span>
      </div>
      <div className='vanilla-sub-caption'>
        <h4>{title}</h4>
        <p>{desc}</p>
        <div>
          <img src={githubSvg} alt='githubLogo' />
          <a
            href={sourceLink}
            className='hover-elem'
            target='_blank'
            rel='noopener noreferrer'
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  )
}

export default VanillaCard
