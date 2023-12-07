import React, {StrictMode} from 'react';
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Login from './Login';
import HomePage from './HomePage';


const root = createRoot(document.getElementById('root'));
root.render(

  <StrictMode>
    <BrowserRouter>
      <h1>My App</h1>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>

);
