'use strict';

/* REACT */
import React from 'react';
import { render } from 'react-dom';
/* REDUX */
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
/* REACT ROUTER */
import createHashHistory from 'history/createHashHistory';
import { routerMiddleware, ConnectedRouter as Router } from 'react-router-redux';
import { Route, Switch } from 'react-router-dom';

/* VIEWS */
import About from './views/About';
import Home from './views/Home';
import HistoricDisasters from './views/HistoricDisasters';

const history = createHashHistory();

const store = createStore(reducer, {}, compose(
  applyMiddleware(
    routerMiddleware(history)),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  )
);

render((
  <Provider store={store} >
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/disasters' component={HistoricDisasters} />
        <Route path='/disasters/:disaster' />
      </Switch>
    </Router>
  </Provider>
), document.querySelector('#site-canvas'));
