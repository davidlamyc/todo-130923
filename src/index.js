import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppUseEffect from './App-useEffect';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppUseEffect />
  </React.StrictMode>
);
