import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { reactData } from '../../reactData';
import ReactCard from '../layout/ReactCard';
import reactSvg from '../../assets/icons/react.svg';
import ScrollDown from '../layout/utils/ScrollDown';
import HomeLink from '../layout/utils/HomeLink';
import Copyright from '../layout/Copyright';
import Cursor from '../layout/utils/Cursor';

const Home = () => {
  return (
    <div>
      <main className='react-main'>
        <section id='react-section-1'>
          <img src={reactSvg} alt='react_logo' className='react-logo-svg' />
          <h1>React Projects</h1>
          <VisibilitySensor offset={{ bottom: 100, top: -400 }}>
            {({ isVisible }) => (
              <ScrollDown fill='#dfdfdf' isVisible={isVisible} />
            )}
          </VisibilitySensor>
        </section>
        <section id='react-section-2'>
          <div className='react-project-grid'>
            {reactData.map((project) => (
              <ReactCard project={project} key={project.id} />
            ))}
          </div>
        </section>
        <HomeLink customClass='.home-link-reactPage' />
        <Copyright />
      </main>
      <Cursor />
    </div>
  );
};

export default Home;
