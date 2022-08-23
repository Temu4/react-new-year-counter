import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const isLoading = false;

root.render(
  <React.StrictMode>
    <App isLoading={isLoading} />
  </React.StrictMode>
);
