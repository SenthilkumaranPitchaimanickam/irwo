import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MsalProvider } from '@azure/msal-react';
import msalInstance from './modules/authentication/authProvider';

ReactDOM.render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <App />
    </MsalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);