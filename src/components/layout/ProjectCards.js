import React, { useState, useEffect, useContext } from 'react'
import VisibilitySensor from './utils/VisibilitySensor'
import { Link } from 'react-router-dom'
import { projectsData } from '../../projectsData'
import { CursorContext } from '../../context/CursorContext'

const ProjectCards = () => {
  const [flipped, setFlipped] = useState(false)
  const { setHoveredState } = useContext(CursorContext)

  useEffect(() => {
    const card = document.querySelector('.flip-container')
    const onTouchStart = () => {
      setFlipped(!flipped)
    }
    card.addEventListener('onTouchStart', onTouchStart, { passive: true })
    return () => card.removeEventListener('onTouchStart', onTouchStart)
  }, [flipped])

  return (
    <>
      {projectsData.map(project => (
        <VisibilitySensor partialVisibility key={project.id} once>
          {({ isVisible }) => (
            <div className={`slideUp project-card ${isVisible && 'enter'}`}>
              <div
                onClick={() => setFlipped(!flipped)}
                className={flipped ? 'flip-container flip' : 'flip-container'}
                onMouseEnter={() => flipped && setFlipped(!flipped)}
              >
                <div className='flipper'>
                  <div
                    className='card-front'
                    onMouseEnter={() => setHoveredState(true)}
                    onMouseLeave={() => setHoveredState(false)}
                  >
                    <picture>
                      <source media='(min-width: 600px)' srcSet={project.img} />
                      <img
                        src={project.imgVert}
                        alt='project'
                        width='300'
                        height='480'
                      />
                    </picture>
                    <div className='overlay'></div>
                    <div className='project-content'>
                      <h1>{project.title}</h1>
                      <br />
                      <h2>{project.subtitle}</h2>
                    </div>
                  </div>
                  <div className='card-back'>
                    <img
                      src={project.icon}
                      alt='icons'
                      width='50'
                      height='50'
                    />
                    <h1>{project.title}</h1>
                    <br />
                    <div>
                      <p>{project.desc}</p>
                      {project.summary && (
                        <p>
                          Take a minute to read my full project{' '}
                          <span>
                            <Link
                              to={project.summary}
                              className='summary-btn'
                              onMouseEnter={() => setHoveredState(true)}
                              onMouseLeave={() => setHoveredState(false)}
                            >
                              Summary
                            </Link>
                          </span>
                        </p>
                      )}
                    </div>
                    <div className='card-btn-wrap'>
                      {project.localLink ? (
                        <Link
                          to={project.localLink}
                          className='card-btn'
                          onMouseEnter={() => setHoveredState(true)}
                          onMouseLeave={() => setHoveredState(false)}
                        >
                          View Projects
                        </Link>
                      ) : (
                        <div>
                          <a
                            href={project.link}
                            className='card-btn'
                            onMouseEnter={() => setHoveredState(true)}
                            onMouseLeave={() => setHoveredState(false)}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            Demo
                          </a>
                          <a
                            href={project.gitLink}
                            className='card-btn'
                            onMouseEnter={() => setHoveredState(true)}
                            onMouseLeave={() => setHoveredState(false)}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            Code
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </VisibilitySensor>
      ))}
    </>
  )
}

export default ProjectCards
