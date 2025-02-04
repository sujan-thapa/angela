//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <div>
      <h1>My React App</h1>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
