import React from 'react';
import logo from './Images/Logo.png';
import "../index.css";
<script src="main.js" defer type='module'></script>

function Index() {
  return (
    <div className='for-developer-name'>
      <img className="logo" src={logo} alt="Logo" />
      {/* <h1>MSDP</h1> */}
    </div>
  );
}

export default Index;
