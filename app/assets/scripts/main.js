'use strict';

import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// import { createStore, applyMiddleware, compose } from 'redux';
// import { syncHistory } from 'react-router-redux';
// import { createLogger } from 'redux-logger';
// import config from './config';
// import reducer from './reducers/reducer';

import About from './views/About';
import Home from './views/Home';
import HistoricDisasters from './views/HistoricDisasters';

render((
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/disasters' component={HistoricDisasters} />
      <Route path='/disasters/:disaster' />
    </Switch>
  </Router>
), document.querySelector('#site-canvas'));
