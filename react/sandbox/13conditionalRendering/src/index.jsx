import React from "react";
import { StrictMode } from 'react';

import { createRoot } from "react-dom/client";
// import App from "./components/App";
import App1 from "./components/App1";


const root = createRoot(document.getElementById("root"))
root.render(
    <StrictMode>
        <App1 />
    </StrictMode>
)




