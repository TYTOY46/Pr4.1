import React, { useEffect, useState } from "react";
const Button = (props) =>{
    const [click , setClick]= useState(-1)
    useEffect(() =>{
        document.title = `вы нажали ${click}`
//       console.log(click)
    })
    return(
        <button onClick={() => setClick (click +1 )}>{props.text} {click}</button>
    )
}
Button.defaultProps ={
    text:"кнопка"
}
export default Button