import { useState } from "react";
import Toast from "./Toast";


export default function Question9Toast(){ 
    const [display,setDisplay] = useState("none")
    const clickHandler = () => {
        if(display === "none"){
            setDisplay("block")  
        }else{
            setDisplay("none") 
        }
            
    }
        return(
            <div>
            <button onClick = {clickHandler} >Show Toast</button>
            <Toast hideToast = {display} clickHandler={clickHandler} ></Toast>
            </div>
        )
}