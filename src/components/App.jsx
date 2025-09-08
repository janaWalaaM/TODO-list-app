import React, { useState } from "react";
import TodoItem from "./todoItem";
function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function handeldelet(id) {
    setItems((prev) => {
      return prev.filter((item, i) => {
        return i !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItemm, i) => (
            <TodoItem key={i} id={i} item={todoItemm} deletitem={handeldelet} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
