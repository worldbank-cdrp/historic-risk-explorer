'use strict';

import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import Header from '../components/Header';
import Footer from '../components/Footer';

class About extends Component {
  render () {
    return (
      <div>
        <Header/>
        <div>
          <h1>The About Page</h1>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default About;
