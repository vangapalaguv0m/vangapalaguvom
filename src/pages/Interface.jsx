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
<h1></h1>
    </div>
    </div>

  )
}


export default Interface;
