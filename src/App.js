import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ScrollToTop from './components/layout/utils/ScrollToTop';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import Certs from './components/pages/Certs';
import NotFound from './components/pages/NotFound';
import favBlue from './assets/icons/portfolio_logo_black_16.png';
import favRed from './assets/icons/portfolio_logo_white_16.png';

import './css/main.css';

const App = () => {
  useEffect(() => {
    const favicon = document.getElementById('favicon');
    const changeFavicon = () => {
      favicon.setAttribute('href', favBlue);
      setTimeout(() => favicon.setAttribute('href', favRed), 4000);
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
