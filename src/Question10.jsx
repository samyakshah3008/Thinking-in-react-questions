import React, { useState } from "react";
import { nanoid } from "nanoid";

export default function Question10() {
  const [toDoList, setToDoList] = useState([]);
  const [message, setMessage] = useState("");

  const onChangeEvent = (e) => {
    // console.log(e.target.value);
    setMessage(() => e.target.value);
  };

  const onClickEvent = () => {
    console.log(message);
    setToDoList((prevList) => [
      ...prevList,
      { id: nanoid(), message: message, strike: false }
    ]);
  };
  // console.log(toDoList);

  const strikerOnClick = (id) => {
    console.log("clicked");
    const finalArray = toDoList.map((item) =>
      item.id === id ? { ...item, strike: !item.strike } : item
    );
    setToDoList(finalArray);
  };

  return (
    <div className="App">
      <input onChange={onChangeEvent} />

      <button onClick={onClickEvent}> Add to To-do list </button>

      <div>
        {" "}
        {toDoList.map((msg) => (
          <li
            style={{ textDecoration: msg.strike ? "line-through" : "none" }}
            onClick={() => strikerOnClick(msg.id)}
            key={msg.id}
          >
            {" "}
            {msg.message}{" "}
          </li>
        ))}{" "}
      </div>
    </div>
  );
}
