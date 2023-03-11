import React from 'react';
import ReactDOM from 'react-dom/client';
import RepositoryProvider from './contexts/RepositoryContext';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RepositoryProvider>
      <App />
    </RepositoryProvider>
  </React.StrictMode>
);
