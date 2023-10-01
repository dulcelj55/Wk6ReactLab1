import { useState } from "react"


const ContactForm = () => {
  const [name, setName] = useState ("")
  const [email, setEmail] = useState ("")
  const [message, setMessage] = useState ("")
  const [newName, setNewName] = useState ("")
  const [newEmail, setNewEmail] = useState ("")
  const [newMessage, setNewMessage] = useState ("")


const handleClick = () =>{
  setNewEmail(email)
  setNewMessage(message)
  setNewName(name)
 
   };


  return (
    <>
    <div> ContactForm</div>
    <input value ={name} placeholder="Name" onChange ={(e) =>setName(e.target.value)}/>
    <input value ={email}  placeholder="Email" onChange ={(e) => setEmail(e.target.value)}/>
    <input value ={message}  placeholder="Message" onChange ={(e) => setMessage(e.target.value)}/>
    <button type="submit" onClick={handleClick}>Submit</button>
    <p>Your name is {newName}, with email {newEmail}, and your message is {newMessage}</p>
    </>
  )
}

export default ContactForm