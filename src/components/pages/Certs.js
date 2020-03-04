import React, { Fragment, useState, useEffect } from 'react';
import Cursor from '../layout/utils/Cursor';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import img1 from '../../assets/images/certs/cert-javascript.png';
import img2 from '../../assets/images/certs/cert-modern-react.png';
import img3 from '../../assets/images/certs/cert-react-ftb.png';
import img4 from '../../assets/images/certs/cert-react-ftb-orig.png';

const Certs = () => {
  const [zoom, setZoom] = useState(false);
  const container = document.querySelector('.certs-container');

  useEffect(() => {
    if (zoom) {
      container.style.transform = 'scale(1.8)';
      const handleMove = e => {
        const { clientX: x, clientY: y } = e;
        container.style.transformOrigin = `${x}px ${y}px`;
      };

      container.addEventListener('mousemove', handleMove, {
        passive: true
      });
      return () => container.removeEventListener('mousemove', handleMove);
    } else {
      container && (container.style.transform = 'scale(1)');
    }
  }, [zoom, container]);

  return (
    <Fragment>
      <header>
        <Navbar title1='HOME' title2='PROFILE' linkName='/profile' />
      </header>
      <main>
        <section className='certs-container' onClick={() => setZoom(!zoom)}>
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
