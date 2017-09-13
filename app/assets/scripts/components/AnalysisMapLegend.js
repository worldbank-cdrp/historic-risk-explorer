import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import config from '../config';

class AnalysisMapLegend extends Component {
  static propTypes = {
    visibleLayer: PropTypes.object.isRequired,
    overlayMetric: PropTypes.object.isRequired
  }
  render () {
    console.log(this.props.overlayMetric.metric);
    return (
      <div>
        <h2></h2>
        <div>
          <h1>'surf'</h1>
        </div>
      </div>
    );
  }
}

const selector = (state) => {
  return {
    visibleLayer: state.visibleLayer,
    overlayMetric: state.overlayMetric
  };
};

export default connect(selector)(AnalysisMapLegend);
