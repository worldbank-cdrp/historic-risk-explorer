'use strict';

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import HistoricDisastersMain from '../components/HistoricDisastersMain';
import DisasterProfile from './DisasterProfile';

class HistoricDisasters extends Component {
  render () {
    return (
      <div>
        <Switch>
          <Route path={this.props.match.path} exact disasters={this.props.disasters} component={HistoricDisastersMain} />
          <Route path={`${this.props.match.path}/:disaster`} component={DisasterProfile} />
        </Switch>
      </div>
    );
  }
}

HistoricDisasters.PropTypes = {
  match: PropTypes.object
};

export default HistoricDisasters;
