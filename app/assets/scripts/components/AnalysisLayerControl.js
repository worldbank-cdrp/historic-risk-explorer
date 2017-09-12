import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setVisibleLayer } from '../actions/action-creators';
import config from '../config';

class AnalysisLayerControl extends Component {
  constructor (props) {
    super(props);
    this.renderExposureLayerSelect = this.renderExposureLayerSelect.bind(this);
  }
  static propTypes = {
    disaster: PropTypes.object.isRequired,
    _setVisibleLayer: PropTypes.func.isRequired
  }
  renderExposureLayerSelect () {
    return Object.keys(config.control['exposure-loss']).map((k, i) => {
      return (
        <li key={i}>
          <input type='radio' value={k} onClick={(e) => { this.props._setVisibleLayer(e.target.value); }}/>
          <p>{config.control['exposure-loss'][k]}</p>
        </li>
      );
    });
  }
  render () {
    return (
      <div>
        <p>LEVEL</p>
        <ul>
         {this.renderExposureLayerSelect()}
        </ul>
        <p>DATA VALUES</p>
        <button>Absolute Value</button>
        <button>Relative Value</button>
      </div>
    );
  }
}

const dispatcher = (dispatch) => {
  return {
    _setVisibleLayer: (layer) => { dispatch(setVisibleLayer(layer)); }
  };
};

export default connect(null, dispatcher)(AnalysisLayerControl);
