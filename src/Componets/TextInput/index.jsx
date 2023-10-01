import { useState } from "react"

const TextInput = () => {
  const [inputValue, setInputValue]= useState ("")


  return (

    <>
    <div>Type Something Here:</div>
    < input value ={inputValue} placeholder="Type here" onChange ={(e) =>setInputValue(e.target.value)}/>
    <button onClick= {() => setInputValue(inputValue)}>Submit</button>
    <p>This is what you typed: {inputValue}</p>
    
    </>
    
    
  )
}

export default TextInput

