'use-strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    disaster: PropTypes.object.isRequired
  }

  _loadLayers (props) {
    // base layer
    if (props.disaster.dmetric) {
      let id = `${config.mapLayers[props.disaster.dmetric].id}-${props.disaster.c}`;
      let footprintSource = makeFootPrintSource(props.disaster);
      this._preDisasterMap.addSource(id, footprintSource);
      this._preDisasterMap.addLayer(makeFootPrintLayer(props.disaster, id));
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
    this._preDisasterMap.scrollZoom.disable();
    this._postDisasterMap.scrollZoom.disable();
    this._map = new Compare(this._preDisasterMap, this._postDisasterMap);
    this._preDisasterMap.on('load', () => {
      this._loadLayers(this.props);
    });
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.disaster !== nextProps.disaster) {
      this._preDisasterMap.fitBounds(nextProps.disaster.bbox, {
        animate: false,
        padding: config.boundsPadding
      });
      this._postDisasterMap.fitBounds(nextProps.disaster.bbox, {
        animate: false,
        padding: config.boundsPadding
      });
      this._loadLayers(nextProps);
    }
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

function selector (state) {
  return {
    disaster: state.disaster
  };
}

export default connect(selector)(SliderMap);
