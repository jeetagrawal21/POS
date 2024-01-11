import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate=useNavigate();

    const[username, setUsername] = React.useState('')
    const[password, setPassword] = React.useState('')
    // const[email, setEmail] = React.useState('')
    // const[name, setName] = React.useState('')

    function handleHome(event) {
        event.preventDefault();
        navigate('/');
    }

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:3030/register', {username,password})
        .then(res => {
            console.log("Here ",res.data)
            if (res.data === "Registration successful") {
                navigate('/home')
            }
            else {
                alert("User already exists.")
            }
            
        })
        .catch(err => console.log(err));
    }

  return (
    <div className='welcome-container'>
    <h2 className='login-heading'>Please enter details for creting an account</h2>
    <form onSubmit={handleSubmit}>

      <div className='form-control'>
        <label>Username:</label>
        <input
          type="text"
          placeholder="Enter username"
          className='form-control'
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label htmlFor='password'>Password:</label>
        <input
          type="password"
          placeholder="Enter password"
          className='form-control'
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type='button' className='btn-success' onClick={handleHome}>
        Back
      </button>

      <button type='submit' className='btn-success'>
        Register
      </button>
    </form>
    </div>
  );
}

export default Register;