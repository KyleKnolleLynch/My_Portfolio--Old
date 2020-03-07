import React, { useEffect } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import Cursor from '../layout/utils/Cursor';
import ProfileImg from '../../assets/images/portrait1.jpg';
import ProfileAbout from '../layout/ProfileAbout';

const Profile = () => {
  useEffect(() => {
    const handleScroll = () => {
      const banner1 = document.querySelector('.hello1');
      const banner2 = document.querySelector('.hello2');

      if (window.scrollY > 1000) {
        banner1.style.transform = 'translateX(0)';
        banner2.style.transform = 'translateX(0)';
      } else {
        banner1.style.transform = `translateX(-${window.scrollY / 2 + 100}px)`;
        banner2.style.transform = `translateX(${window.scrollY / 2 + 100}px)`;
      }
    };
    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const parallax = e => {
      const imgDiv = document.querySelector('.profile-img-div');
      if (imgDiv) {
        imgDiv.style.transform = `translateX(${(e.clientX * 20) /
          1000}px) translateY(${(e.clientY * 20) / 1000}px)`;
      }
    };
    document.addEventListener('mousemove', parallax);
    return () => document.removeEventListener('mousemove', parallax);
  }, []);

  return (
    <div>
      <header>
        <Navbar title1='HOME' title2='CERTS' linkName='/certs' />
      </header>
      <main className='profile-main'>
        <section className='section profile-section-1'>
          <div className='profile-img-div'>
            <img src={ProfileImg} alt='profile' />
          </div>
          <div className='profile-banner-1 banner'>
            <div className='hello1'>Hello Hello Hello Hello Hello Hello</div>
          </div>
          <div className='profile-banner-2 banner'>
            <div className='hello2'>Hello Hello Hello Hello Hello Hello</div>
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
    </div>
  );
};

export default Profile;
