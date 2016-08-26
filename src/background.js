import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { wrapStore, alias } from 'react-chrome-redux';
import aliases from './aliases';

const middlewares = [alias(aliases), thunk];

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

// const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
// const configureStore = (initialState) => {
//   return createStoreWithMiddleware(rootReducer, initialState);
// };
// const store = configureStore();

console.log('background store', store);

wrapStore(store, {
  portName: 'REACT_CHROME_EXTENSION'
});
