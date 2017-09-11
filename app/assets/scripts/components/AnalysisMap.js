import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import mapboxgl from 'mapbox-gl';
import config from '../config';
import { makeExposureGrid } from '../utils/map';

import AnalysisLayerControl from './AnalysisLayerControl';

class AnalysisMap extends Component {
  constructor (props) {
    super(props);
    this._loadLayers = this._loadLayers.bind(this);
    this._addNavigation = this._addNavigation.bind(this);
  }
  static propTypes = {
    disaster: PropTypes.object,
    visibleLayer: PropTypes.object
  }
  _loadLayers () {
    // exposure layers
    this._map.addLayer(makeExposureGrid(this.props.disaster, 'twentyFive'));
    this._map.addLayer(makeExposureGrid(this.props.disaster, 'five'));
    this._map.addLayer(makeExposureGrid(this.props.disaster, 'one'));
    // hide layers
    Object.keys(config.exposureGrids).forEach((key) => {
      let id = `${config.exposure}-${key}`;
      if (this._map.getLayer(id)) {
        this._map.setLayoutProperty(id, 'visibility', 'none');
      }
    });
  }
  _addNavigation () {
    this._map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
  }
  componentDidMount () {
    mapboxgl.accessToken = config.mapboxApiKey;
    this._map = new mapboxgl.Map({
      container: 'analysisMap',
      style: config['disaster-data']
    }).fitBounds(this.props.disaster.bbox, {
      animate: false,
      padding: config.boundsPadding
    });
    // add layers, then hide them
    this._map.on('load', () => {
      this._loadLayers();
      this._addNavigation();
    });
  }
  componentWillReceiveProps (nextProps) {
    // if the selected layer is visible, make invisible on click.
    // do the opposite if it is not visible
    let selectedLayer = nextProps.visibleLayer.layer;
    let layerVisibility = this._map.getStyle().layers.find((l) => {
      return l.source === selectedLayer;
    }).layout.visibility;
    if (layerVisibility === 'none') {
      this._map.setLayoutProperty(nextProps.visibleLayer.layer, 'visibility', 'visible');
    } else {
      this._map.setLayoutProperty(nextProps.visibleLayer.layer, 'visibility', 'none');
    }
  }
  render () {
    return (
      <div className='map-canvas'>
        <AnalysisLayerControl />
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
