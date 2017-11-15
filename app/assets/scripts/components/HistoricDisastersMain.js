'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DisastersList from './DisastersList';
import CentralAmericaExplorer from './CentralAmericaExplorer';

class HistoricDisastersMain extends Component {
  static propTypes = {
    disasters: PropTypes.array.isRequired
  }
  render () {
    return (
      <div>
        <header className='inpage__header--alt'>
          <div className='inner'>
            <h1 className='heading--large'>Historic Disasters</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed nisl augue. Morbi condimentum tempor ornare. Sed rutrum pretium accumsan. Duis iaculis consequat nunc a tempus</p>
          </div>
        </header>
        <section className='inpage__body'>
          <div className='inner'>
            <DisastersList disasters={this.props.disasters} />
          </div>
        </section>
        <CentralAmericaExplorer />
      </div>
    );
  }
}

export default HistoricDisastersMain;
