import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; 
import { memo, useEffect,useParams } from 'react';
import React from 'react'
import { render } from '@testing-library/react';

const Main = ({Msglist,TitleList}) =>{
const memolist = []
for(let i=0 ; i<localStorage.length;i++){
memolist.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
}
console.log(memolist)



const onRemove = (item) => {
localStorage.removeItem(item.time)
render()
}


 return (

    <div>
    
    <div id='mainWrap'>
      <div id='main'>
    
        <header><span>My note</span><Link to='Create'><button id='createButton'>cre</button></Link> </header>
      <div id="searchWrap">Search..</div>
      <div id='notelistWrap'>
    <ul >
    
    {/* {TitleList.map((item,index)=>{
<li key={index} id="Notelists">{item}</li>

    })} */}
    <li id="Notelists">
     
      <span className='NoteTitle'>ss</span><br></br>
    <span className='NoteDate'>{new Date().toLocaleDateString()


}</span>
    <button >del</button>
    <button><a href=''></a>edit</button>
    </li>
    {memolist.map((item,i)=>{
return (
  <li id="Notelists" key={i}>
    <form>
    <span className='NoteTitle'>{item.msg}</span><br></br>
    <span className='NoteDate'>{item.time}</span>
    <button id='delbutton' onClick={()=>{onRemove(item)}}> del</button>
    <Link to='View'> <button><a href=''></a>edit</button></Link></form>
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