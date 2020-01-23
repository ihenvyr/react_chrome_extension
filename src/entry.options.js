import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'webext-redux';
import OptionsContainer from './components/Options';

const store = new Store({
  portName: 'REACT_CHROME_EXTENSION'
});

ReactDOM.render(
  <Provider store={store}>
    <OptionsContainer />
  </Provider>, document.getElementById('app')
);
