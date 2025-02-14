// import React from "react";
// import { StrictMode } from 'react';

// import { createRoot } from "react-dom/client";
// import App from "./components/App";
import emojipedia from "./emojipedia";
// import "../public/styles.css";



//1. Apply CSS styles to App.jsx component
//to match the appearance on the completed app:
//https://c6fkx.csb.app/
//2. Extract the contact card as a reusable Card component.
//3. Use props to render the default Beyonce contact card
//so the Card component can be reused for other contacts.
//4. Import the contacts.js file to create card components.

// const root = createRoot(document.getElementById("root"))
// root.render(
//     <StrictMode>
//         <App />
//     </StrictMode>
// )

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// using map
// const result = numbers.map((currentNumber) => {
//   return currentNumber * 2;
// });

// console.log(result);

// using foreach
// let newArray = [];
// let result = numbers.forEach((currentNumber) => {
//   //   return currentNumber * 2;
//   newArray.push(currentNumber + 2);
// });
// console.log(newArray);

//Filter - Create a new array by keeping the items that return true.
let newArray = [];
// const result = numbers.filter((x) => {
//   return x > 40;
// });
// numbers.forEach((x) => {
//   if (x > 40) {
//     newArray.push(x);
//   }
// });

//Reduce - Accumulate a value by doing something to each item in an array.
// const initialValue = 1000;
// const result = numbers.reduce((x, y) => x + y, initialValue);
// console.log(result);

//Find - find the first item that matches from an array.
// const result = numbers.forEach((x) => {
//   if (x > 40) {
//     newArray.push(x);
//   }
// });

//FindIndex - find the index of the first item that matches.

// console.log(newArray);
// console.log(result);

// console.log(emojipedia);

const result = emojipedia.map((obj) => {
  //   return obj.meaning;
  return obj["meaning"].substring(0, 100);
});
console.log(result);

// result.forEach((x) => {
//   newArray.push(x.substring(0, 100));
//   //   console.log(x.substring(0, 100));
// });
// console.log(newArray);

