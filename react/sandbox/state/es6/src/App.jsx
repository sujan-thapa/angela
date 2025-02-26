import React, {useState} from "react";

function App() {
  const [list, addList] = useState(["A Item", "sujan", "thapa"])

  // new state for input
  const [inputValue, setInputValue] = useState("")  

  function updateList(event){
    if (inputValue.trim()) {
      addList([...list,inputValue.trim()])
  
    }
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input name="list" value={inputValue} type="text" onChange={(e)=>setInputValue(e.target.value)} />
        <button onClick={updateList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {/* <li>A Item</li> */}
          {list.map((item, index)=>( <li key={index}>{item}</li> ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
