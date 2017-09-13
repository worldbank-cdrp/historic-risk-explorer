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

const visibleLayer = function (state = {}, action) {
  switch (action.type) {
    case actions.SET_VISIBLE_LAYER:
      state = Object.assign({}, state);
      state.layer = action.text;
  }
  return state;
};

const defaultOverlayMetric = {
  metric: 'exposure-loss'
};

const overlayMetric = function (state = defaultOverlayMetric, action) {
  switch (action.type) {
    case actions.SET_OVERLAY_METRIC:
      state = Object.assign({}, state);
      state.metric = action.text !== 'exposure' ? action.text : defaultOverlayMetric.metric;
  }
  return state;
};

const reducer = combineReducers({
  disasters,
  visibleLayer,
  overlayMetric,
  routing: routerReducer
});

export default reducer;
