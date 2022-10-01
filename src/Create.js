import React from 'react';
import {useState} from 'react' 
import './Create.css';
import {  Link,useNavigate} from "react-router-dom"; 
import Main from './m'
;import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faFilePen,faPencil,faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


function Create() {
  const [Title,setTitle]=useState('')
  const [Msg,setMsg]=useState('')
  const navigate=useNavigate()
  const onChangeTitle =(event)=>{
setTitle(event.target.value)
  }
 const handleChangeMsg=(event)=>{
    setMsg(event.target.value)
   }

  let now= new Date()
  let key =now.toLocaleString()
  const save=()=>{
    localStorage.setItem(key,JSON.stringify({
    time:key,
    title:Title,
    msg:Msg,
    onder:Date.parse(now)
    
  }))
  navigate(`/view/${key}`);
    }


const onClick=()=>{

save()

}




return (<div>
  <div id='CreateWrap'>
    <div id='MainWrap'>
    <header>
   
    <Link to='/'> <h3>My note</h3> </Link> <br></br>

    <button ><FontAwesomeIcon  id='createbutton'onClick={onClick}   icon={faFilePen} color='#AB4E4E' size='lg' /></button>
    </header>
  
<div id='CreateTitlewrap'>
  <textarea placeholder='Write Your Title' onChange={onChangeTitle} value={Title} ></textarea>
</div>
<div id='CreateContentWrap' >
<textarea placeholder='Write Your Content'onChange={handleChangeMsg} value={Msg}></textarea>
</div>

  </div>
  </div>

 </div>)

}

export default Create;