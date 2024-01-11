import React from 'react';
import '../index.css';

function WelcomePage() {

    return (
      <div className='welcome-container'>
        <h2 className='welcome-heading'>Welcome to this amazing Point-Of-Sale App! Proceed with one of the following options
        </h2>
        <a href='/login' className='welcome-link'>Login</a>
        <a href='/register' className='welcome-link'>Register</a>
      </div>
    );
  }

export default WelcomePage;