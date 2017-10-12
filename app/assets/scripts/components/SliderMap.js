'use-strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';
import Compare from 'mapbox-gl-compare';
import config from '../config';

import {
  makeFootPrintSource,
  makeFootPrintLayer
 } from '../utils/map';

class SliderMap extends Component {
  static propTypes = {
    disaster: PropTypes.array.isRequired
  }

  _loadLayers () {
    // base layer
    if (this.props.disaster.dmetric) {
      let id = `${config.mapLayers[this.props.disaster.dmetric].id}-${this.props.disaster.c}`;
      let footprintSource = makeFootPrintSource(this.props.disaster);
      this._preDisasterMap.addSource(id, footprintSource);
      this._preDisasterMap.addLayer(makeFootPrintLayer(this.props.disaster, id));
    }
  }

  componentDidMount () {
    mapboxgl.accessToken = config.mapboxApiKey;
    this._preDisasterMap = new mapboxgl.Map({
      container: 'pre-disaster',
      style: config['disaster-data'],
      center: [0, 0],
      zoom: [0]
    }).fitBounds(this.props.disaster.bbox, { animate: false, padding: config.boundsPadding });
    this._postDisasterMap = new mapboxgl.Map({
      container: 'post-disaster',
      style: config['disaster-data'],
      center: [0, 0],
      zoom: [0]
    }).fitBounds(this.props.disaster.bbox, { animate: false, padding: config.boundsPadding });
    this._map = new Compare(this._preDisasterMap, this._postDisasterMap);
    this._preDisasterMap.on('load', () => {
      this._loadLayers();
    });
  }

  render () {
    return (
      <div id="compareMap" className='compare-map-canvas'>
        <div id='pre-disaster' className='compare-map-canvas' />
        <div id='post-disaster' className='compare-map-canvas' />
      </div>
    );
  }
}

export default SliderMap;
