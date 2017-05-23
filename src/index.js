import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reducer from './reducers'
import 'normalize.css/normalize.css'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css'

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
