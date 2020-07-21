import React from 'react';
import Cursor from '../layout/utils/Cursor';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

const NotFound = () => {
  return (
    <div className='not-found'>
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
      <Cursor />
    </div>
  );
};

export default NotFound;
