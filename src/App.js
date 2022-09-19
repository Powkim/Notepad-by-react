import { useState, useEffect } from "react";
import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; 
import Main from './m'
import Create from './Create'

function App() {
  
return (
<div>
<BrowserRouter>
<Routes>
<Route path='/' element={<Main/>}></Route>
<Route path='/create' element={<Create/>}></Route>
</Routes>
</BrowserRouter>
</div>

)
}


export default App;
