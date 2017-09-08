'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

class Header extends Component {
  render () {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="disasters">Historic Disasters</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
