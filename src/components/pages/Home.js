import React, { Fragment } from 'react';
import Navbar from '../layout/Navbar';

const Home = () => {
  return (
    <Fragment>
      <header className='home-header'>
        <Navbar title1='Kyle Lynch' title2='Profile' linkName='/profile' />
      </header>
      <main>
        <section className='section home-section-1'>Hello from Home!</section>
      </main>
    </Fragment>
  );
};

export default Home;
