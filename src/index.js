import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

const uri = 'https://githubappusers.netlify.app/dashboard'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
     domain= "dev-j-orriml.us.auth0.com"
     clientId= "O6N22Hi1XIS6Y9V5eHzMHw8DTothoCs3"
     redirectUri={uri}
     >
       <App />
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

