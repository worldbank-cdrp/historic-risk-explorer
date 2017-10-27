
'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { map, pickBy } from 'lodash';
import PropTypes from 'prop-types';
import {
  clearDisaster,
  setOverlayMetric,
  setDisaster,
  setPaginationDirection,
  setCurrentLegendMetricVal
} from '../actions/action-creators';

import {
  nextDisaster,
  nextDisasterText,
  makeNextDisaster
} from '../utils/pagination';

import AnalysisMap from '../components/AnalysisMap';
import SliderMap from '../components/SliderMap';

class DisasterProfile extends Component {
  constructor (props) {
    super(props);
    this.makeMetricButtons = this.makeMetricButtons.bind(this);
    this.renderDisasterProfile = this.renderDisasterProfile.bind(this);
    this.makeDataListElements = this.makeDataListElements.bind(this);
  }
  static propTypes = {
    disasters: PropTypes.array.isRequired,
    disaster: PropTypes.object.isRequired,
    initialDisasterIndex: PropTypes.number.isRequired,
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    _clearDisaster: PropTypes.func.isRequired,
    _setDisaster: PropTypes.func.isRequired,
    _setOverlayMetric: PropTypes.func.isRequired,
    _setCurrentLegendMetricVal: PropTypes.func.isRequired
  }

  componentWillMount () {
    let disasterInfo = this.props.match.url.split('/')[1].split('-');
    let disaster = this.props.disasters.find(d => d.c === disasterInfo[0]);
    disaster.index = this.props.disasters.findIndex(d => d.c === disasterInfo[0]);
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
    return ['Exposure', 'Annualized Loss', 'Loss Ratio'].map((m, i) => {
      return (
        <li key={m}><button className='button button--large button--base-bounded'
          value={m.replace(' ', '-').toLowerCase()}
          onClick={(e) => {
            e.preventDefault();
            this.props._setOverlayMetric(e.target.value);
            this.props._setCurrentLegendMetricVal(0);
          }}>{m}</button></li>
      );
    });
  }

  makeDataListElements (metric) {
    let metricData = this.props.disaster[metric];
    // filter only those in list with property values
    metricData = pickBy(metricData, (m, k) => { return m; });
    return map(metricData, (m, k) => {
      if (metric === 'lossratio') { return (<li key={`${k}-${m}`}><h3 className='heading--small'>{`${m}%`}<small>{k}</small></h3></li>); }
      return (<li key={`${k}-${m}`} ><h3 className='heading--small'>{`$${m}M`}<small>{k}</small></h3></li>);
    });
  }

  renderDisasterProfile () {
    return (
      <div>
        <section className='inpage__header'>
          <div className='inner'>
            <p className='subheading'>{this.props.disaster.m} {this.props.disaster.y}</p>
            <h1 className='heading--xxlarge'>{this.props.disaster.n} {this.props.disaster.y} {this.props.disaster.t}</h1>
            <hr align='left'></hr>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed nisl augue. Morbi condimentum tempor ornare. Sed rutrum pretium accumsan. Duis iaculis consequat nunc a tempu</p>
          </div>
        </section>
        <section className='inpage__body'>
          <section className='overview'>
            <div className='inner'>
              <ul className='metrics'>
                <li className='metrics__item'>
                  <h1>Magnitude:</h1>
                  <p>{this.props.disaster.magnitude}</p>
                </li>
                <li className='metrics__item'>
                  <h1>Country Population at Time:</h1>
                  <p>{this.props.disaster.pop}</p>
                </li>
                <li className='metrics__item'>
                  <h1>Capital Stock at Time (Res) - $USDmm:</h1>
                  <p>{this.props.disaster.capstock}</p>
                </li>
                <li className='metrics__item'>
                  <h1>Houses existing at time:</h1>
                  <p>{this.props.disaster.houses}</p>
                </li>
              </ul>
              <div className='download-profile'>
                <button className='button button--large button--base-bounded'>Download Disaster Profile</button>
              </div>
            </div>
          </section>
          <section className='national-overview'>
            <div className='inner'>
              <h2>National Historic Losses vs. Modelled</h2>
              <ul className='national-metrics'>
                <li className='national-metrics__item'>
                  <h2 className='alt-heading'>Annualized Loss</h2>
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
             <AnalysisMap disaster={this.props.disaster} />
            </div>
          </section>
          <section className='images'>
            <div className='inner'>
              <h2>Before and After the Disaster</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed nisl augue. Morbi condimentum
tempor o  rnare. Sed rutrum pretium accumsan. Duis iaculis consequat nunc a tempus. Lorem ipsum
dolor si  t amet, consectetur adipiscing elit. Duis sed nisl augue</p>
              <SliderMap disaster={this.disaster} />
            </div>
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

const selector = (state) => {
  return {
    disasters: state.disasters,
    disaster: state.disaster,
    initialDisasterIndex: state.initialDisaster.index
  };
};

const dispatcher = (dispatch) => {
  return {
    _clearDisaster: () => dispatch(clearDisaster()),
    _setOverlayMetric: (metric) => dispatch(setOverlayMetric(metric)),
    _setDisaster: (disaster) => dispatch(setDisaster(disaster)),
    _setPaginationDirection: (direction) => dispatch(setPaginationDirection(direction)),
    _setCurrentLegendMetricVal: (val) => dispatch(setCurrentLegendMetricVal(val))
  };
};

export default connect(selector, dispatcher)(DisasterProfile);
