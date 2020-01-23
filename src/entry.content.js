import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'webext-redux';
import ContentContainer from './components/Content';

const store = new Store({
  portName: 'REACT_CHROME_EXTENSION'
});

window.addEventListener('load', () => {
  const injectedDOM = document.createElement('div');
  injectedDOM.id = 'react-chrome-extension';
  document.body.appendChild(injectedDOM);

  ReactDOM.render(
    <Provider store={store}>
      <ContentContainer />
    </Provider>, injectedDOM
  );
});
