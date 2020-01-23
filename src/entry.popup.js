import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'webext-redux';
import PopupContainer from './components/Popup';

const store = new Store({
  portName: 'REACT_CHROME_EXTENSION'
});

ReactDOM.render(
  <Provider store={store}>
    <PopupContainer />
  </Provider>, document.getElementById('app')
);
