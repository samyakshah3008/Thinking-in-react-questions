import React, { useState } from "react";

export default function Question1() {
  const [counter, setCounter] = useState(100);

  const onChangeEvent = (e) => {
    let newCount = 100;
    // console.log(e.target.value.length);
    setCounter(newCount - e.target.value.length);
  };

  return (
    <div>
      <input onChange={onChangeEvent} />
      <div> {counter} </div>
    </div>
  );
}