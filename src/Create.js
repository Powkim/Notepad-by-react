import React from 'react';
import { useState, useEffect } from "react";
import './Create.css';

import {  Link } from "react-router-dom"; 


function Create() {
  const [Title,setTitle]=useState('')
  const [Msg,setMsg]=useState('')

  const handleChangeTitle =(event)=>{
  setTitle(event.target.value)
  localStorage.setItem('title',event.target.value)
  }

  
  const handleChangeMsg=(event)=>{
    setMsg(event.target.value)
    localStorage.setItem('msg',event.target.value)
  }
  const resetcontent=(event)=>{
setTitle('')
setMsg('')
console.log(Msg)
  }
//   const [todo,settodo]=useState('')
//   const [todos,settodos]=useState([])
//   const deleteBtn = index => {

//     settodos(todos.filter((item, todoIndex) => index !== todoIndex));

//     };

// const change=(event)=>settodo(event.target.value)
// const onSubmit = (event) => {
//   event.preventDefault();
//   if (todo === "") {
//     return;
//   } else {
//     settodos((currentArray) => [...currentArray, todo]);
//     settodo("");
//   }
// }
return (<div>
  <div id='CreateWrap'>
    <div id='MainWrap'>
    <header>
    <Link to='/'> <span>My note</span> </Link>
    <button id='createButton' onClick={resetcontent}>cre</button>
    </header>
<div id='CreateTitlewrap'>
  <textarea placeholder='Write Your Title' onChange={handleChangeTitle} value={Title} >{localStorage.getItem('title')}</textarea>
</div>
<div id='CreateContentWrap' >
<textarea placeholder='Write Your Content'onChange={handleChangeMsg} value={Msg}>{localStorage.getItem('msg')}</textarea>
</div>
  </div>
  </div>
  {/* <h1>My To Do list!</h1>

<form onSubmit={onSubmit}>

<button >
  click
</button>
</form>
<form onSubmit={onSubmit}>


<ul>
{todos.map((item, index) => (
<li key={index}>
  {item}
<button onClick={ ()=>deleteBtn(index)}>delete!</button>
</li>
 ))}
</ul>
</form> */}
</div>)

}

export default Create;