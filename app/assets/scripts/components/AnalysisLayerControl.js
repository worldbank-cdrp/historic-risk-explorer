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
        <li key={k}>
          <label className='form__option form__option--custom-radio'>
            <input type='radio' value={k} onClick={(e) => { e.preventDefault(); this.props._setVisibleLayer(e.target.value); }}/>
            <span className='form__option__text'>{config.control['exposure-loss'][k]}</span>
            <span className='form__option__ui'></span>
          </label>
        </li>
      );
    });
  }
  render () {
    return (
        <div className='map-layer__actions'>
          <p className='map-layer__title'>LEVEL</p>
          <ul>
           {this.renderExposureLayerSelect()}
          </ul>
          <p className='map-layer__title'>DATA VALUES</p>
            <div className='button-group--horizontal'>
              <button className='button button--small button--base-bounded'>Absolute Value</button>
              <button className='button button--small button--base-bounded'>Relative Value</button>
            </div>
        </div>
    );
  }
}

const selector = (state) => { return {}; };

const dispatcher = (dispatch) => {
  return {
    _setVisibleLayer: (layer) => { dispatch(setVisibleLayer(layer)); }
  };
};

export default connect(selector, dispatcher)(AnalysisLayerControl);
