import { useState } from 'react'

import './App.css'

import ColorChanger from './Componets/ColorChanger'
import ContactForm from './Componets/ContactForm'
import ItemList from './Componets/ItemList'
import TextInput from './Componets/TextInput'
import HelloWorld from './Componets/HelloWorld'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>
        Promt 1:
        <HelloWorld/>
        Promt 2:
        <ColorChanger/>
        Promt 3:
        <ContactForm/>
         Promt 4:
        <TextInput/>
        Promt 5:
        <ItemList/>
        

      </h1>
    </>
  )
}

export default App
