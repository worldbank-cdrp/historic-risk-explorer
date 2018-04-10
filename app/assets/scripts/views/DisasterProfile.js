'use strict';

import React, { Component } from 'react';
import T from 'prop-types';
import config from '../config';
import { map } from 'lodash';
import { connect } from 'react-redux';
import c from 'classnames';
import {
  clearDisaster,
  setOverlayMetric,
  setDisaster,
  setPaginationDirection,
  setCurrentLegendMetricVal,
  setCurrentLegendName,
  setOverlayFootprintState
} from '../actions/action-creators';

import {
  nextDisaster,
  nextDisasterText,
  makeNextDisaster
} from '../utils/pagination';

import { makeImage } from '../utils/disaster';

import AnalysisMap from '../components/AnalysisMap';
import SliderMap from '../components/SliderMap';

class DisasterProfile extends Component {
  constructor (props) {
    super(props);
    this.makeMetricButtons = this.makeMetricButtons.bind(this);
    this.makeProfilePath = this.makeProfilePath.bind(this);
    this.renderDisasterProfile = this.renderDisasterProfile.bind(this);
    this.renderSliderMap = this.renderSliderMap.bind(this);
    this.makeHeaderListElements = this.makeHeaderListElements.bind(this);
    this.makeDataListElements = this.makeDataListElements.bind(this);
  }

  componentWillMount () {
    let disasterInfo = this.props.match.url.split('/')[1].split('-');
    let disaster = this.props.disasters.find(d => `${d.c}-${d.y}` === `${disasterInfo[0]}-${disasterInfo[1]}`);
    disaster.index = this.props.disasters.findIndex(d => `${d.c}-${d.y}` === `${disasterInfo[0]}-${disasterInfo[1]}`);
    this.props._setDisaster(disaster);
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      let disasterInfo = nextProps.location.pathname.split('/')[1].split('-');
      let disaster = this.props.disasters.find(d => `${d.c}-${d.y}` === `${disasterInfo[0]}-${disasterInfo[1]}`);
      disaster.index = this.props.disasters.findIndex(d => `${d.c}-${d.y}` === `${disasterInfo[0]}-${disasterInfo[1]}`);
      nextProps._setDisaster(disaster);
    }
    if (this.props.disaster !== nextProps.disaster) { window.scrollTo(0, 0); }
  }

  componentWillUnmount () {
    this.props._clearDisaster();
  }

  makeMetricButtons () {
    let btns = ['Loss', 'Exposure', 'Loss Ratio'].map((m, i) => {
      const metricName = m.replace(' ', '-').toLowerCase();
      const cl = c('button button--large', {
        'button--base-bounded': this.props.overlayMetric !== metricName,
        'button--base': this.props.overlayMetric === metricName,
        'disabled': !this.props.disaster.maxValues
      });
      return (
        <li key={m}><button className={cl}
          onClick={() => {
            this.props._setOverlayMetric(metricName);
            this.props._setCurrentLegendMetricVal(null);
            this.props._setCurrentLegendName(null);
          }}>{m}</button></li>
      );
    });

    const cl = c('button button--large button--footprint', {
      'button--base-bounded': !this.props.overlayFootprintState,
      'button--base': this.props.overlayFootprintState,
      'disabled': !this.props.disaster.footprint
    });

    btns.push(
      <li key='footprint'>
        <button className={cl}
          onClick={() => {
            this.props._setOverlayFootprintState(!this.props.overlayFootprintState);
          }}>Hazard Footprint</button>
      </li>
    );
    return btns;
  }

  makeDataListElements (metric) {
    let metricData = this.props.disaster[metric];
    return map(metricData, (m, k) => {
      if (!m) { return (<li key={`${k}-${m}`} ><h3 className='heading--small'>unknown<small>{k}</small></h3></li>); }
      if (metric === 'lossratio') { return (<li key={`${k}-${m}`}><h3 className='heading--small'>{`${m}%`}<small>{k}</small></h3></li>); }
      return (<li key={`${k}-${m}`} ><h3 className='heading--small'>{`$${m}M`}<small>{k}</small></h3></li>);
    });
  }

  makeProfilePath (profile) { return `assets/profiles/${profile}.pdf`; }

  makeHeaderListElements () {
    return config.profileHeader.map((element) =>
      this.props.disaster[element.info]
      ? (
          <li key={`${this.props.disaster.c}-${element.header}`} className='metrics__item'>
            <h1>{element.header}</h1>
            <p>{this.props.disaster[element.info]}</p>
          </li>
        )
      : ''
    );
  }

  renderSliderMap () {
    if (this.props.disaster.sliderCenter) {
      return (
      <div className='inner'>
        <h2>Before and After the Disaster</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed nisl augue. Morbi condimentum
    tempor o  rnare. Sed rutrum pretium accumsan. Duis iaculis consequat nunc a tempus. Lorem ipsum
    dolor si  t amet, consectetur adipiscing elit. Duis sed nisl augue</p>
        <SliderMap disaster={this.props.disaster} />
      </div>
      );
    }
    return (<div/>);
  }

  renderDisasterProfile () {
    return (
      <div className='page--disaster-profile'>
        <section className='inpage__header' style={makeImage(this.props.disaster)}>
          <div className='inner'>
            <h1 className='heading--xxlarge'>{this.props.disaster.n} {this.props.disaster.t}, {this.props.disaster.y}</h1>
            <hr></hr>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed nisl augue. Morbi condimentum tempor ornare. Sed rutrum pretium accumsan. Duis iaculis consequat nunc a tempu</p>
          </div>
        </section>
        <section className='inpage__body'>
          <section className='overview'>
            <div className='inner'>
              <ul className='metrics'>
               {this.makeHeaderListElements()}
              </ul>
              <div className='download-profile'>
            <a href={this.makeProfilePath(this.props.disaster.profile)} download className='button button--large button--base-bounded'>Download Disaster Profile</a>
              </div>
            </div>
          </section>
          <section className='national-overview'>
            <div className='inner'>
              <h2>National Residential Stock, and Disaster Impact</h2>
              <ul className='national-metrics'>
                <li className='national-metrics__item'>
                  <h2 className='alt-heading'>Loss</h2>
                  <ul>
                    {this.makeDataListElements('annloss')}
                  </ul>
                </li>
                <li className='national-metrics__item'>
                  <h2 className='alt-heading'>Exposure</h2>
                  <ul>
                    {this.makeDataListElements('exposure')}
                  </ul>
                </li>
                <li className='national-metrics__item'>
                  <h2 className='alt-heading'>Loss Ratio</h2>
                  <ul>
                    {this.makeDataListElements('lossratio')}
                  </ul>
                </li>
              </ul>
            </div>
          </section>
          <section className='explore'>
            <div className='inner'>
              <h2>Disaster Risk Explorer</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed nisl augue. Morbi condimentum
tempor o  rnare. Sed rutrum pretium accumsan. Duis iaculis consequat nunc a tempus. Lorem ipsum
dolor si  t amet, consectetur adipiscing elit. Duis sed nisl augue</p>
              <ul className='map-actions'>
                {this.makeMetricButtons()}
              </ul>
            </div>
            <div>
             <AnalysisMap />
            </div>
          </section>
          <section className='images'>
            {this.renderSliderMap()}
          </section>
        </section>
        <section className='inpage__footer'>
          <div className='inner' >
            <h2 className='alt-heading'>Next</h2>
            <h1 className='heading--xlarge'>{nextDisasterText(nextDisaster(this.props.disaster, this.props.disasters))}</h1>
            <a href='' onClick={(e) => { e.preventDefault(); makeNextDisaster(this.props); }} className='link--primary-light'>
              View Case Study
            </a>
          </div>
        </section>
      </div>
    );
  }

  render () {
    return this.props.disaster.set ? this.renderDisasterProfile() : (<div/>);
  }
}

DisasterProfile.propTypes = {
  disasters: T.array.isRequired,
  disaster: T.object.isRequired,
  initialDisasterIndex: T.number.isRequired,
  overlayMetric: T.string.isRequired,
  match: T.object.isRequired,
  location: T.object.isRequired,
  history: T.object.isRequired,
  overlayFootprintState: T.bool.isRequired,
  _clearDisaster: T.func.isRequired,
  _setDisaster: T.func.isRequired,
  _setOverlayMetric: T.func.isRequired,
  _setCurrentLegendMetricVal: T.func.isRequired,
  _setCurrentLegendName: T.func.isRequired,
  _setOverlayFootprintState: T.func.isRequired
};

const selector = (state) => {
  return {
    disasters: state.disasters,
    disaster: state.disaster,
    initialDisasterIndex: state.initialDisaster.index,
    overlayMetric: state.overlayMetric.metric,
    overlayFootprintState: state.overlayFootprint.enabled
  };
};

const dispatcher = (dispatch) => {
  return {
    _clearDisaster: () => dispatch(clearDisaster()),
    _setOverlayMetric: (metric) => dispatch(setOverlayMetric(metric)),
    _setDisaster: (disaster) => dispatch(setDisaster(disaster)),
    _setPaginationDirection: (direction) => dispatch(setPaginationDirection(direction)),
    _setCurrentLegendMetricVal: (val) => dispatch(setCurrentLegendMetricVal(val)),
    _setCurrentLegendName: (name) => dispatch(setCurrentLegendName(name)),
    _setOverlayFootprintState: (...args) => dispatch(setOverlayFootprintState(...args))
  };
};

export default connect(selector, dispatcher)(DisasterProfile);
