import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.REACT_APP_YOUR_DOMAIN
const client_id = process.env.REACT_APP_YOUR_DOMAIN

const uri = 'https://githubappusers.netlify.app/dashboard'
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  <React.StrictMode>
    <Auth0Provider
     domain= {domain}
     clientId={client_id}
     redirectUri={uri}
     >
       <App />
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

