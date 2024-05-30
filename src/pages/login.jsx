import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaMobile } from "react-icons/fa";

function Login() {
  return (
    <div className='login-full-body'>
      <div className='login-main-body'>
        <form action="Interface" method='post'>
          <h1>Login</h1>
          <input type="text" id="user" placeholder='User Name' />
          <input type="password" id="pass" placeholder='Password' /><br />
          <button type='submit' id='login-btn'>Login</button>
          <p id="login-register-btn">I Don't Have Account <Link to="/Register">Create Account</Link></p>
        </form>
        <h2>Or</h2>
        <button id="signup-verification-button">Login With Mobile  <FaMobile /></button><br/>
            <button id="signup-verification-button">Login With Google <FcGoogle /></button><br/>
            <button id="signup-verification-button">Login With Face Book < BiLogoFacebookSquare/></button><br/>
            <button id="signup-verification-button">Login With Git Hub < FaGithub/></button><br/>
      </div>
    </div>
  );
}

export default Login;
