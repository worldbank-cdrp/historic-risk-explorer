import * as actions from './action-types';

export function initDisasters () {
  return {
    type: actions.INIT_DISASTERS,
    recievedAt: Date.now()
  };
}

export function setVisibleLayer (text) {
  return {
    type: actions.SET_VISIBLE_LAYER,
    text: text,
    recievedAt: Date.now()
  };
}
