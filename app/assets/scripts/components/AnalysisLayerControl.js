import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setVisibleLayer } from '../actions/action-creators';
import config from '../config';

class AnalysisLayerControl extends Component {
  constructor (props) {
    super(props);
    this.renderLayerSelect = this.renderLayerSelect.bind(this);
  }
  static propTypes = {
    _setVisibleLayer: PropTypes.func.isRequired
  }
  renderLayerSelect () {
    return Object.keys(config.exposureGrids).map((k, i) => {
      const layer = `${config.exposure}-${k}`;
      return (
        <li key={i}>
          <input type='radio' value={layer} onClick={(e) => { this.props._setVisibleLayer(e.target.value); }}/>
          <p>{config.exposureResolution[k]}</p>
        </li>
      );
    });
  }
  render () {
    return (
      <div>
        <p>LEVEL</p>
        <ul>
         {this.renderLayerSelect()}
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
