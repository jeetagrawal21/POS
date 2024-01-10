import React from 'react';
import '/Users/jeetagrawal/Desktop/Projects/POS/Point-of-Sale/client/src/index.css';

function HomePage() {

    return (
      <div className='welcome-container'>
        <h2 className='welcome-heading'>
        </h2>
        <a href='/login' className='welcome-link'>Login</a>
        <a href='/register' className='welcome-link'>Register</a>
      </div>
    );
  }

export default HomePage;
