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
    let overlayMetric = this.props.overlayMetric.metric;
    let overlayMetricTitle = config.legend[overlayMetric].title;
    let overlayMetricIdUnits = config.legend[overlayMetric].idUnits;
    let overlayMetricUOA = this.props.visibleLayer.layer;
    overlayMetricIdUnits = overlayMetricUOA === 'grid' ? `${overlayMetricIdUnits} per # km` : `${overlayMetricIdUnits} per province`;
    // for subNational, units are be expressed in #km
    // TODO: add additional logic to pick subnational from ids per zoom
    return (
      <div>
        <h2></h2>
        <div>
          <h1>{overlayMetricTitle}</h1>
        </div>
        <div>
          {/* place for color ramp */}
          {overlayMetricIdUnits}
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
