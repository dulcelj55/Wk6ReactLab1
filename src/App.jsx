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
        <HelloWorld/>
        <ColorChanger/>
        <ContactForm/>
        <ItemList/>
        <TextInput/>

      </h1>
    </>
  )
}

export default App
