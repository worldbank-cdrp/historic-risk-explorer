import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import c from 'classnames';
import { setVisibleLayer } from '../actions/action-creators';
import config from '../config';

class AnalysisLayerControl extends Component {
  constructor (props) {
    super(props);
    this.renderExposureLayerSelect = this.renderExposureLayerSelect.bind(this);
  }
  static propTypes = {
    disaster: PropTypes.object.isRequired,
    exposureLayer: PropTypes.object.isRequired,
    _setVisibleLayer: PropTypes.func.isRequired
  }

  renderExposureLayerSelect () {
    const layer = this.props.exposureLayer.layer || '';
    return Object.keys(config.control['exposure']).map((k, i) => {
      return (
        <li key={k}>
          <label className={c('form__option form__option--custom-radio', {disabled: !this.props.disaster.maxValues})}>
            <input type='radio' name='exposure-layer' value={k} onChange={(e) => { this.props._setVisibleLayer(e.target.value); }} checked={k === layer}/>
            <span className='form__option__text'>{config.control['exposure'][k]}</span>
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
        </div>
    );
  }
}

const selector = (state) => {
  return {
    exposureLayer: state.visibleLayer
  };
};

const dispatcher = (dispatch) => {
  return {
    _setVisibleLayer: (layer) => { dispatch(setVisibleLayer(layer)); }
  };
};

export default connect(selector, dispatcher)(AnalysisLayerControl);
