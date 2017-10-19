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

export function setOverlayMetric (text) {
  return {
    type: actions.SET_OVERLAY_METRIC,
    text: text,
    recievedAt: Date.now()
  };
}

export function setDisaster (disaster) {
  return {
    type: actions.SET_DISASTER,
    disaster: disaster,
    recievedAt: Date.now()
  };
}

export function clearDisaster () {
  return {
    type: actions.CLEAR_DISASTER,
    receivedAt: Date.now()
  };
}

export function setInitialDisasterIndex (index) {
  return {
    type: actions.SET_INITIAL_DISASTER_INDEX,
    index: index,
    receivedAt: Date.now()
  };
}
