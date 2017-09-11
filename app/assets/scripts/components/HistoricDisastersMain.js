'use strict';

import React from 'react';
import DisastersList from './DisastersList';
import PropTypes from 'prop-types';

const HistoricDisastersMain = ({ props }) => (
      <div>
        <div>
          <h1>Historic Disasters</h1>
          <DisastersList />
        </div>
        <div>
          <h1>Explore Disaster Risk in Central America</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed nisl augue. Morbi condimentum
    tempor ornare. Sed rutrum pretium accumsan. Duis iaculis consequat nunc a tempus</p>
          <a>Explore Central America</a>
        </div>
      </div>
);

HistoricDisastersMain.PropTypes = {
  props: PropTypes.object
};

export default HistoricDisastersMain;
