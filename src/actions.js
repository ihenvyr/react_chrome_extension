import * as types from './constants';

export function countReset() {
  return {
    type: types.COUNT_RESET
  };
}

export function countIncrease() {
  return {
    type: types.COUNT_INCREASE
  };
}

export function countDecrease() {
  return {
    type: types.COUNT_DECREASE
  };
}
