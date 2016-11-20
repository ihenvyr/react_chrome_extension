import * as types from './constants';
import Storage from './storage';
const storage = Storage();

const countReset = (originalAction) => {
  return dispatch => {
    storage.set({ count: 0 }, () => {
      dispatch({
        type: types.COUNT_RESET_RESOLVED
      });
    });
  };
};

const countIncrease = (originalAction) => {
  return (dispatch, getState) => {
    storage.set({ count: getState().count + 1 }, () => {
      dispatch({
        type: types.COUNT_INCREASE_RESOLVED
      });
    });
  };
};

const countDecrease = (originalAction) => {
  return (dispatch, getState) => {
    storage.set({ count: getState().count - 1 }, () => {
      dispatch({
        type: types.COUNT_DECREASE_RESOLVED
      });
    });
  };
};

export default {
  'COUNT_RESET': countReset,
  'COUNT_INCREASE': countIncrease,
  'COUNT_DECREASE': countDecrease
};
