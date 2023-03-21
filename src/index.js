import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";

// Render commponents into DOM from id=root
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);