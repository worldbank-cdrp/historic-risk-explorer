'use strict';

import React, { Component } from 'react';

class Home extends Component {
  render () {
    return (
      <div>
        <div>
          <div>
            <h1>Historic Disasters Database</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed nisl augue.</p>
          </div>
          <div>
            <h1>Featured Historic Disasters</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed nisl augue. </p>
            <ul>
            </ul>
            <a>View All Disasters</a>
          </div>
          <div>
            <h1>Explore Disaster Risk in Central America</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed nisl augue. Morbi condimentum
tempor ornare. Sed rutrum pretium accumsan. Duis iaculis consequat nunc a tempus</p>
            <a>Explore Central America</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
