import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './app';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.NODE_ENV === "production"
    ? "/E-commerce_ReactJS"
    : "/"}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
