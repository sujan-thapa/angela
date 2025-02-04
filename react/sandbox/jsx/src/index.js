// var React = require("react");
// var ReactDOM = require("react");
// ReactDOM.render(<h1>Hello World</h1>, document.getElementById("root"));
// Import createRoot from react-dom/client instead of react-dom
// var { createRoot } = require("react-dom/client");

import React from "react";
import { createRoot } from "react-dom/client";

// React 18 uses createRoot API
var root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>Hello World</h1>
    <p>snsns</p>
  </div>
);

// Choose the correct version based on your React version:
// React 18+ → Use createRoot from react-dom/client
// React 17 or older → Use ReactDOM.render() from react-dom
