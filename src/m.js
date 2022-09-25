import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; 
import { memo, useEffect } from 'react';
import React from 'react'
const Main = ({TitleList}) =>{
 let getItem = localStorage.getItem('msg')


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
    <button>del</button>
    <button><a href=''></a>edit</button>
    </li>
    {JSON.parse(getItem).map((e,i)=>{
return (
  <li id="Notelists" key={i}>
    <span id='notetitle'>{e}</span><br></br>
    <span className='NoteDate'>{new Date().toLocaleDateString()


}</span>
    <button>del</button>
    <button><a href=''></a>edit</button>
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