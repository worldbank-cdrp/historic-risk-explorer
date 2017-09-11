'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AnalysisMap from '../components/AnalysisMap';

class DisasterProfile extends Component {
  constructor (props) {
    super(props);
    this.parseURL = this.parseURL.bind(this);
  }
  static propTypes = {
    disasters: PropTypes.array,
    match: PropTypes.object
  }
  // uses route url to query disasters list for matching disaster
  parseURL () {
    const disastersInfo = this.props.match.url.split('/disasters/')[1].split('-');
    this.disaster = this.props.disasters.find(d => d.c === disastersInfo[0]);
  }

  render () {
    this.parseURL();
    return (
      <div>
        <div>
          <p>{this.disaster.m} {this.disaster.y}</p>
          <h1>{this.disaster.n} {this.disaster.y} {this.disaster.t}</h1>
        </div>
        <div>
          <h2>Maginute: </h2>
          <p>info</p>
          <h2>Country Population At Time</h2>
          <p>population</p>
          <a>Download Disaster Profile</a>
          <p>Background and Historic Losses</p>
          <p>See More</p>
        </div>
        <div>
          <h1>stats</h1>
        </div>
        <AnalysisMap disaster={this.disaster} />
        <div>
          <h1>Disaster Risk Explorer</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed nisl augue. Morbi condimentum
tempor ornare. Sed rutrum pretium accumsan. Duis iaculis consequat nunc a tempus. Lorem ipsum
dolor sit amet, consectetur adipiscing elit. Duis sed nisl augue</p>
          <a>Exposure</a>
          <a>Annualized Loss</a>
          <a>Loss Ratio</a>
        </div>
        <div>
          MAP
        </div>
        <div>
          BEFORE AND AFTER
        </div>
        <div>
          NEXT DISASTER
        </div>
      </div>
    );
  }
}

const selector = (state) => {
  return {
    disasters: state.disasters
  };
};

export default connect(selector)(DisasterProfile);
