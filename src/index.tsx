import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
/** Browser entry point kept deliberately small; App owns all page behavior. */
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('The root element was not found.');
ReactDOM.createRoot(rootElement).render(<React.StrictMode><App /></React.StrictMode>);
