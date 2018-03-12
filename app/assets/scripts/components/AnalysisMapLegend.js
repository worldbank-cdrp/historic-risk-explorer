import React from 'react';
import PropTypes from 'prop-types';
import config from '../config';
import numeral from 'numeral';

class AnalysisMapLegend extends React.Component {
  render () {
    const { overlayMetric, overlayFootprintState, currentName } = this.props;
    let { currentMapVal, maxValue } = this.props;

    const overlayMetricTitle = config.legend[overlayMetric].title;
    const overlayMetricIdUnits = config.legend[overlayMetric].idUnits;

    // `loss-ratio` values are in the 0–1 domain, but should be shown in the 0–100 domain
    currentMapVal = overlayMetric === 'loss-ratio' ? currentMapVal * 100 : currentMapVal;
    maxValue = overlayMetric === 'loss-ratio' ? maxValue * 100 : maxValue;
    const formatVal = numeral(currentMapVal).format('0.0a');

    // If the value is too small (like 1.64870050785193e-9) the format will return "NaN"
    const overlayMetricText = `${formatVal === 'NaN' ? 0 : formatVal} ${overlayMetricIdUnits}`;

    return (
      <div className='map-legend'>
        <p className='map-layer__title'>{overlayMetricTitle}</p>

        {maxValue ? (
          <div>
            <div style={{height: '15px', width: '170px', opacity: 0.5, backgroundImage: `linear-gradient(to right, ${config.minColor}, ${config.maxColor})`}}></div>
            <p className='legend-note'>0 to {`${numeral(maxValue).format('0.0a')} ${overlayMetricIdUnits}`}</p>
          </div>
        ) : null}

        {currentMapVal ? (
          <div>
            <p>{currentName}</p>
            <p>{overlayMetricText}</p>
          </div>
        ) : null}

        {overlayFootprintState ? (
          <div>
            <div style={{height: '15px', width: '170px', opacity: 0.5, backgroundImage: `linear-gradient(to right, #fff, #000)`}}></div>
            <p className='legend-note'>Low to High Impact</p>
          </div>
        ) : null}
      </div>
    );
  }
}

AnalysisMapLegend.propTypes = {
  overlayMetric: PropTypes.string.isRequired,
  overlayFootprintState: PropTypes.bool,
  currentMapVal: PropTypes.number,
  currentName: PropTypes.string,
  maxValue: PropTypes.number
};

export default AnalysisMapLegend;
