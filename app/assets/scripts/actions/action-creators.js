import * as actions from './action-types';
export function initDisasters () {
  return {
    type: actions.INIT_DISASTERS,
    recievedAt: Date.now()
  };
}
