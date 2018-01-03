'use strict';

export function makeImage (disaster) {
  if (disaster.image) {
    return { 'backgroundImage': [ `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5))`, `url(assets/graphics/content/${disaster.image}` ] };
  }
  return { 'backgroundImage': [ `linear-gradient(rgba(0, 0, 0, 0.0),rgba(0, 0, 0, 0.0))`, `url('https://api.mapbox.com/styles/v1/wbg-cdrp/cj7w85rme3rvm2ro19y4q5pss/static/${disaster.staticXYZ.toString()}/1280x600@2x?access_token=pk.eyJ1Ijoid2JnLWNkcnAiLCJhIjoiY2l1Z3pxZDVwMDBxcDMzcDJjYmRpYnBicSJ9.hjlLP5TEVhqbTwzhFA1rZw'` ] };
}
