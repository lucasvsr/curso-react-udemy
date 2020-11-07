import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import mainReducer from './store';
import multi from 'redux-multi'
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = applyMiddleware(thunk, multi)(createStore)(mainReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);

serviceWorker.unregister();
