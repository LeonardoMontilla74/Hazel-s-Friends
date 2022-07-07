import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import dotenv from 'dotenv';
import axios from 'axios';
import store from './Redux/store';
import App from './App';
import './index.css';

dotenv.config();
axios.defaults.baseURL = REACT_APP_URL || "http://localhost:3001";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
