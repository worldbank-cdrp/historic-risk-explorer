'use strict';

import React, { Component } from 'react';
import DisastersList from './DisastersList';

class HistoricDisastersMain extends Component {
  render () {
    return (
      <div>
        <div>
          <h1>Historic Disasters</h1>
          <DisastersList />
        </div>
        <div>
          <h1>Explore Disaster Risk in Central America</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed nisl augue. Morbi condimentum
    tempor ornare. Sed rutrum pretium accumsan. Duis iaculis consequat nunc a tempus</p>
          <a>Explore Central America</a>
        </div>
      </div>
    );
  }
}

export default HistoricDisastersMain;
