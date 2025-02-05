import React from "react";
import { createRoot } from "react-dom/client";

const fName = "Sujan";
const lName = "Thapa";
const luckyNumber = 7;

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>
      {/* Hello {fName} {lName}! */}
      {/* Hello {fName + " " + lName}! */}
      Hello {`${fName} ${lName}`}!
    </h1>
    <p>Your lucky number is {luckyNumber}.</p>
  </div>
);
