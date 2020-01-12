import React, { Fragment } from 'react';
import Navbar from '../layout/Navbar';
import inertiaDis from '../../assets/images/projects/inertia-display.png';

const Home = () => {
  return (
    <Fragment>
      <header className='home-header'>
        <Navbar title1='Kyle Lynch' title2='Profile' linkName='/profile' />
      </header>
      <main>
        <section className='section home-section-1'>
          <div className='projects-title'>
            Selected <br />
            <span>Projects</span>
            <span>(19-20)</span>
          </div>
          <img src={inertiaDis} alt="inertia-display" />
        </section>
      </main>
    </Fragment>
  );
};

export default Home;
