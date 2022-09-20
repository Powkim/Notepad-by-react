import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; 
import React from 'react'
const Main = () =>{
return (

    <div>
    
    <div id='mainWrap'>
      <div id='main'>
    
        <header><span>My note</span><Link to='Create'><button id='createButton'>cre</button></Link> </header>
      <div id="searchWrap">Search..</div>
      <div id='notelistWrap'>
    <ul >
    
    <li id="Notelists"><span className='NoteTitle'>{localStorage.getItem('title')}</span><br></br>
    <span className='NoteDate'>{`${localStorage.getItem('msg').slice(0,5)}...`}</span>
    <button>del</button>
    <button><a href=''></a>edit</button>
    </li>
    
    
    </ul>
    
      </div>
      </div>
     
    </div>
    
    </div>
    
    )
    }
    
    
    export default Main;