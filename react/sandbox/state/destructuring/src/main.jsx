import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css';
import "./styles/App1.css"

import App2 from './App2.jsx';

createRoot(document.getElementById('root1')).render(
  <StrictMode>
    <App2 />
  </StrictMode>
);