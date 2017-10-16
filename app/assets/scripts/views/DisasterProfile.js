'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setOverlayMetric, setDisaster } from '../actions/action-creators';

import AnalysisMap from '../components/AnalysisMap';

class DisasterProfile extends Component {
  constructor (props) {
    super(props);
    this.makeMetricButtons = this.makeMetricButtons.bind(this);
    this.nextDisaster = this.nextDisaster.bind(this);
    // this.nextDisasterLink = this.nextDisasterLink.bind(this);
    // this.nextDisasterText = this.nextDisasterText.bind(this);
    this.makeNextDisaster = this.makeNextDisaster.bind(this);
    this.renderDisasterProfile = this.renderDisasterProfile.bind(this);
  }
  static propTypes = {
    disasters: PropTypes.array.isRequired,
    disaster: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    _setDisaster: PropTypes.func.isRequired,
    _setOverlayMetric: PropTypes.func.isRequired
  }
  componentWillMount () {
    let disasterInfo = this.props.match.url.split('/disasters/')[1].split('-');
    let disaster = this.props.disasters.find(d => d.c === disasterInfo[0]);
    disaster.index = this.props.disasters.findIndex(d => d.c === disasterInfo[0]);
    this.props._setDisaster(disaster);
  }
  makeMetricButtons () {
    return ['Exposure', 'Annualized Loss', 'Loss Ratio'].map((m, i) => {
      return (
        <li><button className='button button--large button--base-bounded' key={m}
          value={m.replace(' ', '-').toLowerCase()}
          onClick={(e) => { this.props._setOverlayMetric(e.target.value); }}>{m}</button></li>
      );
    });
  }

  nextDisaster () {
    const isLastDisaster = (this.props.disaster.index === this.props.disasters.length - 1);
    return !isLastDisaster ? this.props.disasters[this.props.disaster.index + 1] : this.props.disasters[0];
  }

  nextDisasterLink (nextDisaster) {
    return `/disasters/${nextDisaster.c}-${nextDisaster.y}-${nextDisaster.t.toLowerCase()}`;
  }

  nextDisasterText (nextDisaster) {
    return `${nextDisaster.n} ${nextDisaster.y} ${nextDisaster.t}`;
  }

  makeNextDisaster () {
    const isLastDisaster = (this.props.disaster.index === this.props.disasters.length - 1);
    let nextDisaster = !isLastDisaster ? this.props.disasters[this.props.disaster.index + 1] : this.props.disasters[0];
    nextDisaster.index = !isLastDisaster ? this.props.disaster.index + 1 : 0;
    this.props._setDisaster(nextDisaster);
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
             <AnalysisMap disaster={this.props.disaster} />
            </div>
          </section>
          <section className='images'>
            <div className='inner'>
              <h2>Before and After the Disaster</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed nisl augue. Morbi condimentum
tempor o  rnare. Sed rutrum pretium accumsan. Duis iaculis consequat nunc a tempus. Lorem ipsum
dolor si  t amet, consectetur adipiscing elit. Duis sed nisl augue</p>
            </div>
          </section>
        </section>
        <section className='inpage__footer'>
          <div className='inner' >
            <h2 className='alt-heading'>Next</h2>
            <h1 className='heading--xlarge'>{this.nextDisasterText(this.nextDisaster())}</h1>
            <a href='' onClick={(e) => { e.preventDefault(); this.makeNextDisaster(); this.props.history.replace(this.nextDisasterLink()); }} className='link--primary-light'>
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
    disaster: state.disaster
  };
};

const dispatcher = (dispatch) => {
  return {
    _setOverlayMetric: (metric) => dispatch(setOverlayMetric(metric)),
    _setDisaster: (disaster) => dispatch(setDisaster(disaster))
  };
};

export default connect(selector, dispatcher)(DisasterProfile);
