// import React, {StrictMode} from 'react';
// import '@fortawesome/fontawesome-free/css/all.css';
// import { createRoot } from "react-dom/client"
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './index.css';
// import Login from './Components/Login';
// import WelcomePage from './Components/WelcomePage';
// import Register from './Components/Register';
// import HomePage from './Components/UserInterface/HomePage';


// const root = createRoot(document.getElementById('root'));
// root.render(

//   <StrictMode>
//     <BrowserRouter>
//       <h1 className='app-header'>THE POS APP</h1>
//       <Routes>
//         <Route path='/' element={<WelcomePage/>}/>
//         <Route path='/login' element={<Login/>}/>
//         <Route path='register' element={<Register/>}/>
//         <Route path='/home' element={<HomePage/>}/>
//       </Routes>
//     </BrowserRouter>
//   </StrictMode>

// );

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);