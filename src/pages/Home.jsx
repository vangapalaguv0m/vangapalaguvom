import React, { useState, useEffect } from 'react';
import "../index.css";
import logo from "./Images/Logo.png";

function Home() {
  const [showHome, setShowHome] = useState(false);
  const [showLogo, setShowLogo] = useState(true); // New state to control the logo visibility

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false); // Hide the logo after 5 seconds
      setTimeout(() => {
        setShowHome(true); // Show the home content after the logo disappears
      }, 500); // 1000 milliseconds = 1 second (duration of the logo fade-out animation)
    }, 3000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showLogo && (
        <div className='opening-logo'>
          <img src={logo} alt='Logo' />
        </div>
      )}
      {showHome && (
        <div className='home-full-body fade-in'>
          <div className='home-main-body'>
            <h1>Vango Palaguvom</h1>
            <p>Sign Up to See Your Chats and Calls <span> From Your Friends</span></p>
           <a href='login.jsx'> <button id="home-login">Login</button><br /></a>
            <button id="home-signup">Signup</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
