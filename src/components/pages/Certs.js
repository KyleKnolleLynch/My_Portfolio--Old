import React, { useState, useEffect } from 'react';
import Cursor from '../layout/utils/Cursor';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import img1 from '../../assets/images/certs/javascript_1200.jpg';
import img1sm from '../../assets/images/certs/javascript_800.jpg';
import img2 from '../../assets/images/certs/modernReact_1200.jpg';
import img2sm from '../../assets/images/certs/modernReact_800.jpg';
import img3 from '../../assets/images/certs/react_updated_1200.jpg';
import img3sm from '../../assets/images/certs/react_updated_800.jpg';
import img4 from '../../assets/images/certs/react_1200.jpg';
import img4sm from '../../assets/images/certs/react_800.jpg';

const Certs = () => {
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    const container = document.querySelector('.certs-container');
    if (zoom && window.innerWidth > 768) {
      container.style.transform = 'scale(1.8)';
      const handleMove = e => {
        const { clientX: x, clientY: y } = e;
        container.style.transformOrigin = `${x}px ${y}px`;
      };

      container.addEventListener('mousemove', handleMove);
      return () => container.removeEventListener('mousemove', handleMove);
    } else {
      container.style.transform = 'scale(1)';
    }
  }, [zoom]);

  return (
    <div>
      <header>
        <Navbar title1='HOME' title2='PROFILE' linkName='/profile' />
      </header>
      <main>
        <section className='certs-container' onClick={() => setZoom(!zoom)}>
          <picture>
            <source media='(max-width: 600px)' srcSet={img1sm} />
            <source media='(min-width: 600px)' srcSet={img1} />
            <img src={img1} alt='cert-js' />
          </picture>
          <picture>
            <source media='(max-width: 600px)' srcSet={img2sm} />
            <source media='(min-width: 600px)' srcSet={img2} />
            <img src={img2} alt='cert-js' />
          </picture>
          <picture>
            <source media='(max-width: 600px)' srcSet={img3sm} />
            <source media='(min-width: 600px)' srcSet={img3} />
            <img src={img3} alt='cert-js' />
          </picture>
          <picture>
            <source media='(max-width: 600px)' srcSet={img4sm} />
            <source media='(min-width: 600px)' srcSet={img4} />
            <img src={img4} alt='cert-js' />
          </picture>
        </section>
      </main>
      <Footer />
      <Cursor />
    </div>
  );
};

export default Certs;
