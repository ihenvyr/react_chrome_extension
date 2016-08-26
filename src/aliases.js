const addCountAsync = (originalAction) => {
  // works but not async
  // return originalAction;

  // async not working
  return (dispatch, getState) => {
    // return a thunk/promise/etc

    // simulate server response
    return setTimeout(() => {
      console.log('alias addCountAsync', originalAction);
      // return dispatch(originalAction); // keep on dispatching the action (every 1 second)
      return originalAction; // no store update
    }, 1000);
  };
};

export default {
  'ADD_COUNT_ASYNC': addCountAsync
};
