import { useState } from "react"

const TextInput = () => {
  const [inputValue, setInputValue]= useState ("")


  return (

    <>
    < input value ={inputValue} placeholder="Type here" onChange ={(e) =>setInputValue(e.target.value)}/>
    <button onCLick= {() => setInputValue()}></button>
    
    </>
    
    
  )
}

export default TextInput

