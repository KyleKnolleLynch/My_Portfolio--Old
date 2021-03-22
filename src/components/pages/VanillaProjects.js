import React from 'react'
import VisibilitySensor from '../layout/utils/VisibilitySensor'
import { vanillaData } from '../../vanillaData'
import VanillaCard from '../layout/VanillaCard'
import HomeLink from '../layout/utils/HomeLink'
import Copyright from '../layout/Copyright'
import Cursor from '../layout/utils/Cursor'

const VanillaProjects = () => {
  return (
    <div>
      <main className='vanilla-main'>
        <section className='vanilla-section-1'>
          <h1>Vanilla Javascript Projects</h1>
          <VisibilitySensor offset={{ bottom: 100, top: -400 }}>
            {({ isVisible }) => (
              <div className={`scroll-div ${isVisible && 'hidden'}`}>
                <p className='scroll-vert'></p>
              </div>
            )}
          </VisibilitySensor>
        </section>
        <section className='vanilla-section-2'>
          <div className='vanilla-grid'>
            {vanillaData.map(project => (
              <VanillaCard project={project} key={project.title} />
            ))}
          </div>
        </section>
        <HomeLink />
        <Copyright color='#0e0016' />
      </main>
      <Cursor />
    </div>
  )
}

export default VanillaProjects
