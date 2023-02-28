import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaCartPlus } from "react-icons/fa";
import './Navbar.css'

const Navbar = () => {
  return (
    <div  className='nav'>
      <h3>Our Shop</h3>
     <div className='links'> 
       <NavLink to = '/'> Shop</NavLink>
       <NavLink to= '/contact' > Contact </NavLink>
       <NavLink to= '/cart'>
        < FaCartPlus /> 
         </NavLink>
     </div>
    </div>
  )
}

export default Navbar
