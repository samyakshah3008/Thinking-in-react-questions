import React, { useState } from "react";

export default function Question2() {
  const [message, setMessage] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const onChangeEvent1 = (e) => {
    const value1 = e.target.value;
    console.log(value1);
    setPassword1(value1);
  };

  const onChangeEvent2 = (e) => {
    const value2 = e.target.value;
    console.log(value2);
    setPassword2(value2);
  };

  const onClickEvent = () => {
    console.log("Clicked");
    if (password1 === password2) {
      setMessage("Passwords match")
    } else {
      setMessage("Passwords don't match")
    }
  };

  return (
    <div className="App">
      <input onChange={onChangeEvent1} />
      <input onChange={onChangeEvent2} />
      <button onClick={onClickEvent}>Check Button</button>
      <div>{message}</div>
    </div>
  );
}