import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars,FaSearch } from "react-icons/fa";


 function Interface() {
  return (
    <div>
    <div className='interface-upper-body'>
        <FaBars  className='interface-bar'/> <h1>Vanga Palaguvom</h1> <FaSearch className='interface-search'/>
       

        </div>
        <div className='interface-main-body'>
          <img src="https://th.bing.com/th?id=OIP.IGNf7GuQaCqz_RPq5wCkPgAAAA&w=204&h=306&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="user" />
          <h2>Maari</h2>
          <p>8:00pm</p>
            
    </div>
    </div>

  )
}


export default Interface;
