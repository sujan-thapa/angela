import React, {useState} from "react";
import Items from "./components/ToDoItem";

function App() {
  const [list, addList] = useState({
    one: "sujan",
    two: "thapa"
  })

  // new state for input
  const [inputValue, setInputValue] = useState("")  

  function updateList(event){
    if (inputValue.trim()) {
      addList([...list,inputValue.trim()])
  
    }
  }

  function deleteItem(id){
    addList((prevValue)=>{
      return Object.values(prevValue).filter((item, index) => {
        return index !== id;
      });

    })

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
          {/* {list.map((item, index) => (
            <Items key={index} id={index} text={item} onChecked={deleteItem} />
          ))} */}

          {Object.values(list).map((item, index) => (
            <Items key={index} id={index} text={item} onChecked={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
