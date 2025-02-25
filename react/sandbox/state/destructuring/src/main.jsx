import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css';
import "./styles/App1.css"

import App4 from './App4.jsx';

createRoot(document.getElementById('root1')).render(
  <StrictMode>
    <App4 />
  </StrictMode>
);