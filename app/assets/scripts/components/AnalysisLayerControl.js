import React, { Component} from 'react';
import config from '../config';

class AnalysisLayerControl extends Component {
  constructor (props) {
    super(props);
    this.renderLayerSelect = this.renderLayerSelect.bind(this);
  }
  renderLayerSelect () {
    return Object.keys(config.exposureGrids).map((k, i) => {
      const layer = `${config.exposure}-${k}`;
      return (
        <li key={i}>
          <button value={layer} />
          <p>{config.exposureResolution[k]}</p>
        </li>
      );
    });
  }
  render () {
    return (
      <div>
        <p>Level</p>
        <ul>
         {this.renderLayerSelect()}
        </ul>
      </div>
    );
  }
}

export default AnalysisLayerControl;
