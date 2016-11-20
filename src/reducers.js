import { combineReducers } from 'redux';
import * as types from './constants';

const count = (state = 0, action) => {
  switch(action.type) {
    case types.COUNT_LOAD:
      return action.payload.count;

    case types.COUNT_RESET_RESOLVED:
      return 0;

    case types.COUNT_INCREASE_RESOLVED:
      return state + 1;

    case types.COUNT_DECREASE_RESOLVED:
      return state - 1;

    default:
      return state;
  }
};

export default combineReducers({ count });
