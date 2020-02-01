import React, { Fragment } from 'react';
import VisibilitySensor from './utils/VisibilitySensor';
import { projectsData } from '../../data';

const ProjectCards = () => {
  const projects = projectsData;

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
              <a href={project.link}>
                <img src={project.img} alt='projects' />
                <div className='overlay'></div>
                <div className='project-content'>
                  <h1>{project.title}</h1>
                  <br />
                  <h2>{project.subtitle}</h2>
                </div>
              </a>
            </article>
          )}
        </VisibilitySensor>
      ))}
    </Fragment>
  );
};

export default ProjectCards;
