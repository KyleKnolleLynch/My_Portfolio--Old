import React from 'react';

const ReactCard = ({ project }) => {
  const { img, title, projectLink, sourceLink } = project;

  return (
    <div className='react-card-container'>
      <div className='react-card'>
        <div className='react-img-container'>
          <img src={img} alt='react-project-card' />
        </div>
        <div className='react-card-content'>
          <h2>{title}</h2>
          <a href={projectLink} className='hover-elem'>
            View Project
          </a>
          <a href={sourceLink} className='hover-elem'>
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReactCard;
