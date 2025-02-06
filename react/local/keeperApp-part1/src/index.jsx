//1. Create a new React app.
//2. Create a App.jsx component.
//3. Create a Header.jsx component that renders a <header> element
//to show the Keeper App name in an <h1>.
//4. Create a Footer.jsx component that renders a <footer> element

import React from "react";
import {createRoot} from "react-dom/client";
import App from "./components/App"

const root = createRoot(document.getElementById("root"))
root.render(<App />)


