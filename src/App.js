import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ScrollToTop from './components/layout/utils/ScrollToTop';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import NotFound from './components/pages/NotFound';

import './css/main.css';

const App = () => {
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
