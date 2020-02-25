import React, { Fragment, useState } from 'react';
import VisibilitySensor from './utils/VisibilitySensor';
import { projectsData } from '../../data';

const ProjectCards = () => {
  const projects = projectsData;
  const [flipped, setFlipped] = useState(false);

  return (
    <Fragment>
      {projects.map(project => (
        <VisibilitySensor partialVisibility key={project.id} once>
          {({ isVisible }) => (
            <article
              className={
                isVisible
                  ? 'slideDown enter project-card'
                  : 'slideDown project-card'
              }
            >
              <div
                onClick={() => setFlipped(!flipped)}
                onTouchStart={() => setFlipped(!flipped)}
                className={flipped ? 'flip-container flip' : 'flip-container'}
              >
                <div className='flipper'>
                  <div className='card-front'>
                    <img src={project.img} alt='projects' />
                    <div className='overlay'></div>
                    <div className='project-content'>
                      <h1>{project.title}</h1>
                      <br />
                      <h2>{project.subtitle}</h2>
                    </div>
                  </div>
                  <div className='card-back'>
                    <h1>{project.title}</h1>
                    <br />
                    <p>{project.desc}</p>
                    <br />
                    <a href={project.link} className='card-btn'>
                      View Project
                    </a>
                    <a href={project.gitLink} className='card-btn'>
                      View Code
                    </a>
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
