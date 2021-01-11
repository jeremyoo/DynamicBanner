import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore }  from 'redux';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async'
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension'

/* store */
const store = createStore(
  rootReducer,
  composeWithDevTools(),
  );

ReactDOM.render(
  <Provider store={store}>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </Provider>,
  document.getElementById('root')
);

