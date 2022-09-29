import React from 'react';
import { useState, useEffect } from "react";
import './Create.css';
import {  Link,useParams,useNavigate } from "react-router-dom"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faFilePen,faPencil,faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

;


function View({item,i}) {
  const id=useParams().id
  const [Title,setTitle]=useState(()=>{ return JSON.parse(localStorage.getItem(id)).title})
  const [Msg,setMsg]=useState(()=>{ return JSON.parse(localStorage.getItem(id)).msg})
const navigate = useNavigate()


  const onChangeTitle =(event)=>{
    setTitle(event.target.value)
      }
     const handleChangeMsg=(event)=>{
        setMsg(event.target.value)
       }
       let now= new Date()
       let key =now.toLocaleString()
       const save=()=>{
        if(id){
localStorage.removeItem(id)
        }
         localStorage.setItem(key,JSON.stringify({
         time:key,
         title:Title,
         msg:Msg,
         onder:Date.parse(now)
         
       }))
       navigate(`/view/${key}`);
       console.log('되고있나?')
         }
  // useEffect(()=>{
  //   localStorage.setItem(Title_key,JSON.stringify(Title))
  // })
  





const onClick=()=>{



  
save()

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
 
    <Link to='/'> <h3>My note</h3> </Link> <br></br>

    <button  id='createbutton' onClick={onClick}><FontAwesomeIcon  id='createbutton'onClick={onClick}  id='createButton' icon={faFilePen} color='#AB4E4E' size='lg' /></button>
    </header>
  
<div id='CreateTitlewrap'>
  <textarea placeholder='Write Your Title' onChange={onChangeTitle} value={Title} >
{JSON.parse(localStorage.getItem(id))?.title}

  </textarea>
</div>
<div id='CreateContentWrap' >
<textarea placeholder='Write Your Content'onChange={handleChangeMsg} value={Msg} >
{JSON.parse(localStorage.getItem(id))?.msg}
</textarea>
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

export default View;