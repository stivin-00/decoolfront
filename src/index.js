import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {createStore} from "redux"
import {Provider} from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './Reducers';

import './index.css';
import './style.css';
import './preloder.css';
import "antd/dist/antd.css";
import App from './App';
// import reportWebVitals from './reportWebVitals';


//store
const store = createStore(rootReducer, composeWithDevTools())

ReactDOM.render(
  // <h1>hi</h1>,
  <Provider store={store}>
    <BrowserRouter>
    <div className="main-body">
      <App />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
