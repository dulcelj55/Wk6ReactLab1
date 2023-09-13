import { useState } from "react"
import { color } from "../../utility/color";


const ColorChanger = () => {
  const [buttonColor,setBackgroundColor] = useState("red");
 
 

  return (
    <div>
    <button onClick={()=> setBackgroundColor(color)}  style={{backgroundColor: buttonColor}}> Change Color By Clicking </button>
   
    </div>
  )
}

export default ColorChanger