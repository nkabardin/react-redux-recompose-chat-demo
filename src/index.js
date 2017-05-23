import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer from './reducer';
import 'normalize.css/normalize.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import spawnBot from './spawnBot';
import './index.css';

const store = createStore(reducer);

spawnBot(store, 'JohnLennon');
spawnBot(store, 'PaulMcCartney');
spawnBot(store, 'RingoStarr');
spawnBot(store, 'GeorgeHarrison');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
