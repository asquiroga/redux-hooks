import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const rootReducer = (state = { counter: 0, name: "" }, action) => {
  
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1}
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1}
    case 'EQUAL':
        return { ...state }
    case 'NEW_NAME':
      return { ...state, name: action.payload }
    default:
    return state
  }
}

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
