import React, { Fragment } from 'react';
import Cursor from '../layout/utils/Cursor';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import img1 from '../../assets/images/certs/cert-javascript.png';
import img2 from '../../assets/images/certs/cert-modern-react.png';
import img3 from '../../assets/images/certs/cert-react-ftb.png';
import img4 from '../../assets/images/certs/cert-react-ftb-orig.png';

const Certs = () => {
  return (
    <Fragment>
      <Navbar title1='Home' title2='Profile' linkName='/profile' />
      <main>
        <section className='certs-container'>
          <img src={img1} alt='cert-js' />
          <img src={img2} alt='cert-js' />
          <img src={img3} alt='cert-js' />
          <img src={img4} alt='cert-js' />
        </section>
      </main>
      <Footer />
      <Cursor />
    </Fragment>
  );
};

export default Certs;
