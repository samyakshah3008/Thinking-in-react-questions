import { useState } from "react"


export default function Toast({hideToast, clickHandler}){ 
    return(
        <div style={{display: hideToast}}>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis facilis doloribus neque eaque eius cupiditate dolorum nemo, aperiam modi aspernatur.</div>
        <button onClick={clickHandler}>Hide Button</button>
        </div>
    )
}