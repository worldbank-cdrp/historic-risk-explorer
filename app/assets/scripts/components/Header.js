'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import c from 'classnames';

class Header extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }
  render () {
    const headerClass = c({ 'header_main': this.props.history.location.pathname === '/' });
    return (
      <div>
        <nav className='page__nav'>
          <div className='inner'>
            <Link to="/" className='page__title'>Historic Disaster Explorer</Link>
            <ul className={headerClass}>
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
