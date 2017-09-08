'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DisastersList extends Component {
  constructor (props) {
    super(props);
    this.renderDisastersList = this.renderDisastersList.bind(this);
  }
  renderDisastersList () {
    return this.props.disasters.map((d, i) =>
      <li key={i}>
        <a>
          <div>
            <h1>{d.c + ' ' + d.t}</h1>
            <p>{d.m + ' ' + d.y}</p>
          </div>
        </a>
      </li>
    );
  }
  render () {
    return (
      <div>
        {this.renderDisastersList()}
      </div>
    );
  }
}

DisastersList.PropTypes = {
  disasters: PropTypes.array
};

export default DisastersList;
