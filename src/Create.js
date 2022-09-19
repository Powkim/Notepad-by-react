import React from 'react';
import { useState, useEffect } from "react";
import './Create.css';

import {  Link } from "react-router-dom"; 


function Create() {
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
    <button id='createButton'>cre</button>
    </header>
<div id='CreateTitlewrap'>
  <textarea placeholder='Write Your Title' ></textarea>
</div>
<div id='CreateContentWrap' >
<textarea placeholder='Write Your Content'></textarea>
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