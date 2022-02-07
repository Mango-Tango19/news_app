import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import ErrorBoundry from './components/error-boundry'
import NewsItem from './components/newsItem';

import store from './store'
const { Provider } = require('react-redux');

ReactDOM.render(
  
  <Provider store={store}>
    <ErrorBoundry>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="news/:title" element={<NewsItem />} />
      
      </Routes>
    </BrowserRouter>
  </ErrorBoundry>
</Provider >,

  document.getElementById('root')
);

reportWebVitals();
