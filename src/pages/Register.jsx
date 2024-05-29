import React from 'react'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc';
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaMobile } from "react-icons/fa";



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
            <h2>Or</h2>
            <button id="login-verification-button">Login With Mobile  <FaMobile /></button><br/>
            <button id="login-verification-button">Login With Google <FcGoogle /></button><br/>
            <button id="login-verification-button">Login With Face Book < BiLogoFacebookSquare/></button><br/>
            <button id="login-verification-button">Login With Git Hub < FaGithub/></button><br/>
        </div>
    </div>
  )
}

export default Register