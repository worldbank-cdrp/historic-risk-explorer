'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setOverlayMetric } from '../actions/action-creators';

import { makeImage } from '../utils/disaster';

import AnalysisMap from '../components/AnalysisMap';
import SliderMap from '../components/SliderMap';

class DisasterProfile extends Component {
  constructor (props) {
    super(props);
    this.parseURL = this.parseURL.bind(this);
    this.makeMetricButtons = this.makeMetricButtons.bind(this);
  }
  static propTypes = {
    disasters: PropTypes.array.isRequired,
    match: PropTypes.object.isRequired,
    _setOverlayMetric: PropTypes.func.isRequired
  }
  // uses route url to query disasters list for matching disaster
  parseURL () {
    const disastersInfo = this.props.match.url.split('/disasters/')[1].split('-');
    this.disaster = this.props.disasters.find(d => d.c === disastersInfo[0]);
  }
  makeMetricButtons () {
    return ['Exposure', 'Annualized Loss', 'Loss Ratio'].map((m, i) => {
      return (
        <li key={m}><button className='button button--large button--base-bounded'
          value={m.replace(' ', '-').toLowerCase()}
          onClick={(e) => { this.props._setOverlayMetric(e.target.value); }}>{m}</button></li>
      );
    });
  }
  render () {
    this.parseURL();
    return (
      <div>
        <section className='inpage__header' style={makeImage(this.disaster)}>
          <div className='inner'>
            <p className='subheading'>{this.disaster.m} {this.disaster.y}</p>
            <h1 className='heading--xxlarge'>{this.disaster.n} {this.disaster.y} {this.disaster.t}</h1>
            <hr style={{textAlign: 'left'}}></hr>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed nisl augue. Morbi condimentum tempor ornare. Sed rutrum pretium accumsan. Duis iaculis consequat nunc a tempu</p>
          </div>
        </section>
        <section className='inpage__body'>
          <section className='overview'>
            <div className='inner'>
              <ul className='metrics'>
                <li className='metrics__item'>
                  <h1>Magnitude:</h1>
                  <p> Mw7.0 (S. Haiti)</p>
                </li>
                <li className='metrics__item'>
                  <h1>Country Population at Time:</h1>
                  <p> 9,926,000</p>
                </li>
                <li className='metrics__item'>
                  <h1>Capital Stock at Time (Res) - $USDmm:</h1>
                  <p> 16,082</p>
                </li>
                <li className='metrics__item'>
                  <h1>Houses existing at time:</h1>
                  <p> 2,281,839</p>
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
                    <li><h3 className='heading--small'>$152M<small>Historic</small></h3></li>
                    <li><h3 className='heading--small'>$152M<small>Modelled</small></h3></li>
                  </ul>
                </li>
                <li className='national-metrics__item'>
                  <h2 className='alt-heading'>Exposure</h2>
                  <ul>
                    <li><h3 className='heading--small'>$152M<small>Historic</small></h3></li>
                    <li><h3 className='heading--small'>$152M<small>Modelled</small></h3></li>
                  </ul>
                </li>
                <li className='national-metrics__item'>
                  <h2 className='alt-heading'>Loss Ratio</h2>
                  <ul>
                    <li><h3 className='heading--small'>$152M<small>Historic</small></h3></li>
                    <li><h3 className='heading--small'>$152M<small>Modelled</small></h3></li>
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
             <AnalysisMap disaster={this.disaster} />
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
          <div className='inner'>
            <h2 className='alt-heading'>Next</h2>
            <h1 className='heading--xlarge'> Pakistan Floods 2010</h1>
            <a className='link--primary-light' href=''>View Case Study</a>
          </div>
        </section>
      </div>
    );
  }
}

const selector = (state) => {
  return {
    disasters: state.disasters
  };
};

const dispatcher = (dispatch) => {
  return {
    _setOverlayMetric: (metric) => dispatch(setOverlayMetric(metric))
  };
};

export default connect(selector, dispatcher)(DisasterProfile);
