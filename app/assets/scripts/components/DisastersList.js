'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class DisastersList extends Component {
  constructor (props) {
    super(props);
    this.renderDisastersList = this.renderDisastersList.bind(this);
  }
  static propTypes = {
    disasters: PropTypes.array.isRequired
  }
  renderDisastersList () {
    return this.props.disasters.map((d, i) =>
      <li key={i}>
        <Link to={`/disasters/${d.c}-${d.y}-${d.t.toLowerCase()}`}>
          <div>
            <h1>{`${d.n} ${d.t}`}</h1>
            <p>{`${d.m} ${d.y}`}</p>
          </div>
        </Link>
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

const selector = (state) => {
  return {
    disasters: state.disasters
  };
};

export default connect(selector)(DisastersList);
