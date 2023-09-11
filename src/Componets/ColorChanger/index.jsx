import { useState } from "react"



const ColorChanger = () => {
  const [buttonColor,setBackgroundColor] = useState("red");

  const color = ()=>{
    const setBGC = Math.floor(Math.random()*16777215).toString(16);
    return '#' + setBGC
  }
  

  return (
    <div>
    <button onClick={()=> setBackgroundColor(color)}  style={{backgroundColor: buttonColor}}> Change Color By Clicking </button>
   
    </div>
  )
}

export default ColorChanger