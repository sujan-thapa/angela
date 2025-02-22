import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css';
import "./styles/App1.css"

import App3 from './App3.jsx';

createRoot(document.getElementById('root1')).render(
  <StrictMode>
    <App3 />
  </StrictMode>
);