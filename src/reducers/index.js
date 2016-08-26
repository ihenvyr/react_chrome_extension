import { combineReducers } from 'redux';
import * as types from '../constants';

const count = (state = 0, action) => {
  switch(action.type) {
    case types.ADD_COUNT:
      return state + 1;

    case types.ADD_COUNT_ASYNC:
      return state + 1;

    default:
      return state;
  }
};

export default combineReducers({ count });
