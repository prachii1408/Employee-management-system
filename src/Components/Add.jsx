import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

const Add = (props) => {
   const navigate=useNavigate();
    const [Name,SetName]=useState("");
    const [Contacts,SetContacts]=useState("");
    const [Mail,SetMail]=useState("");
    function handleName(event){
        const newName=event.target.value;
         SetName(newName);
    }
  
    function handleContact(event){
        const newContact=event.target.value;
         SetContacts(newContact);
    }
    function handleMail(event){
        const newMail=event.target.value;
        SetMail(newMail);
    }
    function handleSubmit(e){
        
        e.preventDefault();
        const config={
            name:Name,
            email:Mail,
            contact:Contacts
        }
        axios.post("https://api.thomso.in/apiV1/assignment",config).then(()=>props.userDisplay()).catch((error)=>
        console.log(error)).then(()=>navigate("/"));  
        
    }
  return (
    <div className='App'>
    <form onSubmit={handleSubmit} >
    <label htmlFor="name"><h2>Name</h2></label>
      <input id="name" type="text" onChange={handleName} value={Name}></input><br />
      <label htmlFor="Email"><h2>Email</h2></label>
      <input id="Email" type="text" onChange={handleMail} value={Mail}></input><br/>
      <label htmlFor="Contacts"><h2>Contact</h2></label>
      <input id="Contacts" type="text" onChange={handleContact} value={Contacts}></input><br/>
     <button type="submit" className='add'>Submit</button>
      </form>
    </div>
   
    
    
  )
}

export default Add

