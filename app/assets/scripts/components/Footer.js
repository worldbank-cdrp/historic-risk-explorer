'use strict';

import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Footer extends Component {
  render () {
    return (
      <footer>
        <div className='inner'>
          <ul className='sponsor__list'>
            <li>
              <a href='http://www.worldbank.org/en/topic/socialdevelopment' className='sponsor__item'><img src='/assets/graphics/content/WBG-SURR.png' alt='view sponsor website'/></a>
            </li>
            <li>
              <a href='https://www.gfdrr.org' className='sponsor__item'><img src='/assets/graphics/content/GFDRR.png' alt='view sponsor website'/></a>
            </li>
            <li>
              <a href='https://collaboration.worldbank.org/groups/cdrp' className='sponsor__item'><img src='/assets/graphics/content/D-RAS.png' alt='view sponsor website'/></a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
