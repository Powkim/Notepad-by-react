import { useState, useEffect } from "react";
import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; 
import Main from './m'
import Create from './Create'
import View from './View'
function App() {
  
return (
<div>
<BrowserRouter>
<Routes>
<Route path='/' element={<Main/>}></Route>
<Route path='/create' element={<Create/>}></Route>
<Route path='/view' element={<View/>}></Route>
</Routes>
</BrowserRouter>
</div>

)
}


export default App;
