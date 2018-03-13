
import React from 'react';
import PropTypes from 'prop-types';
import config from '../config';
import numeral from 'numeral';

class AnalysisMapPopover extends React.Component {
  render () {
    const { name, value, overlayMetric } = this.props;
    const overlayMetricIdUnits = config.legend[overlayMetric].idUnits;
    const overlayMetricTitle = config.legend[overlayMetric].title;
    let { maxValue } = this.props;
    // `loss-ratio` values are in the 0–1 domain, but should be shown in the 0–100 domain
    const currVal = overlayMetric === 'loss-ratio' ? value * 100 : value;
    maxValue = overlayMetric === 'loss-ratio' ? maxValue * 100 : maxValue;
    const formatVal = numeral(currVal).format('0.0a');
    // If the value is too small (like 1.64870050785193e-9) the format will return "NaN"
    const overlayMetricText = `${formatVal === 'NaN' ? 0 : formatVal} ${overlayMetricIdUnits}`;
    return (
      <article className='popover'>
        <div className='popover__contents'>
          <header className='popover__header'>
            <div className='popover__headline'>
              <h4>{overlayMetricTitle}</h4>
            </div>
          </header>
          <div className='popover__body'>
            {maxValue ? (
            <div>
              <div style={{height: '15px', width: '170px', opacity: 0.5, backgroundImage: `linear-gradient(to right, ${config.minColor}, ${config.maxColor})`}}></div>
              <p>0 to {`${numeral(maxValue).format('0.0a')} ${overlayMetricIdUnits}`}</p>
            </div>
            ) : null}
            <h6 style={{'margin-bottom': '1px'}}>{name}</h6>
            <p>{overlayMetricText}</p>
          </div>
        </div>
      </article>
    );
  }
}

AnalysisMapPopover.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
  overlayMetric: PropTypes.string,
  maxValue: PropTypes.number
};

export default AnalysisMapPopover;
