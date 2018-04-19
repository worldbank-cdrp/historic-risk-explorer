import React from 'react';
import T from 'prop-types';
import c from 'classnames';
import config from '../config';

class AnalysisLayerControl extends React.Component {
  render () {
    const { onLevelChange, disaster, exposureLevel } = this.props;
    const options = Object.keys(config.control['exposure']);

    return (
        <div className='map-layer__actions'>
          <p className='map-layer__title'>LEVEL</p>
          <ul>
            {options.map(option => (
              <li key={option}>
                <label className={c('form__option form__option--custom-radio', {disabled: !disaster.maxValues})}>
                  <input type='radio' name='exposure-layer' value={option} onChange={() => { onLevelChange(option); }} checked={option === exposureLevel}/>
                  <span className='form__option__text'>{config.control['exposure'][option]}</span>
                  <span className='form__option__ui'></span>
                </label>
              </li>
            ))}
          </ul>
        </div>
    );
  }
}

AnalysisLayerControl.propTypes = {
  onLevelChange: T.func,
  disaster: T.object,
  exposureLevel: T.string
};

export default AnalysisLayerControl;
