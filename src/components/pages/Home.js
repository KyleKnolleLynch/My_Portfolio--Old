import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import VisibilitySensor from 'react-visibility-sensor';
import Navbar from '../layout/Navbar';
import ProjectCards from '../layout/ProjectCards';
import Copyright from '../layout/Copyright';
import Footer from '../layout/Footer';
import Cursor from '../layout/utils/Cursor';
import inertiaVert from '../../assets/images/projects/inertia-vert-sm.webp';
import toursVert from '../../assets/images/projects/toursVert.webp';
import glitchLog from '../../assets/images/projects/glitchLog.webp';
import arrowSvg from '../../assets/icons/arrow-down-right.svg';

const Home = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const parallax = (e) => {
      const displays = document.querySelectorAll('.display');
      const displayStyle = {
        x: (e.clientX * 20) / 1000,
        y: (e.clientY * 20) / 1000,
      };
      setPos(displayStyle);
      displays.forEach((display) => {
        if (window.scrollY < 1000) {
          display.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
        }
      });
    };

    document.addEventListener('mousemove', parallax);
    return () => document.removeEventListener('mousemove', parallax);
  }, [pos.x, pos.y]);

  return (
    <div>
      <header className='home-header'>
        <Navbar
          titleDisabled='KYLE LYNCH'
          title2='PROFILE'
          linkName='/profile'
        />
      </header>
      <main>
        <section className='home-section-1'>
          <div className='projects-title'>
            Selected
            <br />
            <p>Work</p>
          </div>

          <div className='display img-dis-1'>
            <img src={inertiaVert} alt='inertia-display' />
          </div>
          <div className='display img-dis-2'>
            <img src={glitchLog} alt='glitchLog-display' />
          </div>
          <div className='display img-dis-3'>
            <img src={toursVert} alt='tours-display' />
          </div>

          <VisibilitySensor offset={{ bottom: 100, top: -400 }}>
            {({ isVisible }) => (
              <div className={isVisible ? 'scroll-div hidden' : 'scroll-div'}>
                <p>SCROLL</p>
                <p className='scroll-vert'></p>
              </div>
            )}
          </VisibilitySensor>
        </section>
        <section className='home-section-2'>
          <ProjectCards />
        </section>
        <article className='profile-link-bottom'>
          <span>
            Visit <img src={arrowSvg} alt='down right svg' />
          </span>
          <br />
          <Link to='/profile' className='hover-elem'>
            Profile
          </Link>
        </article>
        <Copyright />
      </main>
      <Footer />
      <Cursor />
    </div>
  );
};

export default Home;
