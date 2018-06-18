import React from 'react';
import PropTypes from 'prop-types';
import config from '../config';
import numeral from 'numeral';

class AnalysisMapLegend extends React.Component {
  render () {
    const { overlayMetric, overlayFootprintState } = this.props;
    let { maxValue } = this.props;

    // `loss-ratio` values are in the 0–1 domain, but should be shown in the 0–100 domain
    maxValue = overlayMetric === 'loss-ratio' ? maxValue * 100 : maxValue;

    return (
      <div>
      {(overlayMetric !== 'no-data' || overlayFootprintState) ? (
        <div className='map-legend'>
          {overlayMetric !== 'no-data' ? (
            <div>
              <p className='map-layer__title'>{config.legend[overlayMetric].title}</p>
              <div style={{height: '15px', width: '170px', opacity: 0.5, backgroundImage: `linear-gradient(to right, ${config.minColor}, ${config.maxColor})`}}></div>
              <p className='legend-note'>0 to {`${numeral(maxValue).format('0.0a')} ${config.legend[overlayMetric].idUnits}`}</p>
            </div>
          ) : null}

          {overlayFootprintState ? (
            <div>
              <div style={{height: '15px', width: '170px', opacity: 0.5, backgroundImage: `linear-gradient(to right, #fff, #000)`}}></div>
              <p className='legend-note'>Low to High Impact</p>
            </div>
          ) : null}
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
