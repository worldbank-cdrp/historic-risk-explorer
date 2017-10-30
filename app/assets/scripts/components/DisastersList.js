'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { setInitialDisasterIndex } from '../actions/action-creators';

class DisastersList extends Component {
  constructor (props) {
    super(props);
    this.renderDisastersList = this.renderDisastersList.bind(this);
  }
  static propTypes = {
    disasters: PropTypes.array.isRequired,
    _setInitialDisasterIndex: PropTypes.func.isRequired
  }
  renderDisastersList () {
    return (
      this.props.disasters.map((d, i) =>
        <li className='disasters-list__item' key={i}>
           <Link to={`/${d.c}-${d.y}-${d.t.toLowerCase()}`}
            onClick={(e) => { this.props._setInitialDisasterIndex(i); }} className='featured-disasters__item'>
             <span className='disaster__bg'><div className='bg-img'></div></span>
             <span className='disaster__content'>
               <p className='subheading'>{`${d.m}, ${d.y}`}</p>
               <h2 className='heading--medium'>{`${d.n} ${d.t}`}</h2>
             </span>
          </Link>
        </li>
      )
    );
  }
  render () {
    return (
      <ul className='disasters-list'>
        {this.renderDisastersList()}
      </ul>
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
    _setInitialDisasterIndex: (index) => dispatch(setInitialDisasterIndex(index))
  };
};

export default connect(selector, dispatcher)(DisastersList);
