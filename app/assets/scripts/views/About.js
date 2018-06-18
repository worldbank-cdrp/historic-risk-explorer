'use strict';

import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class About extends Component {
  render () {
    return (
      <div className='about-page'>
        <div className='inner'>
          <div className='about-prose'>
            <h1>What is it about?</h1>
            <p>The Historic Risk Explorer is a Review of 10 Historical Disaster Scenarios assessing potential consequences (damages and losses) had these events re-occurred at present time (depending on examined disaster scenarios, the reference year is between 2012 and 2017). Four types of natural hazards are explored requiring different loss modelling approaches, i.e. earthquake (5 events), windstorm (2 events), flood (2 events) and volcanic eruption (1 event). These historic events have affected Asia (4 events), the Americas (4 events) and Africa, Oceania (1 event each) and have caused tremendous life and financial losses in nine countries including two of the most populous countries of the developing world (Indonesia and Pakistan).</p>
            <p>The recurrence interval for floods is short to medium, while for volcanic eruptions, earthquakes, and windstorms, they are generally much longer. The case studies have been selected using various criteria such as availability of data, WB/GFDRR client interest, as well as prominence of historical event consequences. The events span a period between 1815 and 2016, seven of which occurred since 2000. </p>
            <p>The analysis required the development for the first time of detailed residential buildings exposure databases at a high spatial resolution (i.e. district level) taking into account local urban and rural context in all nine countries, making use of a suite of public data including global population datasets, night-time lights, latest census, engineering studies about the vulnerability of building types to various hazards. Adapting the Country Disaster Risk Profile (CDRP) methodology developed under the <a href="https://www.ecapra.org/" target="_blank" title="More about the CAPRA program">World Bank CAPRA program</a>, the resultant exposure datasets were used in conjunction with vulnerability components to create contextual views of risk. In addition, the exposure datasets can be used beyond the scope of the Historic Risk Explorer project as they are stand-alone products useful for probabilistic risk assessment and other socio-economic studies. </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
