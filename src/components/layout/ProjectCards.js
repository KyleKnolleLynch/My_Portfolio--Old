import React, { Fragment, useState } from 'react';
// import { Spring } from 'react-spring/renderprops';
import VisibilitySensor from 'react-visibility-sensor';
import { projectsData } from '../../data';

const ProjectCards = () => {
  const [projects, setProjects] = useState(projectsData);

  return (
    <Fragment>
      {projects.map(project => (
        <VisibilitySensor partialVisibility key={project.id}>
          {({ isVisible }) => (
            <div
              className={
                isVisible
                  ? 'slideDown enter project-card'
                  : 'slideDown project-card'
              }
            >
              <img src={project.img} alt='projects' />
              {/* <div className='project-content'>
                <div></div>
                <h2>{project.title}</h2>
                <h3>{project.subtitle}</h3>
              </div> */}
            </div>
          )}
        </VisibilitySensor>
      ))}
    </Fragment>
  );
};

export default ProjectCards;
