'use strict';

import React, { Component } from 'react';

class Home extends Component {
  render () {
    return (
      <div>
        <header className='index__header'>
          <div className='inner'>
            <h1 className='heading--deco heading--xxlarge'>Historic Risk Explorer</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed nisl augue. Morbi condimentum tempor ornare. Sed rutrum pretium accumsan. Duis iaculis consequat nunc a tempus</p>
          </div>
        </header>
        <section className='index__body'>
          <section className='about-tease'>
            <div className='inner'>
              <div className='text-column'>
                <h2>Compare Historic and Modelled Risk Data</h2>
                <p>Use our interactive maps to explore the effects of past disasters and their modelled losses if they occured today.</p>
                <button className='button button--large button--base-bounded'> Learn More</button>
              </div>
            </div>
            <div className='img-column'>
            </div>
          </section>
          <section className='featured-disasters'>
            <div className='inner'>
              <h2>Featured Historic Disasters</h2>
              <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed nisl augue.</p>
              <ul className='featured-disasters__list'>
                <li>
                  <a className='featured-disasters__item'>
                    <span className='disaster__bg'><div className='bg-img'></div></span>
                    <span className='disaster__content'>
                      <p className='subheading'>January 2015</p>
                      <h2 className='heading--medium'>Armenia Earthquake</h2>
                    </span>
                  </a>
                </li>
                <li>
                  <a className='featured-disasters__item'>
                    <span className='disaster__bg'><div className='bg-img'></div></span>
                    <span className='disaster__content'>
                      <p className='subheading'>January 2015</p>
                      <h2 className='heading--medium'>Armenia Earthquake</h2>
                    </span>
                  </a>
                </li>
                <li>
                  <a className='featured-disasters__item'>
                    <span className='disaster__bg'><div className='bg-img'></div></span>
                    <span className='disaster__content'>
                      <p className='subheading'>January 2015</p>
                      <h2 className='heading--medium'>Armenia Earthquake</h2>
                    </span>
                  </a>
                </li>
                <li>
                  <a className='featured-disasters__item'>
                    <span className='disaster__bg'><div className='bg-img'></div></span>
                    <span className='disaster__content'>
                      <p className='subheading'>January 2015</p>
                      <h2 className='heading--medium'>Armenia Earthquake</h2>
                    </span>
                  </a>
                </li>
              </ul>
              <a className='button button--large button--base-bounded'href=''>See All Disasters</a>
            </div>
          </section>
          <section className='risk-explorer-tease'>
            <div className='inner'>
              <h2 className='heading--medium'>Explore Disaster Risk in Central America</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed nisl augue. Morbi condimentum tempor ornare. Sed rutrum pretium accumsan. Duis iaculis consequat nunc a tempus</p>
              <button className='button button--large button--secondary-bounded'>Explore Central America</button>
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default Home;
