//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import react from "react";
import { createRoot } from "react-dom/client";

function App() {
  let color = "";
  let message = "";
  // const date = new Date(2025, 1, 1, 13);
  const date = new Date();
  const time = date.getHours();
  if (time >= 0 && time < 12) {
    message = "Good Morning";
    color = "red";
  } else if (time >= 12 && time < 18) {
    message = "Good Afternoon";
    color = "green";
  } else {
    message = "Good Evening";
    color = "blue";
  }

  return (
    <div>
      <h1 className="heading" style={{ color }}>
        Good Morning
      </h1>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
