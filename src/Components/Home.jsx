import React from 'react';
import {Link} from "react-router-dom";
import axios from "axios";


const Home = (props) => {
    function handleSubmit(e){
        e.preventDefault();
        const id=e.target.name;
        axios.delete(`https://api.thomso.in/apiV1/assignment/${id}`).then(()=>props.userDisplay()).catch((error)=>console.log(error));
     
    }
    function handleClick(e){
        const Id=e.target.name
        props.userUpdate(Id);
    }
    function show(element){
      return ( <>
       <form onSubmit={handleSubmit} name={element.id}>
       <div className="index">
       <div className="num">{element.id}</div>
      <div className="name" name="username">{element.name}</div>
      <div className="mail" name="gmail">{element.email}</div>
      <div className="contact" name="phone">{element.contact}</div>
      <div className="actions"><Link to="/edit"><button onClick={handleClick} name={element.id}>Edit</button></Link><button type="submit">Delete</button></div>
       </div>
       </form>
       
    
  </>)}
  return (
    <>
       <div className="App">
      <h1>Employee Management System</h1>
      <button className="add"><Link to="/add">Add Employee</Link></button>
    </div>
    <div className="index">
      <div className="num"><h4>No.</h4></div>
      <div className="name"><h4>Name</h4></div>
      <div className="mail"><h4>Email</h4></div>
      <div className="contact"><h4>Contact Number</h4></div>
      <div className="actions"><h4>Actions</h4></div>
    </div>
   
   
   
    {props.userData.map(show)}
      
    
    </>
  )
}

export default Home
