'use-strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';
import Compare from 'mapbox-gl-compare';
import config from '../config';

import {
  makeSliderLayer,
  makeSliderSource
 } from '../utils/map';

class SliderMap extends Component {
  _loadLayers (props, map, time) {
    // base layer
    let id = props.disaster[time];
    let sliderSource = makeSliderSource(props.disaster, time);
    this[map].addSource(id, sliderSource);
    this[map].addLayer(makeSliderLayer(id));
  }

  _removeLayers () {
    // remove pre and post layers
    ['pre', 'post'].forEach(time => {
      let id = this.props.disaster[time];
      let map = `_${time}DisasterMap`;
      if (this._getLayer(id)) { this[map].removeLayer(id); }
    });
    // remove source for pre and post.
    Object.keys(this._map.style.sourceCaches).forEach((source) => {
      if (source !== 'composite') { if (this._map.getSource(source)) { this._map.removeSource(source); } }
    });
  }

  componentDidMount () {
    mapboxgl.accessToken = config.mapboxApiKey;
    this._preDisasterMap = new mapboxgl.Map({
      container: this.refs.before,
      style: config['disaster-data'],
      center: this.props.disaster.sliderCenter,
      zoom: this.props.disaster.sliderZoom
    });
    this._postDisasterMap = new mapboxgl.Map({
      container: this.refs.after,
      style: config['disaster-data'],
      center: this.props.disaster.sliderCenter,
      zoom: this.props.disaster.sliderZoom
    });
    this._preDisasterMap.scrollZoom.disable();
    this._postDisasterMap.scrollZoom.disable();
    this._map = new Compare(this._preDisasterMap, this._postDisasterMap);
    this._preDisasterMap.on('load', () => {
      this._loadLayers(this.props, '_preDisasterMap', 'pre');
    });
    this._postDisasterMap.on('load', () => {
      this._loadLayers(this.props, '_postDisasterMap', 'post');
    });
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.disaster !== nextProps.disaster) {
      this._removeLayers();
      this._preDisasterMap.fitBounds(nextProps.disaster.sliderBbox, {
        animate: false,
        padding: config.boundsPadding
      });
      this._postDisasterMap.fitBounds(nextProps.disaster.sliderBbox, {
        animate: false,
        padding: config.boundsPadding
      });
    }
  }

  render () {
    return (
      <div id="compareMap" className='compare-map-canvas'>
        <div id='pre-disaster' className='compare-map-canvas' ref='before' />
        <div id='post-disaster' className='compare-map-canvas' ref='after' />
      </div>
    );
  }
}

SliderMap.propTypes = {
  disaster: PropTypes.object.isRequired
};

export default SliderMap;
