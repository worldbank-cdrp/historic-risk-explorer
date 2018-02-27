import React from 'react'
import PropTypes from 'prop-types'

export default class Tooltip extends React.Component {

  static propTypes = {
    feature: PropTypes.object.isRequired
  };

  render() {
    let name = this.props.feature.properties.name;
    return (
      <div className='flex-parent-inline flex-parent--center-cross flex-parent--column absolute bottom map-legend'>
        <div className="flex-child px12 py12 bg-gray-dark color-white shadow-darken10 round txt-s w240 clip txt-truncate">
          {name}
        </div>
        <span className="flex-child color-gray-dark triangle triangle--d"></span>
      </div>
    );
  }
}
