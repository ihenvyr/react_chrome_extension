import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { wrapStore, alias } from 'webext-redux';
import * as types from './constants';
import aliases from './aliases';
import Storage from './storage';

const storage = Storage();
const middlewares = [alias(aliases), thunk];
const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

// listen to storage changes
chrome.storage.onChanged.addListener((changes, namespace) => {
  for (let key in changes) {
    if (changes.hasOwnProperty(key)) {
      const storageChange = changes[key];
      console.log('Storage key "%s" in namespace "%s" changed. ' +
        'Old value was "%s", new value is "%s".',
        key,
        namespace,
        storageChange.oldValue,
        storageChange.newValue);
    }
  }
});

storage.get('count', item => {
  console.log('count loaded', item.count);
  store.dispatch({
    type: types.COUNT_LOAD,
    payload: { count: item.count || 0 }
  });
});

wrapStore(store, {
  portName: 'REACT_CHROME_EXTENSION'
});
