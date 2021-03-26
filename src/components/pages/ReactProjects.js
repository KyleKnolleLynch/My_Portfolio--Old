import React from 'react'
import VisibilitySensor from '../layout/utils/VisibilitySensor'
import { reactData } from '../../reactData'
import ReactCard from '../layout/ReactCard'
import reactSvg from '../../assets/icons/react.svg'
import HomeLink from '../layout/utils/HomeLink'
import Copyright from '../layout/Copyright'
import Cursor from '../layout/utils/Cursor'

const ReactProjects = () => {
  return (
    <div>
      <main className='react-main'>
        <section className='react-section-1'>
          <img
            src={reactSvg}
            alt='react_logo'
            className='react-logo-svg'
            width='160px'
            height='160px'
          />
          <h1>React Projects</h1>
          <VisibilitySensor offset={{ bottom: 100, top: -400 }}>
            {({ isVisible }) => (
              <div className={`scroll-div ${isVisible && 'hidden'}`}>
                <p className='scroll-vert'></p>
              </div>
            )}
          </VisibilitySensor>
        </section>
        <section className='react-section-2'>
          <div className='react-project-grid'>
            {reactData.map(project => (
              <VisibilitySensor partialVisibility once key={project.id}>
                {({ isVisible }) => (
                  <ReactCard
                    project={project}
                    className={`slideUp react-card-container ${
                      isVisible && 'enter'
                    }`}
                  />
                )}
              </VisibilitySensor>
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

export default ReactProjects
