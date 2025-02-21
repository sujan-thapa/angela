import React, { useState } from 'react'
import './App.css'
import animals, { useAnimals } from './components/data'
import cars from "./components/practice";


// console.log(animals);
const [cat, dog] = animals;
// console.log(cat);

// const { name, sound } = cat;
// console.log(name);

const {
  name,
  sound,
  feedingRequirements: { food, water },
} = cat;
// const {
//   feedingRequirements: { food, water },
// } = cat;

// console.log(water);

// console.log(useAnimals(cat));
const [animal, makeSound] = useAnimals(cat);

console.log(animal);
// console.log(makeSound);
makeSound();

// Destructure the first and second car objects
const [honda, tesla] = cars;

const {
  model: hondaModel,
  coloursByPopularity: [hondaTopColour],
  speedStats: { topSpeed: hondaTopSpeed, zeroToSixty: hondaZeroToSixty },
} = honda;

const {
  model: teslaModel,
  coloursByPopularity: [teslaTopColour, teslaSecondColor],
  speedStats: { topSpeed: teslaTopSpeed, zeroToSixty: teslaZeroToSixty },
} = tesla;

function App() {
  return <>
    <table>
      <tr>
        <th>Brand</th>
        <th>Top Speed</th>
      </tr>
      <tr>
        <td>{tesla.model}</td>
        <td>{teslaTopSpeed}</td>
        {/* <td>{teslaSecondColor}</td> */}
        <td>{teslaTopColour}</td>
      </tr>
      <tr>
        <td>{honda.model}</td>
        <td>{hondaTopSpeed}</td>
        <td>{hondaTopColour}</td>
      </tr>
    </table>
  </>
}

export default App;