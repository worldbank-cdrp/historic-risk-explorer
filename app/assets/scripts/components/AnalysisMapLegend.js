import React from 'react';
import PropTypes from 'prop-types';
import config from '../config';
import numeral from 'numeral';

class AnalysisMapLegend extends React.Component {
  render () {
    const { overlayMetric, overlayFootprintState } = this.props;
    let { maxValue } = this.props;

    const overlayMetricTitle = config.legend[overlayMetric].title;
    const overlayMetricIdUnits = config.legend[overlayMetric].idUnits;

    // `loss-ratio` values are in the 0–1 domain, but should be shown in the 0–100 domain
    maxValue = overlayMetric === 'loss-ratio' ? maxValue * 100 : maxValue;

    return (
      <div className='map-legend'>
        <p className='map-layer__title'>{overlayMetricTitle}</p>

        {maxValue ? (
          <div>
            <div style={{height: '15px', width: '170px', opacity: 0.5, backgroundImage: `linear-gradient(to right, ${config.minColor}, ${config.maxColor})`}}></div>
            <p className='legend-note'>0 to {`${numeral(maxValue).format('0.0a')} ${overlayMetricIdUnits}`}</p>
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
  maxValue: PropTypes.number
};

export default AnalysisMapLegend;
