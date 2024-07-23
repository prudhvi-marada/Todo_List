//index.js - Serves as the entry point for your React application

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Your main application component
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <div>
    <App />
  </div>
  </React.StrictMode>,
  document.getElementById('root')
);
