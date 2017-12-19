import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import * as actions from '../actions/action-types';
import { DISASTERS } from '../constants';

const disasters = function (state = DISASTERS, action) {
  switch (action.type) {
    case actions.INIT_DISASTERS:
      state = Object.assign({}, state);
      break;
  }
  return state;
};

const defaultVisibleLayer = {
  layer: 'admin'
};

const visibleLayer = function (state = defaultVisibleLayer, action) {
  switch (action.type) {
    case actions.SET_VISIBLE_LAYER:
      state = Object.assign({}, state);
      state.layer = action.text;
  }
  return state;
};

const defaultOverlayMetric = {
  metric: 'exposure'
};

const overlayMetric = function (state = defaultOverlayMetric, action) {
  switch (action.type) {
    case actions.SET_OVERLAY_METRIC:
      state = Object.assign({}, state);
      state.metric = action.text !== 'exposure' ? action.text : defaultOverlayMetric.metric;
  }
  return state;
};

const defaultDisaster = { set: false };

const disaster = function (state = defaultDisaster, action) {
  switch (action.type) {
    case actions.SET_DISASTER:
      state = Object.assign({}, state);
      state = action.disaster;
      state.set = true;
      break;
    case actions.CLEAR_DISASTER:
      return defaultDisaster;
  }
  return state;
};

const defaultDisasterIndex = { index: 0 };

const initialDisaster = function (state = defaultDisasterIndex, action) {
  switch (action.type) {
    case actions.SET_INITIAL_DISASTER_INDEX:
      state = Object.assign({}, state);
      state.index = action.index;
      break;
  }
  return state;
};

const defaultMap = {
  val: null,
  name: null,
  maxValue: null,
  valType: 'absolute'
};

const map = function (state = defaultMap, action) {
  switch (action.type) {
    case actions.SET_CURRENT_LEGEND_METRIC_VAL:
      state = Object.assign({}, state);
      state.val = action.val;
      break;
    case actions.SET_CURRENT_LEGEND_NAME:
      state = Object.assign({}, state);
      state.name = action.name;
      break;
    case actions.SET_MAX_VALUE:
      state = Object.assign({}, state);
      state.maxValue = action.maxValue;
      break;
    case actions.SET_VALUE_TYPE:
      state = Object.assign({}, state);
      state.valType = action.valType;
      break;
  }
  return state;
};

const reducer = combineReducers({
  disaster,
  disasters,
  initialDisaster,
  overlayMetric,
  map,
  routing: routerReducer,
  visibleLayer
});

export default reducer;
