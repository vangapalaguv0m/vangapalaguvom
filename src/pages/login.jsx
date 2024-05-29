import React from 'react'
import { Link  } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";


function login() {
  return (
    <div className='login-full-body'>
        <div className='login-main-body'>
            <form action="Login" method='post'>
              <h1>Login</h1>
                <input type="text" id="user" placeholder='User Name'></input>
                <input type="password" id="pass" placeholder='Password'></input><br></br>
    <button type='submit' id='login-btn'>Login</button>
    <p id="login-register-btn">I Don't Have Account <Link to="/Register">Create Account</Link></p>
                
            </form>
          <h2>Or</h2>
          <div className='login-verification'>
            <button id="login-verification-button">Login With Google <FcGoogle /></button><br/>
            <button id="login-verification-button">Login With Face Book</button><br/>
            <button id="login-verification-button">Login With Instagram</button><br/>
            <button id="login-verification-button">Login With Git Hub</button><br/>
    </div>
        </div>
    </div>
  )
}

export default login