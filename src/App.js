import axios from "axios";
import './App.css';
import {Route,Routes} from "react-router-dom";
import Home from "./Components/Home";
import Add from "./Components/Add";
import { useEffect, useState } from "react";
import Edit from "./Components/Edit";

function App() {
  const [data,setData]=useState([]);  
  const [ID,setID]=useState(0);
  function display(){
    axios.get("https://api.thomso.in/apiV1/assignment").then((res)=>{
   setData(res.data);
  }).catch((e)=>console.log(e));

  }
  
useEffect(()=>{
  display();
},[]);

function update(id){
  setID(id);
}
 
  return (<>
  <Routes>
    <Route path="/" element={<Home userData={data} userDisplay={display} userUpdate={update}/>} />
    <Route path="/add" element={<Add userDisplay={display}/>} />
    <Route path="/edit" element={<Edit userDisplay={display} id={ID}/>} />
  </Routes>
   
  </>
   
  );
}

export default App;
