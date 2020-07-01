import React, { Fragment, useState, useEffect } from 'react';
import VisibilitySensor from './utils/VisibilitySensor';
import { Link } from 'react-router-dom';
import { projectsData } from '../../projectsData';

const ProjectCards = () => {
  const projects = projectsData;
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const card = document.querySelector('.flip-container');
    const onTouchStart = () => {
      setFlipped(!flipped);
    };
    card.addEventListener('onTouchStart', onTouchStart, { passive: true });
    return () => card.removeEventListener('onTouchStart', onTouchStart);
  }, [flipped]);

  return (
    <Fragment>
      {projects.map((project) => (
        <VisibilitySensor partialVisibility key={project.id} once>
          {({ isVisible }) => (
            <article
              className={
                isVisible
                  ? 'slideDown enter project-card hover-elem'
                  : 'slideDown project-card hover-elem'
              }
            >
              <div
                onClick={() => setFlipped(!flipped)}
                className={flipped ? 'flip-container flip' : 'flip-container'}
                onMouseEnter={() => flipped && setFlipped(!flipped)}
              >
                <div className='flipper'>
                  <div className='card-front'>
                    <picture>
                      <source
                        media='(max-width: 768px)'
                        srcSet={project.imgVert}
                      />
                      <source media='(min-width: 768px)' srcSet={project.img} />
                      <img src={project.img} alt='project' />
                    </picture>
                    <div className='overlay'></div>
                    <div className='project-content'>
                      <h1>{project.title}</h1>
                      <br />
                      <h2>{project.subtitle}</h2>
                    </div>
                  </div>
                  <div className='card-back'>
                    <img src={project.icon} alt='icons' />
                    <h1>{project.title}</h1>
                    <br />
                    <p>{project.desc}</p>
                    <div className='card-btn-wrap'>
                      {project.link === '/vanillaProjects' ||
                      project.link === '/reactProjects' ? (
                        <Link to={project.link} className='card-btn'>
                          View Projects
                        </Link>
                      ) : (
                        <div>
                          <a href={project.link} className='card-btn'>
                            Live Demo
                          </a>
                          <a href={project.gitLink} className='card-btn'>
                            View Code
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          )}
        </VisibilitySensor>
      ))}
    </Fragment>
  );
};

export default ProjectCards;
