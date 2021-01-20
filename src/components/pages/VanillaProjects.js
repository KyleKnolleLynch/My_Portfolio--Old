import React, { useState, useEffect } from 'react';
import VisibilitySensor from '../layout/utils/VisibilitySensor';
import { vanillaData } from '../../vanillaData';
import ScrollDown from '../layout/utils/ScrollDown';
import VanillaCard from '../layout/VanillaCard';
import HomeLink from '../layout/utils/HomeLink';
import Copyright from '../layout/Copyright';
import Cursor from '../layout/utils/Cursor';

const VanillaProjects = () => {
  const [fill, setFill] = useState('#454545');

  useEffect(() => {
    const changeColor = () => {
      window.innerWidth > 600 ? setFill('#454545') : setFill('#fff');
    };
    changeColor();
    window.addEventListener('resize', changeColor);
    return () => window.removeEventListener('resize', changeColor);
  }, []);

  return (
    <div>
      <main className='vanilla-main'>
        <section className='vanilla-section-1'>
          <h1>Vanilla Javascript Projects</h1>
          <VisibilitySensor offset={{ bottom: 100, top: -400 }}>
            {({ isVisible }) => (
              <ScrollDown fill={fill} isVisible={isVisible} />
            )}
          </VisibilitySensor>
        </section>
        <section className='vanilla-section-2'>
          <div className='vanilla-grid'>
            {vanillaData.map((project) => (
              <VanillaCard project={project} key={project.title} />
            ))}
          </div>
        </section>
        <HomeLink />
        <Copyright color='#454545' />
      </main>
      <Cursor />
    </div>
  );
};

export default VanillaProjects;
