import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ScrollToTop from './components/layout/utils/ScrollToTop';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import Certs from './components/pages/Certs';
import NotFound from './components/pages/NotFound';

import './css/main.css';

const App = () => {
  const logoWhite = './logoIcons/white_icon_32.png';
  const logoPurple = './logoIcons/purple_icon_32.png';
  useEffect(() => {
    const logoPng = document.getElementById('favicon');
    const changeFavicon = () => {
      logoPng.setAttribute('href', logoPurple);
      setTimeout(() => logoPng.setAttribute('href', logoWhite), 4000);
    };

    setInterval(changeFavicon, 8000);
  }, []);

  return (
    <Router>
      <ScrollToTop>
        <Route
          render={({ location }) => (
            <div className='container'>
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  classNames='fade'
                  timeout={650}
                >
                  <Switch location={location}>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/profile' component={Profile} />
                    <Route exact path='/certs' component={Certs} />
                    <Route component={NotFound} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </div>
          )}
        />
      </ScrollToTop>
    </Router>
  );
};

export default App;
