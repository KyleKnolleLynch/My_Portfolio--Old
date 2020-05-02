import React, { useState, useEffect } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import Cursor from '../layout/utils/Cursor';
import ProfileImg from '../../assets/images/portrait1.jpg';
import ProfileAbout from '../layout/ProfileAbout';
import ProfileBio from '../layout/ProfileBio';

const Profile = () => {
  const [banStyle, setBanStyle] = useState(0);
  const [imgPos, setImgPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setBanStyle(0);
      } else {
        const slideStyle = window.scrollY / 2 + 100;
        setBanStyle(slideStyle);
      }
    };
    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const parallax = (e) => {
      const imgDivStyle = {
        x: (e.clientX * 20) / 1000,
        y: (e.clientY * 20) / 1000,
      };
      setImgPos(imgDivStyle);
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
        <section className='profile-section-1'>
          <div
            className='profile-img-div'
            style={{ transform: `translate(${imgPos.x}px, ${imgPos.y}px)` }}
          >
            <img src={ProfileImg} alt='profile' />
          </div>
          <div className='profile-banner-1 banner'>
            <div
              className='hello1'
              style={{ transform: `translateX(-${banStyle}px)` }}
            >
              Hello Hello Hello Hello Hello Hello
            </div>
          </div>
          <div className='profile-banner-2 banner'>
            <div
              className='hello2'
              style={{ transform: `translateX(${banStyle}px)` }}
            >
              Hello Hello Hello Hello Hello Hello
            </div>
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
        <section className='profile-section-2'>
          <ProfileAbout />
        </section>
        <section className='profile-section-3'>
          <ProfileBio />
        </section>
      </main>
      <Footer />
      <Cursor />
    </div>
  );
};

export default Profile;
