import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import PropTypes from 'prop-types';
import config from '../config';
import { makeExposureGrid, fitLayerBounds } from '../utils/map';

class AnalysisMap extends Component {
  static propTypes = {
    disaster: PropTypes.object
  }
  componentDidMount () {
    mapboxgl.accessToken = config.mapboxApiKey;
    const map = new mapboxgl.Map({
      container: 'analysisMap',
      style: config['disaster-data']
    });
    // add layers, then hide them
    map.on('load', () => {
      map.addLayer(makeExposureGrid(this.props.disaster, 'twentyFive'));
      map.addLayer(makeExposureGrid(this.props.disaster, 'five'));
      map.addLayer(makeExposureGrid(this.props.disaster, 'one'));
    });
  }
  render () {
    return (
      <div className='map-canvas'>
        <div id='analysisMap'/>
      </div>
    );
  }
}

export default AnalysisMap;
