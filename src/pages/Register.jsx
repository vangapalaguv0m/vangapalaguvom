<<<<<<< Updated upstream
import React from 'react'
import { Link ,useEffect} from 'react-router-dom';
=======
import React from 'react';
import { Link } from 'react-router-dom';
>>>>>>> Stashed changes
import { FcGoogle } from 'react-icons/fc';
import { BiLogoFacebookSquare } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';
import { FaMobile } from 'react-icons/fa';
import { app, auth, googleAuthProvider } from '../main.js'; // Adjusted import path
import { initializeApp,firebase } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import 'firebase/auth';



function Register() {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      const user = result.user;
      console.log(user);
      // Redirect user or update state after successful login
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };
<<<<<<< Updated upstream

=======
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
>>>>>>> Stashed changes

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXm0BA9IsOgmnAg6N0QX9ZxNj0-WNNNAU",
  authDomain: "dhanush-f9d2f.firebaseapp.com",
  projectId: "dhanush-f9d2f",
  storageBucket: "dhanush-f9d2f.appspot.com",
  messagingSenderId: "225401888791",
  appId: "1:225401888791:web:e75091451cda542792fc52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

function Register() {
  useEffect(() => {
    console.log('useEffect executed');
    const googleLoginBtn = document.getElementById('login-sign-in');

    const handleGoogleLogin = () => {
      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          console.log(user);
          window.location.href = "index.html"; // Redirect to another page if needed
        })
        .catch((error) => {
          console.error(error.message);
        });
    };

    if (googleLoginBtn) {
      console.log('Google login button found, adding event listener');
      googleLoginBtn.addEventListener('click', handleGoogleLogin);
    } else {
      console.error('Element with id "login-sign-in" not found');
    }

    // Clean up event listener on component unmount
    return () => {
      if (googleLoginBtn) {
        googleLoginBtn.removeEventListener('click', handleGoogleLogin);
      }
    };
  }, []);

  return (
    <div className='signup-full-body'>
      <div className='signup-main-body'>
        <form action="Register" method='post'>
          <h1>Register</h1>
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
          <input type="text" id="user" placeholder='User Name'></input>
          <input type="password" id="pass" placeholder='Password'></input><br></br>
          <button type='submit' id='login-btn'>Register</button>
          <p id="login-register-btn">Already Have an Account <Link to="/Login">Login</Link></p>
        <h2>Or</h2>
        <button id="login-verification-Mobile">Login With Mobile  <FaMobile /></button><br/>
        <button id="login-verification-Google" onClick={handleGoogleLogin}>Login With Google <FcGoogle /></button><br/>
        <button id="login-verification-button">Login With Face Book < BiLogoFacebookSquare/></button><br/>
        <button id="login-verification-button">Login With Git Hub < FaGithub/></button><br/>
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
          <input type="text" id="user" placeholder='User Name' />
          <input type="password" id="pass" placeholder='Password' /><br />
          <button type='submit' id='login-btn'>Login</button>
          <p id="login-register-btn">
            Already Have an Account? <Link to="/Login">Login</Link>
          </p>
      </form>
        <div className="google-login" id="login-sign-in">
          <h3>Sign in with Google</h3>
        </div>
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
      </div>
    </div>
  );
}}

export default Register;