import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import NotFound from './components/pages/NotFound';

import './css/main.css';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/profile' component={Profile} />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
