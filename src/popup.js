import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'react-chrome-redux';
import Popup from './components/Popup';

const store = new Store({
  portName: 'REACT_CHROME_EXTENSION'
});

ReactDOM.render(
  <Provider store={store}>
    <Popup />
  </Provider>, document.getElementById('app')
);
