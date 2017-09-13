import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import PropTypes from 'prop-types';
import { makeMainMap, fitLayerBounds } from '../utils/map';
import config from '../config';

class MainMap extends Component {
  static propTypes = {
    disaster: PropTypes.object
  }
  componentDidMount () {
    mapboxgl.accessToken = config.mapboxApiKey;
    const map = new mapboxgl.Map({
      container: 'map',
      style: config['disaster-cover']
    });
    map.on('load', () => {
      makeMainMap(this.props.disaster);
      map.on('sourcedata', () => {
        fitLayerBounds(map);
      });
    });
  }
  render () {
    return (
      <div className='map-canvas'>
        <div id='map'/>
      </div>
    );
  }
}

export default MainMap;
