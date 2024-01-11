import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import './App.css';
import Login from './Pages/Login';
import WelcomePage from './Pages/WelcomePage';
import Register from './Pages/Register';
import HomePage from './Pages/HomePage';

function App() {

return (
    <>
    <Router>
        <Routes>
            <Route path='/' element={<WelcomePage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='/home' element={<HomePage/>}/>

        </Routes>
    </Router>
    </>

    );
}

export default App;