import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import mapboxgl from 'mapbox-gl';
import config from '../config';

import {
  makeExposureLayer,
  makeFootPrintSource,
  makeFootPrintLayer
 } from '../utils/map';

import {
  setCurrentLegendMetricVal,
  setCurrentLegendName,
  setMaxValue
} from '../actions/action-creators';

import AnalysisLayerControl from './AnalysisLayerControl';
import AnalysisMapLegend from './AnalysisMapLegend';

const METRICS = {
  exposure: 'exp',
  loss: 'aloss',
  'loss-ratio': 'lr'
};

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
    _setCurrentLegendName: PropTypes.func.isRequired,
    _setMaxValue: PropTypes.func.isRequired,
    disaster: PropTypes.object.isRequired,
    overlayMetric: PropTypes.string.isRequired,
    valueType: PropTypes.string.isRequired,
    visibleLayer: PropTypes.object.isRequired,
    overlayFootprintState: PropTypes.bool.isRequired
  }
  _loadLayers (props) {
    if (props.disaster.maxValues) {
      // add & hide overlay layers
      const level = this._getLayerLevel(props.visibleLayer, this._map.getZoom());
      const metric = METRICS[props.overlayMetric];
      const maxValue = this.props.disaster.maxValues[metric][level];
      // Set the max value based on the current level (admin, grid1, grid5, grid20)
      // and the metric being visualized.
      this.props._setMaxValue(maxValue);
      Object.keys(config.mapLayers['exposure'].layers.ids).forEach((key) => {
        // add layer
        let layerIdBase = config.mapLayers['exposure'].layers.ids[key];
        let exposureLayer = makeExposureLayer(props.disaster, layerIdBase, metric);
        this._map.addLayer(exposureLayer);
        this.layers.push(exposureLayer.id);
        // hide layer
        let layerId = `${config.mapLayers['exposure'].id}-${layerIdBase}`;
        if (this._map.getLayer(layerId)) {
          const visibility = level === layerIdBase ? 'visible' : 'none';
          this._map.setLayoutProperty(layerId, 'visibility', visibility);
        }
      });
    }

    // Footprint layer.
    if (props.disaster.footprint) {
      let id = `ft-${props.disaster.footprint.name}`;
      this.querySource = id;
      let footprintSource = makeFootPrintSource(props.disaster);
      this._map.addSource(id, footprintSource);
      this._map.addLayer(makeFootPrintLayer(props.disaster, id));
      this.layers.push(id);
      const visibility = this.props.overlayFootprintState ? 'visible' : 'none';
      this._map.setLayoutProperty(id, 'visibility', visibility);
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
    if (current.overlayMetric !== next.overlayMetric) { return; }

    let nextLayer = new RegExp(next.visibleLayer.layer);
    const idKeys = Object.keys(config.mapLayers['exposure'].layers.ids);
    // make all layers invisible
    const alreadyVisible = this._map.getStyle().layers.filter(l =>
      l.id.startsWith('exposure-loss-') &&
      l.layout.visibility === 'visible'
    ).map(l => l.id);
    alreadyVisible.forEach(l => {
      this._map.setLayoutProperty(l, 'visibility', 'none');
    });
    // Make next layer visible, or keep it hidden if it was already visible
    idKeys.forEach(l => {
      let lConfig = config.mapLayers['exposure'].layers.ids[l];
      if (nextLayer.test(lConfig)) {
        let lId = `${config.mapLayers['exposure'].id}-${config.mapLayers['exposure'].layers.ids[l]}`;
        l = this._map.getStyle().layers.find(lyr => lyr.id === lId);
        if (!alreadyVisible.includes(l.id)) {
          this._map.setLayoutProperty(l.id, 'visibility', 'visible');
        }
      }
    });
  }

  _getLayerLevel (visibleLayer, zoom) {
    let level = visibleLayer.layer || 'admin';
    if (level === 'grid') {
      const zooms = config.mapLayers.exposure.layers.zooms;
      level = _.findKey(zooms, z => zoom > z.minZoom && zoom <= z.maxZoom);
    }
    return level;
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
        if (queriedFeatures.properties.name) {
          this.props._setCurrentLegendName(queriedFeatures.properties.name);
        }
      } else {
        this.props._setCurrentLegendMetricVal(null);
        this.props._setCurrentLegendName(null);
      }
    });
    this._map.on('zoomend', () => {
      const metric = METRICS[this.props.overlayMetric];
      const level = this._getLayerLevel(this.props.visibleLayer, this._map.getZoom());
      const layerMaxValue = this.props.disaster.maxValues[metric][level];
      this.props._setMaxValue(layerMaxValue);
    });
  }
  componentWillReceiveProps (nextProps) {
    if (this.props.disaster !== nextProps.disaster) {
      this._map.fitBounds(nextProps.disaster.bbox, {
        animate: false,
        padding: config.boundsPadding
      });
      this._removeLayers();
      this._loadLayers(nextProps);
      return;
    }

    if (this.props.overlayFootprintState !== nextProps.overlayFootprintState && this.props.disaster.footprint) {
      let id = `ft-${this.props.disaster.footprint.name}`;
      const visibility = nextProps.overlayFootprintState ? 'visible' : 'none';
      this._map.setLayoutProperty(id, 'visibility', visibility);
    }

    if (this.props.disaster.maxValues) {
      const metric = METRICS[nextProps.overlayMetric];
      const level = this._getLayerLevel(nextProps.visibleLayer, this._map.getZoom());
      const maxValue = this.props.disaster.maxValues[metric][level];
      // Set the max value based on the current level (admin, grid1, grid5, grid20)
      // and the metric being visualized.
      this.props._setMaxValue(maxValue);

      // If the metric changed, repaint the layers.
      if (this.props.overlayMetric !== nextProps.overlayMetric) {
        // Switch which color is being used to visualize data on the map
        this.layers.filter(l => l.startsWith('exposure-loss-'))
          .forEach(l => {
            this._map.setPaintProperty(l, 'fill-color', {
              property: metric,
              type: 'exponential',
              'colorSpace': 'lab',
              stops: [
                [0, config.minColor],
                [maxValue, config.maxColor]
              ]
            });
          });
      }

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
    valueType: state.map.valType,
    visibleLayer: state.visibleLayer,
    overlayMetric: state.overlayMetric.metric,
    overlayFootprintState: state.overlayFootprint.enabled
  };
};

const dispatcher = (dispatch) => {
  return {
    _setCurrentLegendMetricVal: (val) => dispatch(setCurrentLegendMetricVal(val)),
    _setCurrentLegendName: (name) => dispatch(setCurrentLegendName(name)),
    _setMaxValue: maxValue => dispatch(setMaxValue(maxValue))
  };
};

export default connect(selector, dispatcher)(AnalysisMap);
