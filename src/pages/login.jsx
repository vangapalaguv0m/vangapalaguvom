import React from 'react'

function login() {
  return (
    <div className='login-full-body'>
        <div className='login-main-body'>
            <form action="main-page" method='post'>
              <h1>Login</h1>
                <input type="text" id="user" placeholder='User Name'></input>
                <input type="password" id="pass" placeholder='Password'></input><br></br>
    <button type='submit' id='login-btn'>Login</button>
    <p id="login-register-btn">I Don't Have Account <a href="Register.jsx">Create Account</a></p>
                
            </form>
        </div>
    </div>
  )
}

export default login