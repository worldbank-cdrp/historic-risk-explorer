import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import config from '../config';

class AnalysisMapLegend extends Component {
  static propTypes = {
    currentMapVal: PropTypes.number.isRequired,
    visibleLayer: PropTypes.object.isRequired,
    overlayMetric: PropTypes.object.isRequired
  }
  shouldComponentUpdate (nextProps) {
    if (nextProps.visibleLayer.layer === this.props.visibleLayer) { return false; }
    return true;
  }
  render () {
    let overlayMetric = this.props.overlayMetric.metric;
    let overlayMetricTitle = config.legend[overlayMetric].title;
    let overlayMetricIdUnits = config.legend[overlayMetric].idUnits;
    let overlayMetricUOA = this.props.visibleLayer.layer;
    overlayMetricIdUnits = overlayMetricUOA === 'grid' ? `${overlayMetricIdUnits} per # km` : `${overlayMetricIdUnits} per province`;
    const overlayMetricText = this.props.currentMapVal === 0 ? overlayMetricIdUnits : `${this.props.currentMapVal} ${overlayMetricIdUnits}`;
    // for subNational, units are be expressed in #km
    // TODO: add additional logic to pick subnational from ids per zoom
    return (
        <div className='map-legend'>
          <p className='map-layer__title'>{overlayMetricTitle}</p>
          {/* place for color ramp */}
          {overlayMetricText}
        </div>
    );
  }
}

const selector = (state) => {
  return {
    visibleLayer: state.visibleLayer,
    overlayMetric: state.overlayMetric,
    currentMapVal: state.map.val
  };
};

export default connect(selector)(AnalysisMapLegend);
