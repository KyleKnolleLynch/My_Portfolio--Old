import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import ProjectCards from '../layout/ProjectCards';
import Footer from '../layout/Footer';
import inertiaDis from '../../assets/images/inertia-display.png';

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
          <img src={inertiaDis} alt='inertia-display' />
        </section>
        <section className='section home-section-2'>
          <ProjectCards />
        </section>
        <article className='profile-link-bottom'>
          <Link to='/profile'>Profile</Link>
        </article>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Home;
