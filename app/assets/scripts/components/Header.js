'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render () {
    return (
      <div>
        <nav className='page__nav'>
          <div className='inner'>
            <Link to="/" className='page__title'>Historic Disaster Database</Link>
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
