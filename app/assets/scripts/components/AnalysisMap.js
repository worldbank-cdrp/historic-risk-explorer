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

import { setCurrentLegendMetricVal } from '../actions/action-creators';

import AnalysisLayerControl from './AnalysisLayerControl';
import AnalysisMapLegend from './AnalysisMapLegend';

class AnalysisMap extends Component {
  constructor (props) {
    super(props);
    this._loadLayers = this._loadLayers.bind(this);
    this._removeLayers = this._removeLayers.bind(this);
    this._addNavigation = this._addNavigation.bind(this);
    this._updateVisibleLayers = this._updateVisibleLayers.bind(this);
  }
  static propTypes = {
    _setCurrentLegendMetricVal: PropTypes.func.isRequired,
    disaster: PropTypes.object.isRequired,
    overlayMetric: PropTypes.string.isRequired,
    valueType: PropTypes.string.isRequired,
    visibleLayer: PropTypes.object.isRequired
  }
  _loadLayers (props) {
    // base layer
    if (props.disaster.dmetric) {
      let id = `${config.mapLayers[props.disaster.dmetric].id}-${props.disaster.c}`;
      this.querySource = id;
      let footprintSource = makeFootPrintSource(props.disaster);
      this._map.addSource(id, footprintSource);
      this._map.addLayer(makeFootPrintLayer(props.disaster, id));
      this.layers.push(id);
      // add & hide overlay layers
      if (this._map.getLayer(id)) {
        Object.keys(config.mapLayers['exposure'].layers.ids).forEach((key) => {
          // add layer
          let layerIdBase = config.mapLayers['exposure'].layers.ids[key];
          let exposureLayer = makeExposureLayer(props.disaster, layerIdBase);
          this._map.addLayer(exposureLayer);
          this.layers.push(exposureLayer.id);
          // hide layer
          let layerId = `${config.mapLayers['exposure'].id}-${layerIdBase}`;
          if (this._map.getLayer(layerId)) {
            this._map.setLayoutProperty(layerId, 'visibility', 'none');
          }
        });
      }
    }
  }

  _removeLayers () {
    this.layers.forEach(layer => { if (this._map.getLayer(layer)) { this._map.removeLayer(layer); } });
    Object.keys(this._map.style.sourceCaches).forEach((source) => {
      if (source !== 'composite') { if (this._map.getSource(source)) { this._map.removeSource(source); } }
    });
  }

  _addNavigation () {
    this._map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
  }

  _updateVisibleLayers (current, next) {
    let nextLayer = new RegExp(next.visibleLayer.layer);
    const idKeys = Object.keys(config.mapLayers['exposure'].layers.ids);
    const sameLayer = next.visibleLayer.layer === current.visibleLayer.layer;
    // if next and current layers are not the same, make all layers invisible.
    if (!sameLayer) {
      idKeys.forEach(l => {
        let lId = `${config.mapLayers['exposure'].id}-${config.mapLayers['exposure'].layers.ids[l]}`;
        l = this._map.getStyle().layers.find(lyr => lyr.id === lId);
        if (l) { this._map.setLayoutProperty(l.id, 'visibility', 'none'); }
      });
    }
    // make visible/invisible next layers
    idKeys.forEach(l => {
      let lConfig = config.mapLayers['exposure'].layers.ids[l];
      if (nextLayer.test(lConfig)) {
        let lId = `${config.mapLayers['exposure'].id}-${config.mapLayers['exposure'].layers.ids[l]}`;
        l = this._map.getStyle().layers.find(lyr => lyr.id === lId);
        l.layout.visibility === 'visible' ? this._map.setLayoutProperty(l.id, 'visibility', 'none') : this._map.setLayoutProperty(l.id, 'visibility', 'visible');
      }
    });
  }

  componentWillMount () {
    this.sources = [];
    this.layers = [];
  }

  componentDidMount () {
    mapboxgl.accessToken = config.mapboxApiKey;
    this._map = new mapboxgl.Map({
      container: 'analysisMap',
      style: config['disaster-data'],
      minZoom: 4,
      maxZoom: 13
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
    this._map.on('mousemove', (e) => {
      let queriedFeatures = this._map.queryRenderedFeatures(e.point);
      queriedFeatures = queriedFeatures.find((f) => this.layers.includes(f.layer.id));
      if (queriedFeatures) {
        const metricPropKey = config.legend[this.props.overlayMetric].layerProp;
        const metricVal = queriedFeatures.properties[metricPropKey];
        this.props._setCurrentLegendMetricVal(metricVal);
      } else {
        this.props._setCurrentLegendMetricVal(null);
      }
    });
  }
  componentWillReceiveProps (nextProps) {
    if (this.props.overlayMetric !== nextProps.overlayMetric) { return; }
    if (this.props.valueType !== nextProps.valueType) { return; }
    if (this.props.disaster !== nextProps.disaster) {
      this._map.fitBounds(nextProps.disaster.bbox, {
        animate: false,
        padding: config.boundsPadding
      });
      this._removeLayers();
      this._loadLayers(nextProps);
      return;
    }
    this._updateVisibleLayers(this.props, nextProps);
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
    valueType: state.map.valType,
    visibleLayer: state.visibleLayer,
    overlayMetric: state.overlayMetric.metric
  };
};

const dispatcher = (dispatch) => {
  return {
    _setCurrentLegendMetricVal: (val) => dispatch(setCurrentLegendMetricVal(val))
  };
};

export default connect(selector, dispatcher)(AnalysisMap);
