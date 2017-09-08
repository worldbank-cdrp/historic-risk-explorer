'use strict';

import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import Header from '../components/Header';
import Footer from '../components/Footer';

class DisasterProfile extends Component {
  render () {
    return (
      <div>
        <Header/>
        <div>
          <div>
            <p>Disaster Date</p>
            <h1>Disaster Name</h1>
          </div>
          <div>
            <h1>Description</h1>
          </div>
          <div>
            <div>
              <h1>Disaster Risk Exporer</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed nisl augue. Morbi condimentum
tempor ornare. Sed rutrum pretium accumsan. Duis iaculis consequat nunc a tempus. Lorem ipsum
dolor sit amet, consectetur adipiscing elit. Duis sed nisl augue.</p>
              <a>Exposure</a>
              <a>Annualized Loss</a>
              <a>Loss Ratio</a>
            </div>
            <div>Map</div>
            <div>
              <h1>Before after</h1>
              <div>Graphic</div>
            </div>
          </div>
        </div>
        <div>
          <h2>Next</h2>
          <h1>Disaster Name</h1>
          <h3>Case Study</h3>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default DisasterProfile;
