import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//index.html에 있는 div의 root 태그를 불러옴
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

