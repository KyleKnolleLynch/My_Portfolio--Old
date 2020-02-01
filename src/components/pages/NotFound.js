import React, { Fragment } from 'react';
import Cursor from '../layout/utils/Cursor';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

const NotFound = () => {
  return (
    <Fragment>
      <Navbar title1='HOME' title2='PROFILE' linkName='/profile' />
      <main>
        <section className='section-404'>
          <div>404</div>
          <div>404 404 404 404 404 404 404 404 404 404</div>
        </section>
      </main>
      <Footer />
      <Cursor />
    </Fragment>
  );
};

export default NotFound;
