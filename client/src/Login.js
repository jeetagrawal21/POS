import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Login() {

    const[username, setUsername] = React.useState('')
    const[password, setPassword] = React.useState('')
    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:3030/login', {username,password})
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

  return (
    <div className='d-flex vh-100 justify-content-center align-items-center'>
        <div className='p-3 bg-white w-25'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
            <label>Username:</label>
            <input type="text" placeholder="Enter username" className='form-control'
            onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className='mb-3'>
        <label htmlFor='password'>Password:</label>
            <input type="password" placeholder="Enter password" className='form-control'
            onChange={(e) => setPassword(e.target.value)}/>
        </div>

        <button className='btn-btn-success'>Login</button>

      </form>
      </div>
    </div>
  );
}

export default Login;