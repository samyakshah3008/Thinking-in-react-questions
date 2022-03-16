import React, { useState } from "react";

export default function Question4() {
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [buttonChange, setButtonChange] = useState("red");

  const onChangeEvent1 = (e) => {
    setPassword1(() => e.target.value);
  };

  const onChangeEvent2 = (e) => {
    setPassword2(() => e.target.value);
  };

  const onClickEvent = () => {
    if (password1 === password2) {
      setButtonChange(() => "blue");
      console.log(password1);
    } else {
      setButtonChange(() => "red");
    }
  };

  return (
    <div className="App">
      <input onChange={onChangeEvent1} />

      <input onChange={onChangeEvent2} />
      <button
        disabled={password1 === password2 ? false : true}
        style={{ color: buttonChange }}
        onClick={onClickEvent}
      >
        Submit button
      </button>
    </div>
  );
}