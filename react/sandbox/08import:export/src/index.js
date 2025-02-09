import React from "react";
import { createRoot } from "react-dom/client";
import { add, subtract, multiply, divide } from "./calculator";

//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png

// ReactDOM.render(
//   <ul>
//     <li>{add(1, 2)}</li>
//     <li>{multiply(2, 3)}</li>
//     <li>{subtract(7, 2)}</li>
//     <li>{divide(5, 2)}</li>
//   </ul>,
//   document.getElementById("root")
// );

const root = createRoot(document.getElementById("root"));
root.render(
  <ul>
    <li>{add(1, 2)}</li>
    <li>{multiply(2, 3)}</li>
    <li>{subtract(7, 2)}</li>
    <li>{divide(5, 2)}</li>
  </ul>
);
