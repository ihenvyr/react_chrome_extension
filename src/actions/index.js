import * as types from '../constants';

export function addCount() {
  console.log('addCount');

  return {
    type: types.ADD_COUNT
  };
}

export function addCountAsync() {
  console.log('addCountAsync');

  return {
    type: types.ADD_COUNT_ASYNC
  }
}
