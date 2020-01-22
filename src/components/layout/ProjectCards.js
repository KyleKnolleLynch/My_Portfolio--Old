import React, { Fragment } from 'react';
// import { Spring } from 'react-spring/renderprops';
import VisibilitySensor from './VisibilitySensor';
import { projectsData } from '../../data';

const ProjectCards = () => {
  const projects = projectsData;

  return (
    <Fragment>
      {projects.map(project => (
        <VisibilitySensor partialVisibility key={project.id} once>
          {({ isVisible }) => (
            <div
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
                  <h3>{project.subtitle}</h3>
                </div>
              </a>
            </div>
          )}
        </VisibilitySensor>
      ))}
    </Fragment>
  );
};

export default ProjectCards;
