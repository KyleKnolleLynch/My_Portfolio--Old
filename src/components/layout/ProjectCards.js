import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';

const ProjectCards = () => {
  return (
    <Fragment>
      <Fade bottom duration={2000}>
        <div className='project-card project-1'>
          <div className='project-content'>
            <div></div>
            <h1>Inertia</h1>
            <h3>Vanilla Javascript</h3>
          </div>
        </div>
      </Fade>
      <Fade bottom duration={3000}>
        <div className='project-card project-2'>
          <div className='project-content'>
            <div></div>
            <h1>Online Cart</h1>
            <h3>
              React
            </h3>
          </div>
        </div>
      </Fade>
      <Fade left duration={3000}>
        <div className='project-card project-3'>
          <div className='project-content'>
            <div></div>
            <h1>GitHub Searcher</h1>
            <h3>
              React
            </h3>
          </div>
        </div>
      </Fade>
      <Fade right duration={3000}>
        <div className='project-card project-4'>
          <div className='project-content'>
            <div></div>
            <h1>Resort Rentals</h1>
            <h3>React</h3>
          </div>
        </div>
      </Fade>
      <Fade top duration={3000}>
        <div className='project-card project-5'>
          <div className='project-content'>
            <div></div>
            <h2>Birder's Journal</h2>
            <h3>
              Javasctipt
            </h3>
          </div>
        </div>
      </Fade>
    </Fragment>
  );
};

export default ProjectCards;
