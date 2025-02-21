import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css';
import "./styles/App1.css"

import App1 from './App1.jsx';

createRoot(document.getElementById('root1')).render(
  <StrictMode>
    <App1 />
  </StrictMode>
);