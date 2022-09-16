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
return (<div>
  <h1>My To Do list!</h1>
  
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
</form>
</div>)
}


export default App;
