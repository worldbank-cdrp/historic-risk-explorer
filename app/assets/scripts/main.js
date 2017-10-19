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
import DisasterProfile from './views/DisasterProfile';
import HistoricDisasters from './views/HistoricDisasters';

/* HEADER AND FOOTER */
import Header from './components/Header';
import Footer from './components/Footer';

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
      <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/disasters' component={HistoricDisasters} />
        <Route path='/:disaster' component={DisasterProfile} />
      </Switch>
      <Footer/>
      </div>
    </Router>
  </Provider>
), document.querySelector('#site-canvas'));
