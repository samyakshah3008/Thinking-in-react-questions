import React, { useState } from "react";

export default function Question11() {
  const [modeMessage, setModeMessage] = useState("Light Mode");
  const [color, setColor] = useState("blue");
  const [bgColor, setBgColor] = useState("white");
  const clickEventHandler = () => {
    setColor(() => "red");
    setModeMessage(() => "Dark Mode");
    setBgColor(() => "black");
    if (color === "red") {
      setColor(() => "blue");
      setModeMessage(() => "Light Mode");
      setBgColor(() => "white");
    }
  };
  return (
    <div style={{ backgroundColor: bgColor }} className="App">
      <div style={{ color: color }}> {modeMessage} </div>
      <button onClick={clickEventHandler}> Toggle </button>
    </div>
  );
}