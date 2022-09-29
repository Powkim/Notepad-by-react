import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; 
import { memo, useEffect,useParams } from 'react';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faFilePen,faPencil,faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import View from "./View"
const Main = ({Msglist,TitleList}) =>{
const memolist = []
for(let i=0 ; i<localStorage.length;i++){
memolist.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
}



const onRemove = (item) => {
localStorage.removeItem(item.time)

}
const  onEdit = (item,i) => {
  console.log(localStorage.getItem(item.time))


}


 return (

    <div>
    
    <div id='mainWrap'>
      <div id='main'>
    
        <header><span>My note</span>
        <Link to='Create'>
          <FontAwesomeIcon id='createButton' icon={faFilePen} color='#AB4E4E' size='lg' />

</Link> </header>
      <div id="searchWrap"><FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon><span>Search..</span></div>
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
    {memolist.map((item,i)=>{
return (
  <li id="Notelists" key={i}>
    <form>
    <span className='NoteTitle'>{item.msg}</span><br></br>
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