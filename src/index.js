import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import {BrowserRouter} from 'react-router-dom'


//최상위 컴포넌트에서 감싸야 작동이됨
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
=======

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
>>>>>>> origin/feature/mypage
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
