import React from 'react';
import { Link } from 'react-router-dom';
import VisibilitySensor from 'react-visibility-sensor';
import Navbar from '../layout/Navbar';
import ProjectCards from '../layout/ProjectCards';
import Footer from '../layout/Footer';
import inertiaDis from '../../assets/images/inertia-display.png';

const Home = () => {
  return (
    <div>
      <header>
        <Navbar title1='Kyle Lynch' title2='Profile' linkName='/profile' />
      </header>
      <main>
        <section className='section home-section-1'>
          <div className='projects-title'>
            Selected
            <br />
            <p>Work</p>
          </div>
          <img src={inertiaDis} alt='inertia-display' />
          <VisibilitySensor offset={{ bottom: 100, top: -400 }}>
            {({ isVisible }) => (
              <div className={isVisible ? 'scroll-div hidden' : 'scroll-div'}>
                <p>SCROLL</p>
                <p className='scroll-vert'></p>
              </div>
            )}
          </VisibilitySensor>
        </section>
        <section className='section home-section-2'>
          <ProjectCards />
        </section>
        <article className='profile-link-bottom'>
          <span>Visit</span>
          <Link to='/profile'>Profile</Link>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
