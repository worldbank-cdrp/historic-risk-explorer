import React from 'react'
import PropTypes from 'prop-types'

export default class Tooltip extends React.Component {

  static propTypes = {
    feature: PropTypes.object.isRequired
  };

  render() {
    let name = this.props.feature.properties.name;
    return (
      <div className='mapboxgl-popup mapboxgl-popup-anchor-bottom'>
        <div className='mapboxgl-popup-tip'></div>
          <div className='mapboxgl-popup-content'>
            {name}
          </div>
      </div>
    );
  }
}