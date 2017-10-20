'use strict';

export function makeImage (disaster) {
  return { 'backgroundImage': [ `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7))`, `url('/assets/graphics/content/${disaster.image}')` ] };
}
