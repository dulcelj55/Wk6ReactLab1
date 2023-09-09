import { useState } from "react"

const ColorChanger = () => {
    const[backgroundColor,setbackgroundColor] = useState ('red')
  return (
    <div>ColorChanger
    <button> inside button </button>
    </div>
  )
}

export default ColorChanger