import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='signup-full-body'>
        <div className='signup-main-body'>
            <form action="Register" method='post'>
              <h1>Register</h1>
                <input type="text" id="user" placeholder='User Name'></input>
                <input type="password" id="pass" placeholder='Password'></input><br></br>
    <button type='submit' id='login-btn'>Register</button>
    <p id="login-register-btn">Already Have an Account <Link to ="/Login">Login</Link></p>
                
            </form>
        </div>
    </div>
  )
}

export default Register