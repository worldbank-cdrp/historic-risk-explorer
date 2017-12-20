import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import config from '../config';
import numeral from 'numeral';

class AnalysisMapLegend extends Component {
  static propTypes = {
    currentMapVal: PropTypes.number,
    currentName: PropTypes.string,
    visibleLayer: PropTypes.object.isRequired,
    overlayMetric: PropTypes.object.isRequired,
    maxValue: PropTypes.number
  }

  render () {
    let overlayMetric = this.props.overlayMetric.metric;
    let overlayMetricTitle = config.legend[overlayMetric].title;
    let overlayMetricIdUnits = config.legend[overlayMetric].idUnits;
    const formatVal = numeral(this.props.currentMapVal).format('0.0a');
    // If the value is too small (like 1.64870050785193e-9) the format will return "NaN"
    const overlayMetricText = `${formatVal === 'NaN' ? 0 : formatVal} ${overlayMetricIdUnits}`;
    return (
        <div className='map-legend'>
          <p className='map-layer__title'>{overlayMetricTitle}</p>
          {this.props.maxValue
            ? <div>
              <div style={{height: '15px', width: '100px', opacity: 0.5, backgroundImage: `linear-gradient(to right, ${config.minColor}, ${config.maxColor})`}}></div>
              <p>0 to {`${numeral(this.props.maxValue).format('0.0a')} ${overlayMetricIdUnits}`}</p>
            </div>
            : ''
          }
          {this.props.currentMapVal !== null
            ? <div>
              <p>{this.props.currentName}</p>
              <p>{overlayMetricText}</p>
            </div>
            : ''
          }
        </div>
    );
  }
}

const selector = (state) => {
  return {
    visibleLayer: state.visibleLayer,
    overlayMetric: state.overlayMetric,
    currentMapVal: state.map.val,
    currentName: state.map.name,
    maxValue: state.map.maxValue
  };
};

export default connect(selector)(AnalysisMapLegend);
