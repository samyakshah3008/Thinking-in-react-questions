import React, { useState } from "react";

export default function Question5() {
  const [message, setMessage] = useState("Show Password");
  const [passwordType, setPasswordType] = useState("password");

  const clickEventHandler = () => {
    setMessage(() => "Hide Password");
    if (message === "Hide Password") {
      setMessage(() => "Show Password");
      setPasswordType(() => "password");
    } else if (message === "Show Password") {
      setPasswordType(() => "text");
    }
  };

  return (
    <div className="App">
      <input type={passwordType} />
      <button onClick={clickEventHandler}> {message} </button>
    </div>
  );
}