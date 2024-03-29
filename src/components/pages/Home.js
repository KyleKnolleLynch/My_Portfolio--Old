import React, { useState, useEffect, lazy, Suspense, useContext } from 'react'
import { Link } from 'react-router-dom'
import VisibilitySensor from '../layout/utils/VisibilitySensor'
import Navbar from '../layout/Navbar'
import Copyright from '../layout/Copyright'
import Footer from '../layout/Footer'
import { CursorContext } from '../../context/CursorContext'
import techcartDisplaySm from '../../assets/images/projects/tech-cart-vert-sm.webp'
import techcartDisplayMd from '../../assets/images/projects/tech-cart-vert-md.webp'
import techcartDisplayLg from '../../assets/images/projects/tech-cart-vert-lg.webp'
import miamiDisplaySm from '../../assets/images/projects/miami-travel-vert-sm.webp'
import miamiDisplayMd from '../../assets/images/projects/miami-travel-vert-md.webp'
import miamiDisplayXl from '../../assets/images/projects/miami-travel-vert-xl.webp'
import blogDisplaySm from '../../assets/images/projects/blog-vert-sm.webp'
import blogDisplayMd from '../../assets/images/projects/blog-vert-md.webp'

import { ArrowDownRight } from '../../assets/svgIcons'

const ProjectCards = lazy(() => import('../layout/ProjectCards'))

const Home = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const { setHoveredState } = useContext(CursorContext)

  useEffect(() => {
    const parallax = e => {
      const displays = document.querySelectorAll('.display')
      const displayStyle = {
        x: (e.clientX * 20) / 1000,
        y: (e.clientY * 20) / 1000,
      }
      setPos(displayStyle)
      displays.forEach(display => {
        if (window.scrollY < 1000) {
          display.style.transform = `translate(${pos.x}px, ${pos.y}px)`
        }
      })
    }

    document.addEventListener('mousemove', parallax)
    return () => document.removeEventListener('mousemove', parallax)
  }, [pos.x, pos.y])

  return (
    <div>
      <header>
        <Navbar
          titleDisabled='KYLE LYNCH'
          title2='PROFILE'
          linkName='/profile'
          noDisplay='no-display'
        />
      </header>
      <main>
        <section className='home-section-1'>
          <div className='projects-title'>
            Selected
            <br />
            <p>Work</p>
          </div>

          <div className='display img-dis-1'>
            <picture>
              <source media='(min-width: 1025px)' srcSet={miamiDisplayXl} />
              <source media='(min-width: 600px)' srcSet={miamiDisplayMd} />
              <img
                src={miamiDisplaySm}
                alt='miami-display'
                width='200'
                height='320'
              />
            </picture>
          </div>
          <div className='display img-dis-2'>
            <picture>
              <source media='(min-width: 600px)' srcSet={blogDisplayMd} />
              <img
                src={blogDisplaySm}
                alt='blog-display'
                width='200'
                height='320'
              />
            </picture>
          </div>
          <div className='display img-dis-3'>
            <picture>
              <source media='(min-width: 1025px)' srcSet={techcartDisplayLg} />
              <source media='(min-width: 600px)' srcSet={techcartDisplayMd} />
              <img
                src={techcartDisplaySm}
                alt='techcart-display'
                width='200'
                height='320'
              />
            </picture>
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
        <section className='home-section-2'>
          <Suspense fallback={<div>Loading...</div>}>
            <ProjectCards />
          </Suspense>
        </section>
        <article className='profile-link-bottom'>
          <span>
            Visit{' '}
            <ArrowDownRight />
          </span>
          <br />
          <Link
            to='/profile'
            onMouseEnter={() => setHoveredState(true)}
            onMouseLeave={() => setHoveredState(false)}
          >
            Profile
          </Link>
        </article>
        <Copyright />
      </main>
      <Footer />
    </div>
  )
}

export default Home
