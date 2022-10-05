import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; 
import { memo, useEffect,useParams, useState } from 'react';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faFilePen,faPencil,faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import View from "./View"

const Main = ({Msglist,TitleList}) =>{
 
  const [Search,setSearch]=useState('') // onchange 시  !로 변경 
  const [Check,setCheck]=useState(false)//onchange시 값 저장용
const memolist = []

for(let i=0 ; i<localStorage.length;i++){
memolist.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
}



const onChange = (event) => {
setSearch(event.target.value)
setCheck(!Check)

}
const onRemove = (item) => {
localStorage.removeItem(item.time)

}
const  onEdit = (item,i) => {
  console.log(localStorage.getItem(item.time))
}
const filtering=(item)=>{
if(item.msg.includes(Search)){
return true
}
return false
}
const arr=memolist.filter(filtering)
console.log(arr.map((el)=>
el.msg
))
const clear=()=>{
  setSearch('')
}
 return (

    <div>
    
    <div id='mainWrap'>
      <div id='main'>
    
  <header> 
       <Link to='/'>
          <span id='maintitle'>My note</span>
           </Link>
        <Link to='Create'>
          <FontAwesomeIcon id='createButton' icon={faFilePen} color='#AB4E4E' size='lg' />

</Link>

 </header>
      <div id="searchWrap"><FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
      <input value={Search} onChange={onChange} id="searchinput" placeholder='Search..'></input>
      <button id="Xbutton" onClick={clear} >X</button>
      </div>
      <div id='notelistWrap'>
    <ul >
    
    {/* {TitleList.map((item,index)=>{
<li key={index} id="Notelists">{item}</li>

    })} */}
    {/* <li id="Notelists">
     
      <span className='NoteTitle'>ss</span><br></br>
    <span className='NoteDate'>{new Date().toLocaleDateString()


}</span>
<FontAwesomeIcon id='delbutton'  icon={faTrashCan} color="#FFF6C7"  size='lg' />
    <Link to='View'><FontAwesomeIcon id='editbutton' icon={faPencil} color="#FFF6C7" ></FontAwesomeIcon> </Link>
    </li> */}

    {Search?
    arr.map((item)=>{
      return (
      <li id="Notelists" >
      <form>
      <Link to={`view/${item.time}`}>
      <span className='NoteTitle'>{item.msg}</span><br></br></Link>
      <span className='NoteDate'>{item.time}</span>
        <button onClick={()=>{onRemove(item)}} id='delbutton'  ><FontAwesomeIcon icon={faTrashCan} color="#FFF6C7" size='lg' /></button>
        <Link to={`view/${item.time}`}>
  
  <button item={item} onClick={()=>{onEdit(item)}}>  <FontAwesomeIcon id='editbutton'  icon={faPencil} color="#FFF6C7"/> </button></Link></form>

  
     </li>
    )})
   
   
    :memolist.map((item,i)=>{
return (
  <li id="Notelists" key={i}>
    <form>
    <Link to={`view/${item.time}`}>
    <span className='NoteTitle'>{item.msg}</span><br></br></Link>
    <span className='NoteDate'>{item.time}</span>
      <button onClick={()=>{onRemove(item)}} id='delbutton'  ><FontAwesomeIcon icon={faTrashCan} color="#FFF6C7" size='lg' /></button>
    <Link to={`view/${item.time}`}>
  
        <button item={item} i={i} onClick={()=>{onEdit(item)}}>  <FontAwesomeIcon id='editbutton'  icon={faPencil} color="#FFF6C7"/> </button></Link></form>
  </li>
  
)
    })}
 
   
    </ul>
    
      </div>
      </div>
     
    </div>
    
    </div>
    
    )

    }
    
    
    export default Main;