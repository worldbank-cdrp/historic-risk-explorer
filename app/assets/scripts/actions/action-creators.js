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

export function setCurrentLegendMetricVal (val) {
  return {
    type: actions.SET_CURRENT_LEGEND_METRIC_VAL,
    val: val,
    receivedAt: Date.now()
  };
}

export function setMaxValue (maxValue) {
  return {
    type: actions.SET_MAX_VALUE,
    maxValue: maxValue,
    receivedAt: Date.now()
  };
}

export function setCurrentLegendName (name) {
  return {
    type: actions.SET_CURRENT_LEGEND_NAME,
    name: name,
    receivedAt: Date.now()
  };
}

export function setValueType (valType) {
  return {
    type: actions.SET_VALUE_TYPE,
    valType: valType,
    receivedAt: Date.now()
  };
}
