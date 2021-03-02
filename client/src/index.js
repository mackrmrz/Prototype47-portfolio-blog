import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Router } from 'react-router-dom';
import './index.css';
import App from './App';
import axios from "axios";
import history from './history';

axios.defaults.baseURL="http://localhost:7900/";
axios.defaults.headers.common[ 'Authorization'] = 'Bearer' + localStorage.getItem('token');
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,


  document.getElementById('root')
);

