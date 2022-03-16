import React, { useState } from "react";

export default function Question3() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  
  const changeEventHandler = (e) => {
    setPassword(() => e.target.value);
  };

  const clickEventHandler = (e) => {
    var regularExpression = /([a-zA-Z]+[0-9]+)|([0-9]+[a-zA-Z]+)/;
    var valid = regularExpression.test(password);
    if (valid) {
      setMessage("Strong Password");
    } else {
      setMessage("Weak Password");
    }
  };

  return (
    <div className="App">
      <input onChange={changeEventHandler} />
      <button onClick={clickEventHandler}>Log in</button>
      <div> {message} </div>
    </div>
  );
}