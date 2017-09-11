'use strict';

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import HistoricDisastersMain from '../components/HistoricDisastersMain';
import DisasterProfile from './DisasterProfile';

class HistoricDisasters extends Component {
  static propTypes = {
    match: PropTypes.object
  }
  render () {
    return (
      <div>
        <Switch>
          <Route path={this.props.match.path} exact component={HistoricDisastersMain} />
          <Route path={`${this.props.match.path}/:disaster`} component={DisasterProfile} />
        </Switch>
      </div>
    );
  }
}

export default HistoricDisasters;
