import React from 'react';
import { useState, useEffect } from "react";
import './Create.css';

import {  Link } from "react-router-dom"; 
import Main from './m'

function Create() {
  const [Title,setTitle]=useState('')
  const [Msg,setMsg]=useState('')
  const [TitleList,setTitleList]=useState('')
  const [MsgList,setMsgList]=useState('')
  const Title_key="title"
  const Msg_key="msg"
 

  // useEffect(()=>{
  //   localStorage.setItem(Title_key,JSON.stringify(Title))
  // })
  


  const onChangeTitle =(event)=>{
setTitle(event.target.value)
  }
  
  const handleChangeMsg=(event)=>{
    setMsg(event.target.value)
     saveMsg()
  }
  
  const saveTitle=()=>{
    localStorage.setItem(Title_key,JSON.stringify(TitleList))//원래 title이였는데 안돼서 바꿈 왜 안됐는지 이유 찾을것.
    }

  const saveMsg=()=> {
    localStorage.setItem(Msg_key, JSON.stringify(Msg));
  }
const onClick=()=>{
setTitle("")
  setTitleList((current)=>[Title,...current])
  saveTitle()
  setMsg("")
  setMsgList((current)=>[Msg,...current])

}
console.log(Title)
 
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
    <button id='createButton' onClick={onClick} >cre</button>
    </header>
<div id='CreateTitlewrap'>
  <textarea placeholder='Write Your Title' onChange={onChangeTitle} value={Title} ></textarea>
</div>
<div id='CreateContentWrap' >
<textarea placeholder='Write Your Content'onChange={handleChangeMsg} value={Msg}></textarea>
</div>
  </div>
  </div>
  <Main TitleList={TitleList}></Main>
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