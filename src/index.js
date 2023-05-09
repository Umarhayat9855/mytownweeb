import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { DarkModeContextProvider } from "./context/darkModeContext";
import "./i18next";
ReactDOM.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
