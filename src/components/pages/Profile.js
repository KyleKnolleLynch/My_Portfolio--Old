import React from 'react';
import Navbar from '../layout/Navbar';

const About = () => {
  return (
    <div>
      <header>
        <Navbar title1='Home' title2='other' linkName='/other' />
      </header>
      <main>
        <section className='section profile-section-1'></section>
      </main>
    </div>
  );
};

export default About;
