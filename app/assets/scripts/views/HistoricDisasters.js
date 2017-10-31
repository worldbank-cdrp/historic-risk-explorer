'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import HistoricDisastersMain from '../components/HistoricDisastersMain';

class HistoricDisasters extends Component {
  static propTypes = {
    disaster: PropTypes.object,
    disasters: PropTypes.array,
    location: PropTypes.object,
    match: PropTypes.object,
    paginationDirection: PropTypes.string,
    _setPaginationDirection: PropTypes.func,
    _shouldGoToPreviousDisaster: PropTypes.func
  }

  render () {
    return (<HistoricDisastersMain disasters={this.props.disasters} />);
  }
}

function selector (state) {
  return {
    disaster: state.disaster,
    disasters: state.disasters
  };
}

export default connect(selector)(HistoricDisasters);
