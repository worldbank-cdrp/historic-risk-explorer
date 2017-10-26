import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import mapboxgl from 'mapbox-gl';
import config from '../config';
import {
  makeExposureLayer,
  makeFootPrintSource,
  makeFootPrintLayer
 } from '../utils/map';

import AnalysisLayerControl from './AnalysisLayerControl';
import AnalysisMapLegend from './AnalysisMapLegend';

class AnalysisMap extends Component {
  constructor (props) {
    super(props);
    this._loadLayers = this._loadLayers.bind(this);
    this._addNavigation = this._addNavigation.bind(this);
    this._updateVisibleLayers = this._updateVisibleLayers.bind(this);
  }
  static propTypes = {
    disaster: PropTypes.object.isRequired,
    visibleLayer: PropTypes.object.isRequired
  }
  _loadLayers (props) {
    // base layer
    if (props.disaster.dmetric) {
      let id = `${config.mapLayers[props.disaster.dmetric].id}-${props.disaster.c}`;
      let footprintSource = makeFootPrintSource(props.disaster);
      this._map.addSource(id, footprintSource);
      this._map.addLayer(makeFootPrintLayer(props.disaster, id));
    }
    // add & hide overlay layers
    Object.keys(config.mapLayers['exposure-loss'].layers.ids).forEach((key) => {
      // add layer
      let layerIdBase = config.mapLayers['exposure-loss'].layers.ids[key];
      this._map.addLayer(makeExposureLayer(props.disaster, layerIdBase));
      // hide layer
      let layerId = `${config.mapLayers['exposure-loss'].id}-${layerIdBase}`;
      if (this._map.getLayer(layerId)) {
        this._map.setLayoutProperty(layerId, 'visibility', 'none');
      }
    });
  }
  _addNavigation () {
    this._map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
  }

  _updateVisibleLayers (current, next) {
    let nextLayer = new RegExp(next.visibleLayer.layer);
    const idKeys = Object.keys(config.mapLayers['exposure-loss'].layers.ids);
    const sameLayer = next.visibleLayer.layer === current.visibleLayer.layer;
    // if next and current layers are not the same, make all layers invisible.
    if (!sameLayer) {
      idKeys.forEach(l => {
        let lId = `${config.mapLayers['exposure-loss'].id}-${config.mapLayers['exposure-loss'].layers.ids[l]}`;
        l = this._map.getStyle().layers.find(lyr => lyr.id === lId);
        if (l) { this._map.setLayoutProperty(l.id, 'visibility', 'none'); }
      });
    }
    // make visible/invisible next layers
    idKeys.forEach(l => {
      let lConfig = config.mapLayers['exposure-loss'].layers.ids[l];
      if (nextLayer.test(lConfig)) {
        let lId = `${config.mapLayers['exposure-loss'].id}-${config.mapLayers['exposure-loss'].layers.ids[l]}`;
        l = this._map.getStyle().layers.find(lyr => lyr.id === lId);
        l.layout.visibility === 'visible' ? this._map.setLayoutProperty(l.id, 'visibility', 'none') : this._map.setLayoutProperty(l.id, 'visibility', 'visible');
      }
    });
  }

  componentDidMount () {
    mapboxgl.accessToken = config.mapboxApiKey;
    this._map = new mapboxgl.Map({
      container: 'analysisMap',
      style: config['disaster-data']
    });
    this._map.scrollZoom.disable();
    // remove scroll zoom
    this._addNavigation();
    this._map.fitBounds(this.props.disaster.bbox, {
      animate: false,
      padding: config.boundsPadding
    });
    // add layers, then hide them
    this._map.on('load', () => {
      this._loadLayers(this.props);
    });
  }
  componentWillReceiveProps (nextProps) {
    if (this.props.disaster !== nextProps.disaster) {
      this._map.fitBounds(nextProps.disaster.bbox, {
        animate: false,
        padding: config.boundsPadding
      });
      this._updateVisibleLayers(this.props, nextProps);
    }
  }
  render () {
    return (
      <div className='map-canvas'>
        <div className='inner'>
          <AnalysisLayerControl disaster={this.props.disaster} />
          <AnalysisMapLegend />
        </div>
        <div id='analysisMap'/>
      </div>
    );
  }
}

const selector = (state) => {
  return {
    visibleLayer: state.visibleLayer
  };
};

export default connect(selector)(AnalysisMap);
