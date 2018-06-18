'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CentralAmericaExplorer from '../components/CentralAmericaExplorer';
import DisastersList from '../components/DisastersList';

class Home extends Component {
  static propTypes = {
    disasters: PropTypes.array.isRequired
  }
  render () {
    // get objects from disasters for those to be featured.
    let featuredDisasters = ['arm-1988-earthquake', 'hti-2010-earthquake', 'pak-2010-flood', 'moz-2015-flood'];
    featuredDisasters = this.props.disasters.filter(d => featuredDisasters.includes(`${d.c}-${d.y}-${d.t.toLowerCase()}`));
    return (
      <div>
        <header className='index__header'>
          <div className='inner'>
            <h1 className='heading--xxlarge'>Historic Risk Explorer</h1>
            <hr></hr>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed nisl augue. Morbi condimentum tempor ornare. Sed rutrum pretium accumsan. Duis iaculis consequat nunc a tempus
            </p>
            <Link to='/disasters'><button className='button button--secondary-bounded'>Explore Disasters</button></Link>
          </div>
        </header>
        <section className='index__body'>
          <section className='about-tease'>
            <div className='inner'>
              <div className='text-column'>
                <div>
                  <h2>Compare Historic and Modelled Risk Data</h2>
                  <p>Use our interactive maps to explore the effects of past disasters and their modelled losses if they occured today.</p>
                  <Link to='/about'><button className='button button--large button--base-bounded'>Learn More</button></Link>
                </div>
              </div>
              <div className='img-column'>
                <img src='assets/graphics/content/homepage-tease.png' height='350px'/>
              </div>
           </div>
          </section>
          <section className='featured-disasters'>
            <div className='inner'>
              <h2>Featured Historic Disasters</h2>
              <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed nisl augue.</p>
              <DisastersList disasters={featuredDisasters}/>
            </div>
          </section>
          <CentralAmericaExplorer/>
        </section>
      </div>
    );
  }
}

const selector = (state) => {
  return {
    disasters: state.disasters
  };
};

export default connect(selector)(Home);
