import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import ScrollToTop from './components/layout/utils/ScrollToTop'
import Home from './components/pages/Home'
import Profile from './components/pages/Profile'
import VanillaProjects from './components/pages/VanillaProjects'
import ReactProjects from './components/pages/ReactProjects'
import SummaryBlog from './components/pages/SummaryBlog'
import SummaryMiami from './components/pages/SummaryMiami'
import NotFound from './components/pages/NotFound'

import './css/main.min.css'

const App = () => {
  const logoWhite = './logoIcons/white_icon_32.png'
  const logoPurple = './logoIcons/purple_icon_32.png'

  useEffect(() => {
    if (window.innerWidth > 1024) {
      const logoPng = document.getElementById('favicon')
      const changeFavicon = () => {
        logoPng.setAttribute('href', logoPurple)
        setTimeout(() => logoPng.setAttribute('href', logoWhite), 4000)
      }

      const intv = setInterval(changeFavicon, 8000)
      return () => clearInterval(intv)
    }
  }, [])

  return (
    <ScrollToTop>
      <Route
        render={({ location }) => (
          <div className='container'>
            <TransitionGroup>
              <CSSTransition key={location.key} classNames='fade' timeout={650}>
                <Switch location={location}>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/profile' component={Profile} />
                  <Route
                    exact
                    path='/vanillaProjects'
                    component={VanillaProjects}
                  />
                  <Route
                    exact
                    path='/reactProjects'
                    component={ReactProjects}
                  />
                  <Route
                    exact
                    path='/projectSummaryBlog'
                    component={SummaryBlog}
                  />
                  <Route
                    exact
                    path='/projectSummaryMiami'
                    component={SummaryMiami}
                  />
                  <Route component={NotFound} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </div>
        )}
      />
    </ScrollToTop>
  )
}

export default App
