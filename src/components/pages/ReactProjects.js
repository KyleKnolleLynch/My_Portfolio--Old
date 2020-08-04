import React from 'react';
import VisibilitySensor from '../layout/utils/VisibilitySensor';
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
              <VisibilitySensor partialVisibility once key={project.id}>
                {({ isVisible }) => (
                  <ReactCard
                    project={project}
                    className={
                      isVisible
                        ? 'slideUp enter react-card-container'
                        : 'slideUp react-card-container'
                    }
                  />
                )}
              </VisibilitySensor>
            ))}
          </div>
        </section>
        <HomeLink />
        <Copyright color='#dfdfdf' />
      </main>
      <Cursor />
    </div>
  );
};

export default Home;
