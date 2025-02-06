import React from "react";
import { createRoot } from "react-dom/client";

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "2px solid black",
};
customStyle.color = "blue";

function App() {
  // return <h1 style={{ color: "red" }}>Hello, World</h1>;
  return <h1 style={customStyle}>Hello, World</h1>;
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
