import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class AnalysisMapLegend extends Component {
  static propTypes = {
    visibleLayer: PropTypes.object.isRequired
  }
  render () {
    return (
      <div>
        <h2></h2>
        <div>
        ACTUAL LEGEND
        </div>
      </div>
    );
  }
}

const selector = (state) => {
  return {
    visibleLayer: state.visibleLayer
  };
};

export default connect(selector)(AnalysisMapLegend);
