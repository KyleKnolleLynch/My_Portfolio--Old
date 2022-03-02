import React from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

const NotFound = () => {
  return (
    <div>
      <header>
        <Navbar title1='HOME' title2='PROFILE' linkName='/profile' />
      </header>
      <section className='section-404'>
        <p>
          404{' '}
          <span>
            404 404 404 404 404 404 404 404 404 404 404 404 404 404 404 404 404
          </span>
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default NotFound;
