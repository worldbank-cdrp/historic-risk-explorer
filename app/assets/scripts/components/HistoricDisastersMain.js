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
