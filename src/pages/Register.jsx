import React from 'react'

function Register() {
  return (
    <div className='signup-full-body'>
        <div className='signup-main-body'>
            <form action="Register" method='post'>
              <h1>Register</h1>
                <input type="text" id="user" placeholder='User Name'></input>
                <input type="password" id="pass" placeholder='Password'></input><br></br>
    <button type='submit' id='login-btn'>Login</button>
    <p id="login-register-btn">Already Have an Account <a href="login.jsx">Login</a></p>
                
            </form>
        </div>
    </div>
  )
}

export default Register