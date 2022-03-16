import React, { useState } from "react";

export default function Question6() {
  const [fontSize, setFontSize] = useState(16);

  const clickEventHandler = () => {
    // console.log("clicked");
    setFontSize(() => fontSize + 8);
    // console.log(fontSize);
  };

  const clickEventHandler2 = () => {
    // console.log("clicked2");
    setFontSize(() => fontSize - 8);
  };

  return (
    <div className="App">
      <h2>Pick up the font size</h2>
      <button onClick={clickEventHandler}> Increase </button>
      <button onClick={clickEventHandler2}> Decrease </button>
      <br />
      <br />
      <div style={{ fontSize: fontSize + "px" }}>
        {" "}
        Font will look like this{" "}
      </div>
    </div>
  );
}