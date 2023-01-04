import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthContxtProvider } from './context/auth-context';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AuthContxtProvider><App /></AuthContxtProvider>);
