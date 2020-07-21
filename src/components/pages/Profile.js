import React, { useState, useEffect } from 'react';
import VisibilitySensor from '../layout/utils/VisibilitySensor';
import Navbar from '../layout/Navbar';
import Copyright from '../layout/Copyright';
import Footer from '../layout/Footer';
import Cursor from '../layout/utils/Cursor';
import ProfileImg from '../../assets/images/portrait1.jpg';
import ProfileAbout from '../layout/ProfileAbout';
import ProfileBio from '../layout/ProfileBio';
import { iconsData } from '../../iconsData';

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
      if (window.pageYOffset < 850) {
        setImgPos(imgDivStyle);
      }
    };
    document.addEventListener('mousemove', parallax);
    return () => document.removeEventListener('mousemove', parallax);
  }, []);

  return (
    <div>
      <header>
        <Navbar
          title1='HOME'
          title2='Resume PDF'
          linkName='/myResume.pdf'
          target='_blank'
        />
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
        <VisibilitySensor partialVisibility once>
          {({ isVisible }) => (
            <section
              className={
                isVisible
                  ? 'profile-section-2 slideDown enter'
                  : 'profile-section-2 slideDown'
              }
            >
              <ProfileBio />
            </section>
          )}
        </VisibilitySensor>

        <section className='profile-section-3'>
          <ProfileAbout />
        </section>
        <ul className='test-icons'>
          {iconsData.map((icon) => (
            <li key={icon.id}>
              <img src={icon.icon} alt='svg_icons' />
            </li>
          ))}
        </ul>
        <Copyright />
      </main>
      <Footer />
      <Cursor />
    </div>
  );
};

export default Profile;
