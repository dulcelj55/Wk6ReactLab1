import { useState } from "react"


const ContactForm = () => {
  const [name, setName] = useState ("")
  const [email, setEmail] = useState ("")
  const [message, setMessage] = useState ("")
  const [formValues, setFormValues] = useState({});

// const handleChange = () =>{
//   setFormValues({ ...formValues,  });


  return (
    <>
    <div> ContactForm</div>
    <input value ={name} placeholder="Name" onChange ={(e) =>setName(e.target.value)}/>
    <input value ={email}  placeholder="Email" onChange ={(e) => setEmail(e.target.value)}/>
    <input value ={message}  placeholder="Message" onChange ={(e) => setMessage(e.target.value)}/>
    <button type="submit">Submit</button>
    <p>{name}'s email is {email}. They would like to say{message}</p>
    </>
  )
}

export default ContactForm