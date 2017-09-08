'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import Footer from '../components/Footer';
import DisastersList from '../components/DisastersList';

class HistoricDisasters extends Component {
  render () {
    return (
      <div>
        <Header/>
        <div>
          <h1>Historic Disasters</h1>
          <ul>
          </ul>
        </div>
        <div>
          <h1>Explore Disaster Risk in Central America</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed nisl augue. Morbi condimentum
tempor ornare. Sed rutrum pretium accumsan. Duis iaculis consequat nunc a tempus</p>
          <DisastersList disasters={this.props.disasters}/>
          <a>Explore Central America</a>
        </div>
        <Footer/>
      </div>
    );
  }
}

const selector = (state) => {
  return {
    disasters: state.disasters
  };
};

HistoricDisasters.PropTypes = {
  disasters: PropTypes.array
};

export default connect(selector)(HistoricDisasters);
