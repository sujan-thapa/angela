import React from "react";
// import ReactDOM from "react-dom";
import Heading from "./Heading";
import List from "./List";
// ReactDOM.render(
//   <div>
//     <h1>My Favourite Foods</h1>
//     <ul>
//       <li>Bacon</li>
//       <li>Jamon</li>
//       <li>Noodles</li>
//     </ul>
//   </div>,
//   document.getElementById("root")
// );
function App() {
  return (
    <div>
      <Heading />
      <List />
    </div>
  );
}
export default App;
