import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'tailwindcss'; // Injects Tailwind CSS styles instantly

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
