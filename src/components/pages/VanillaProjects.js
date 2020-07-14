import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { vanillaData } from '../../vanillaData';
import ScrollDown from '../layout/utils/ScrollDown';
import VanillaCard from '../layout/VanillaCard';
import HomeLink from '../layout/utils/HomeLink';
import Copyright from '../layout/Copyright';
import Cursor from '../layout/utils/Cursor';

const VanillaProjects = () => {
  return (
    <div>
      <main className='vanilla-main'>
        <section id='vanilla-section-1'>
          <h1>Vanilla Javascript Projects</h1>
          <VisibilitySensor offset={{ bottom: 100, top: -400 }}>
            {({ isVisible }) => (
              <ScrollDown fill='#000' isVisible={isVisible} />
            )}
          </VisibilitySensor>
        </section>
        <section id='vanilla-section-2'>
          <div className='vanilla-grid'>
            {vanillaData.map((project) => (
              <VanillaCard project={project} key={project.title} />
            ))}
          </div>
        </section>
        <HomeLink />
        <Copyright color='#000' />
      </main>
      <Cursor />
    </div>
  );
};

export default VanillaProjects;
