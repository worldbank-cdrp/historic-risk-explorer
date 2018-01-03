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
    maxValue: PropTypes.number,
    overlayFootprintState: PropTypes.bool
  }

  render () {
    let overlayMetric = this.props.overlayMetric.metric;
    let overlayMetricTitle = config.legend[overlayMetric].title;
    let overlayMetricIdUnits = config.legend[overlayMetric].idUnits;

    // `loss-ratio` values are in the 0–1 domain, but should be shown in the 0–100 domain
    let currentMapVal = this.props.currentMapVal;
    let maxValue = this.props.maxValue;
    if (overlayMetric === 'loss-ratio') {
      currentMapVal = currentMapVal && currentMapVal * 100;
      maxValue = maxValue && maxValue * 100;
    }
    const formatVal = numeral(currentMapVal).format('0.0a');

    // If the value is too small (like 1.64870050785193e-9) the format will return "NaN"
    const overlayMetricText = `${formatVal === 'NaN' ? 0 : formatVal} ${overlayMetricIdUnits}`;
    return (
        <div className='map-legend'>
          <p className='map-layer__title'>{overlayMetricTitle}</p>
          {maxValue && !this.props.overlayFootprintState
            ? <div>
              <div style={{height: '15px', width: '170px', opacity: 0.5, backgroundImage: `linear-gradient(to right, ${config.minColor}, ${config.maxColor})`}}></div>
              <p className='legend-note'>0 to {`${numeral(maxValue).format('0.0a')} ${overlayMetricIdUnits}`}</p>
            </div>
            : ''
          }
          {currentMapVal !== null
            ? <div>
              <p>{this.props.currentName}</p>
              <p>{overlayMetricText}</p>
            </div>
            : ''
          }
          {this.props.overlayFootprintState
            ? <div>
              <div style={{height: '15px', width: '100px', opacity: 0.5, backgroundImage: `linear-gradient(to right, #000, #fff)`}}></div>
              <p className='legend-note'>Low to High Impact</p>
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
    maxValue: state.map.maxValue,
    overlayFootprintState: state.overlayFootprint.enabled
  };
};

export default connect(selector)(AnalysisMapLegend);
