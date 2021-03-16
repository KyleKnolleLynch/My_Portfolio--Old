import React, { useState, useEffect, useContext } from 'react'
import VisibilitySensor from '../layout/utils/VisibilitySensor'
import Navbar from '../layout/Navbar'
import Copyright from '../layout/Copyright'
import Footer from '../layout/Footer'
import Cursor from '../layout/utils/Cursor'
import { CursorContext } from '../../context/CursorContext'
import ProfileImg from '../../assets/images/portrait1.webp'
import ProfileAbout from '../layout/ProfileAbout'
import ProfileBio from '../layout/ProfileBio'
import arrowSvg from '../../assets/icons/arrow-down-right.svg'
import { iconsData } from '../../iconsData'

const Profile = () => {
  const [banStyle, setBanStyle] = useState(0)
  const [imgPos, setImgPos] = useState({ x: 0, y: 0 })
  const { setHoveredState } = useContext(CursorContext)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setBanStyle(0)
      } else {
        const slideStyle = window.scrollY / 100
        setBanStyle(slideStyle)
      }
    }
    document.addEventListener('scroll', handleScroll, { passive: true })
    return () => document.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const parallax = e => {
      const imgDivStyle = {
        x: (e.clientX * 20) / 1000,
        y: (e.clientY * 20) / 1000,
      }
      if (window.scrollY < 800) {
        setImgPos(imgDivStyle)
      }
    }
    document.addEventListener('mousemove', parallax)
    return () => document.removeEventListener('mousemove', parallax)
  }, [])

  return (
    <div>
      <header>
        <Navbar
          title1='PROJECTS'
          title2='RESUME'
          linkName='/KyleLynchResume.pdf'
          target='_blank'
        />
      </header>
      <main className='profile-main'>
        <section className='profile-section-1'>
          <div
            className='profile-img-div'
            style={{ transform: `translate(${imgPos.x}px, ${imgPos.y}px)` }}
          >
            <img
              src={ProfileImg}
              alt='profile_portrait'
              width='500px'
              height='400px'
            />
          </div>
          <div className='profile-banner-1 banner'>
            <div
              className='hello1'
              style={{ transform: `translateX(-${banStyle}%)` }}
            >
              Hello Hello Hello Hello Hello Hello
            </div>
          </div>
          <div className='profile-banner-2 banner'>
            <div
              className='hello2'
              style={{ transform: `translateX(${banStyle}%)` }}
            >
              Hello Hello Hello Hello Hello Hello
            </div>
          </div>

          <VisibilitySensor offset={{ bottom: 100, top: -400 }}>
            {({ isVisible }) => (
              <div className={`scroll-div ${isVisible && 'hidden'}`}>
                <p>SCROLL</p>
                <p className='scroll-vert'></p>
              </div>
            )}
          </VisibilitySensor>
        </section>
        <section className='profile-section-2'>
          <ProfileBio />
        </section>

        <section className='profile-section-3'>
          <ProfileAbout />
        </section>
        <article className='profile-link-bottom profile-contact-email'>
          <span>
            email me{' '}
            <img
              src={arrowSvg}
              alt='down right svg'
              width='22px'
              height='22px'
            />
          </span>
          <br />
          <a
            href='mailto: email@kylelynch.me'
            onMouseEnter={() => setHoveredState(true)}
            onMouseLeave={() => setHoveredState(false)}
          >
            email@kylelynch.me
          </a>
        </article>
        <ul className='test-icons'>
          {iconsData.map(icon => (
            <li key={icon.id}>
              <img src={icon.icon} alt='svg_icons' width='35px' height='35px' />
            </li>
          ))}
        </ul>
        <Copyright />
      </main>
      <Footer />
      <Cursor />
    </div>
  )
}

export default Profile
