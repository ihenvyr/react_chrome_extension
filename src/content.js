import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'react-chrome-redux';
import App from './components/App';

const store = new Store({
  portName: 'REACT_CHROME_EXTENSION'
});

window.addEventListener('load', () => {
  const injectedDOM = document.createElement('div');
  injectedDOM.id = 'react-chrome-extension';
  document.body.appendChild(injectedDOM);

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, injectedDOM
  );
});
