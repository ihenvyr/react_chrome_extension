import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'react-chrome-redux';
import Options from './components/Options';

const store = new Store({
  portName: 'REACT_CHROME_EXTENSION'
});

ReactDOM.render(
  <Provider store={store}>
    <Options />
  </Provider>, document.getElementById('app')
);
