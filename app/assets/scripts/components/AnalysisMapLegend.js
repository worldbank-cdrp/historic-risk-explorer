import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import config from '../config';
import numeral from 'numeral';

class AnalysisMapLegend extends Component {
  static propTypes = {
    currentMapVal: PropTypes.number,
    visibleLayer: PropTypes.object.isRequired,
    overlayMetric: PropTypes.object.isRequired
  }
  shouldComponentUpdate (nextProps) {
    if (nextProps.visibleLayer.layer === this.props.visibleLayer) { return false; }
    return true;
  }
  render () {
    if (this.props.currentMapVal === null) { return null; }

    let overlayMetric = this.props.overlayMetric.metric;
    let overlayMetricTitle = config.legend[overlayMetric].title;
    let overlayMetricIdUnits = config.legend[overlayMetric].idUnits;
    const overlayMetricText = `${numeral(this.props.currentMapVal).format('0.0a')} ${overlayMetricIdUnits}`;
    // TODO: add additional logic to pick subnational from ids per zoom
    return (
        <div className='map-legend'>
          <p className='map-layer__title'>{overlayMetricTitle}</p>
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
