'use strict';

import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class CentralAmericaExplorer extends Component {
  render () {
    return (
      <section className='risk-explorer-tease'>
        <div className='inner'>
          <h2 className='heading--medium'>Explore probabilistic disaster risk in Central American and the Caribbean</h2>
          <a href='https://worldbank-cdrp.github.io/disaster-risk-explorer/'><button className='button button--large button--secondary-bounded'>Explore Central America</button></a>
        </div>
      </section>
    );
  }
}

export default CentralAmericaExplorer;
