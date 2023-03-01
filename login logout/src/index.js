import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route } from 'react-router-dom';
import Router from './Router';
import { UserProvider } from './Usercontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <UserProvider>
        <Router />
      </UserProvider>
    </React.StrictMode>
  </BrowserRouter>

);
reportWebVitals();
