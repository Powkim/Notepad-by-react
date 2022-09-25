import React from 'react';
import { useState, useEffect } from "react";
import './Create.css';

import {  Link } from "react-router-dom"; 
import Main from './m'

function Create() {
  const [Title,setTitle]=useState('')
  const [Msg,setMsg]=useState('')
  const listtitle = JSON.parse(localStorage.getItem('title'))
  const listmsg = JSON.parse(localStorage.getItem('title'))
  const [TitleList,setTitleList]=useState(listtitle)
  const [MsgList,setMsgList]=useState((listmsg))
  const Title_key="title"
  const Msg_key="msg"
 if(listtitle===null||listmsg===null){
  localStorage.setItem(Title_key, JSON.stringify([]))
  localStorage.setItem(Msg_key, JSON.stringify([]))
 }
console.log(TitleList)
  // useEffect(()=>{
  //   localStorage.setItem(Title_key,JSON.stringify(Title))
  // })
  
  useEffect(() => {
    localStorage.setItem(Title_key, JSON.stringify(TitleList));
  });
  useEffect(() => {
    localStorage.setItem(Msg_key, JSON.stringify(MsgList));
  });


const onSubmit = (event)=>{
  event.preventDefault()
  
  
}
  const onChangeTitle =(event)=>{
setTitle(event.target.value)
  }
    const handleChangeMsg=(event)=>{
    setMsg(event.target.value)
   }
  
  const saveTitle=()=>{
    localStorage.setItem(Title_key,JSON.stringify(TitleList))//원래 title이였는데 안돼서 바꿈 왜 안됐는지 이유 찾을것.
    }

  const saveMsg=()=> {
    localStorage.setItem(Msg_key, JSON.stringify(MsgList));
  }
const onClick=()=>{
setTitle("")
setTitleList([Title,...TitleList])
saveTitle()
    setMsg("")
  setMsgList([Msg,...MsgList])
  saveMsg()
}

//   const saveMsgs = localStorage.getItem(Msg_key)
//   const msgs=JSON.parse(saveMsgs)
//  console.log(localStorage.getItem)




 
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

    </header>
    <form onSubmit={onSubmit}>
    <button id='createButton' onClick={onClick} >cre</button>
<div id='CreateTitlewrap'>
  <textarea placeholder='Write Your Title' onChange={onChangeTitle} value={Title} ></textarea>
</div>
<div id='CreateContentWrap' >
<textarea placeholder='Write Your Content'onChange={handleChangeMsg} value={Msg}></textarea>
</div>
</form>
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