import { useState, useEffect } from "react";
import './App.css';

function App() {
  const [todo,settodo]=useState('')
  const [todos,settodos]=useState([])
  const deleteBtn = index => {

    settodos(todos.filter((item, todoIndex) => index !== todoIndex));
    
    };

const change=(event)=>settodo(event.target.value)
const onSubmit = (event) => {
  event.preventDefault();
  if (todo == "") {
    return;
  } else {
    settodos((currentArray) => [...currentArray, todo]);
    settodo("");
  }
}
return (
<div>
<div id='mainWrap'>
  <div id='main'>
    <header>My Note</header>
  <div id="searchWrap">Search..</div>
  <div id='notelistWrap'>
<ul >
<li id="Notelists"><span className='NoteTitle'>Solo Project</span><br></br>
<span className='NoteDate'>2022.04.21</span>
<button>del</button>
<button>edit</button>
</li>

</ul>

  </div>
  </div>
 
</div>
</div>
)
}


export default App;
