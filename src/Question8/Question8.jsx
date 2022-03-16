import Home from "./Home";
import Profile from "./Profile";
import Contact from "./Contact";
import { useState } from "react";

export default function Question8() {
  const [display1, setDisplay1] = useState("none");
  const [display2, setDisplay2] = useState("none");
  const [display3, setDisplay3] = useState("none");

  const clickEventHandler1 = () => {
    setDisplay1("block");
    setDisplay2("none");
    setDisplay3("none");
  };

  const clickEventHandler2 = () => {
    setDisplay2("block");
    setDisplay1("none");
    setDisplay3("none");
  };

  const clickEventHandler3 = () => {
    setDisplay3("block");
    setDisplay1("none");
    setDisplay2("none");
  };
  return (
    <div>
      <button onClick={clickEventHandler1}>Home</button>
      <button onClick={clickEventHandler2}>Profile</button>
      <button onClick={clickEventHandler3}>Contact</button>

      <Home showHome={display1}></Home>
      <Profile showProfile={display2}></Profile>
      <Contact showContact={display3}></Contact>
    </div>
  );
}
