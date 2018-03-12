import React, { Component } from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';
import _ from 'lodash';

import mapboxgl from 'mapbox-gl';
import config from '../config';

import {
  makeExposureLayer,
  makeFootPrintLayer,
  getExposureLayerFill
 } from '../utils/map';

import {
  setVisibleLayer,
  setCurrentLegendMetricVal,
  setCurrentLegendName
} from '../actions/action-creators';

import AnalysisLayerControl from './AnalysisLayerControl';
import AnalysisMapLegend from './AnalysisMapLegend';

mapboxgl.accessToken = config.mapboxApiKey;

const METRICS = {
  exposure: 'exp',
  loss: 'aloss',
  'loss-ratio': 'lr'
};

const getDisasterId = disaster => `${disaster.c}-${disaster.y}-${disaster.t}`;

// Loop over each layer in the config, calling a function with the base name
// and the full layer name.
// The layer id is the one in config.mapLayers.exposure.layers.ids
// The full name is config.mapLayers.exposure.id + the id. This results in,
// for example, "exposure-loss-admin"
const forEachConfigLayer = fn => {
  const disasterLayerIds = config.mapLayers.exposure.layers.ids;
  Object.keys(disasterLayerIds).forEach(key => {
    const id = disasterLayerIds[key];
    const fullName = `${config.mapLayers.exposure.id}-${id}`;
    fn(id, fullName);
  });
};

// Returns the layer that should be visible given the exposure level and
// the map zoom.
// If the level is grid the layer depends on the zoom.
const getLayerLevel = (level, zoom) => {
  if (level === 'grid') {
    const zooms = config.mapLayers.exposure.layers.zooms;
    level = _.findKey(zooms, z => zoom > z.minZoom && zoom <= z.maxZoom);
  }
  return level;
};

class AnalysisMap extends Component {
  constructor (props) {
    super(props);

    // Store the zoom in the state so when the map zoom changes we do
    // a re-render. This is needed to refresh the legend.
    this.state = {
      mapZoom: 4
    };

    this.onLevelChange = this.onLevelChange.bind(this);
  }

  onLevelChange (level) {
    this.props._setVisibleLayer(level);
  }

  setupMap () {
    this.mapLoaded = false;

    this.theMap = new mapboxgl.Map({
      container: this.refs.map,
      style: config['disaster-data'],
      minZoom: 4,
      maxZoom: 13
    });

    this.theMap.scrollZoom.disable();

    this.theMap.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    // Disable map rotation using right click + drag.
    this.theMap.dragRotate.disable();

    // Disable map rotation using touch rotation gesture.
    this.theMap.touchZoomRotate.disableRotation();

    // Remove compass.
    document.querySelector('.mapboxgl-ctrl .mapboxgl-ctrl-compass').remove();

    this.theMap.on('load', () => {
      this.mapLoaded = true;
      this.setupData(this.props);
    });

    this.theMap.on('mousemove', (e) => {
      // Get layers to query.
      let layerNames = [];
      forEachConfigLayer((id, fullName) => {
        if (this.theMap.getLayer(fullName)) {
          layerNames.push(fullName);
        }
      });

      const queriedFeature = this.theMap.queryRenderedFeatures(e.point, {layers: layerNames})[0];
      if (queriedFeature) {
        const featProps = queriedFeature.properties;
        const metricPropKey = config.legend[this.props.overlayMetric].layerProp;
        const metricVal = featProps[metricPropKey];
        this.props._setCurrentLegendMetricVal(metricVal);
        if (featProps.name) {
          this.props._setCurrentLegendName(featProps.name);
        }
      } else {
        this.props._setCurrentLegendMetricVal(null);
        this.props._setCurrentLegendName(null);
      }
    });

    this.theMap.on('zoomend', (e) => {
      this.setState({ mapZoom: this.theMap.getZoom() });
    });

    this.theMap.fitBounds(this.props.disaster.bbox, {
      animate: false,
      padding: config.boundsPadding
    });
  }

  setupData (props) {
    if (!this.mapLoaded) return;

    const { disaster, overlayFootprintState, overlayMetric, exposureLevel } = props;

    // Footprint layer.
    if (disaster.footprint) {
      const footprintLayerId = 'footprint-image';
      const footprintLayer = makeFootPrintLayer(footprintLayerId, disaster);
      this.theMap.addLayer(footprintLayer);

      // Initial visibility.
      const visibility = overlayFootprintState ? 'visible' : 'none';
      this.theMap.setLayoutProperty(footprintLayerId, 'visibility', visibility);
    }

    const metric = METRICS[overlayMetric];
    // Add all the layers.
    forEachConfigLayer((id, fullName) => {
      const exposureLayer = makeExposureLayer(disaster, id, metric);
      this.theMap.addLayer(exposureLayer);

      // Initial visibility.
      // The grid layers already have zoom limits, therefore all of them can
      // be visible at the same time. Mapbox will take care of showing
      // the correct one depending on the zoom.
      const layerType = id === 'admin' ? 'admin' : 'grid';
      const visibility = exposureLevel === layerType ? 'visible' : 'none';
      this.theMap.setLayoutProperty(fullName, 'visibility', visibility);
    });
  }

  componentDidMount () {
    this.setupMap();
  }

  componentWillUnmount () {
    if (this.theMap) {
      this.theMap.remove();
    }
  }

  componentWillReceiveProps (nextProps) {
    const currId = getDisasterId(this.props.disaster);
    const nextId = getDisasterId(nextProps.disaster);
    // If the disaster changes update the map
    if (currId !== nextId) {
      // Remove all layers.
      if (this.theMap.getSource('footprint-image')) {
        // Not every disaster has a footprint.
        this.theMap.removeLayer('footprint-image');
        this.theMap.removeSource('footprint-image');
      }
      forEachConfigLayer((id, fullName) => {
        this.theMap.removeLayer(fullName);
        this.theMap.removeSource(fullName);
      });

      // Setup new data.
      this.setupData(nextProps);

      // Move the map.
      this.theMap.fitBounds(nextProps.disaster.bbox, {
        animate: false,
        padding: config.boundsPadding
      });

      // All done.
      return;
    }

    // Show / hide footprint layer accordingly.
    if (this.props.overlayFootprintState !== nextProps.overlayFootprintState) {
      const visibility = nextProps.overlayFootprintState ? 'visible' : 'none';
      this.theMap.setLayoutProperty('footprint-image', 'visibility', visibility);
    }

    // Repaint the layers when the metric changes.
    if (this.props.overlayMetric !== nextProps.overlayMetric) {
      // Get all the layers
      const metric = METRICS[nextProps.overlayMetric];
      forEachConfigLayer((id, fullName) => {
        const fillColor = getExposureLayerFill(nextProps.disaster, id, metric);
        this.theMap.setPaintProperty(fullName, 'fill-color', fillColor);
      });
    }

    // Switch layers based on exposure (admin | grid)
    if (this.props.exposureLevel !== nextProps.exposureLevel) {
      forEachConfigLayer((id, fullName) => {
        // Initial visibility.
        const layerType = id === 'admin' ? 'admin' : 'grid';
        const visibility = nextProps.exposureLevel === layerType ? 'visible' : 'none';
        this.theMap.setLayoutProperty(fullName, 'visibility', visibility);
      });
    }
  }

  render () {
    let maxValue = 0;

    if (this.theMap) {
      const level = getLayerLevel(this.props.exposureLevel, this.theMap.getZoom());
      const metric = METRICS[this.props.overlayMetric];
      maxValue = this.props.disaster.maxValues[metric][level];
    }

    return (
      <div className='map-canvas'>
        <div className='inner'>
          <AnalysisLayerControl
            onLevelChange={this.onLevelChange}
            disaster={this.props.disaster}
            exposureLevel={this.props.exposureLevel} />
          <AnalysisMapLegend
            overlayFootprintState={this.props.overlayFootprintState}
            overlayMetric={this.props.overlayMetric}
            currentMapVal={this.props.currentMapVal}
            currentName={this.props.currentName}
            maxValue={maxValue} />
        </div>
        <div id='analysisMap' ref='map'>{/* Map injected here */}</div>
      </div>
    );
  }
}

AnalysisMap.propTypes = {
  _setVisibleLayer: T.func,
  _setCurrentLegendMetricVal: T.func,
  _setCurrentLegendName: T.func,
  disaster: T.object,
  overlayMetric: T.string,
  exposureLevel: T.string,
  overlayFootprintState: T.bool,
  currentMapVal: T.number,
  currentName: T.string
};

const selector = (state) => {
  return {
    disaster: state.disaster,
    overlayMetric: state.overlayMetric.metric,
    overlayFootprintState: state.overlayFootprint.enabled,
    exposureLevel: state.visibleLayer.layer,
    currentMapVal: state.map.val,
    currentName: state.map.name
  };
};

const dispatcher = (dispatch) => {
  return {
    _setVisibleLayer: (...args) => dispatch(setVisibleLayer(...args)),
    _setCurrentLegendMetricVal: (...args) => dispatch(setCurrentLegendMetricVal(...args)),
    _setCurrentLegendName: (...args) => dispatch(setCurrentLegendName(...args))
  };
};

export default connect(selector, dispatcher)(AnalysisMap);
