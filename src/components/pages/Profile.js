import React, { Fragment, useEffect } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import Cursor from '../layout/utils/Cursor';
import ProfileImg from '../../assets/images/portrait1.jpg';
import ProfileAbout from '../layout/ProfileAbout';

const Profile = () => {
  useEffect(() => {
    const handleScroll = e => {
      const banner1 = document.querySelector('.hello1');
      const banner2 = document.querySelector('.hello2');

      banner1.style.transform = `translateX(-${window.scrollY / 3}px)`;
      banner2.style.transform = `translateX(${window.scrollY / 3}px)`;
    };
    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const parallax = e => {
    const imgDiv = document.querySelector('.profile-img-div');
    if (imgDiv) {
      imgDiv.style.transform = `translateX(${(e.clientX * 20) /
        1000}px) translateY(${(e.clientY * 20) / 1000}px)`;
    }
  };
  document.addEventListener('mousemove', parallax);

  return (
    <Fragment>
      <header>
        <Navbar title1='HOME' title2='CERTS' linkName='/certs' />
      </header>
      <main className='profile-main'>
        <section className='section profile-section-1'>
          <div className='profile-img-div'>
            <img src={ProfileImg} alt='profile' />
          </div>
          <div className='profile-banner-1 banner'>
            <div className='hello1'>HelloHelloHelloHelloHello</div>
          </div>
          <div className='profile-banner-2 banner'>
            <div className='hello2'>HelloHelloHelloHelloHello</div>
          </div>

          <VisibilitySensor offset={{ bottom: 100, top: -400 }}>
            {({ isVisible }) => (
              <div className={isVisible ? 'scroll-div hidden' : 'scroll-div'}>
                <p>SCROLL</p>
                <p className='scroll-vert'></p>
              </div>
            )}
          </VisibilitySensor>
        </section>
        <section className='section profile-section-2'>
          <ProfileAbout />
        </section>
      </main>
      <Footer />
      <Cursor />
    </Fragment>
  );
};

export default Profile;
