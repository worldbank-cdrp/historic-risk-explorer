'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import c from 'classnames';

class Header extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }
  componentWillMount() {
    document.title = 'Historic Disaster Explorer';
  }
  render () {
    const pageNav = c('page__nav', { 'main__nav': this.props.history.location.pathname === '/' });
    return (
      <div>
        <nav className={pageNav}>
          <div className='inner'>
            <Link to="/" className='page__title'>Historic Disaster Explorer</Link>
            <ul>
              <li>
                <Link to="/disasters">Historic Disasters</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
