import React from 'react'
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  return ( 
    <div className=" footer">
      <div className="copyright" >
        <p>	<FaCopyright /> The E comm. All rights reserved. Designed by  Shahin Qureshi</p>
        <img src="./images/payment.jpg" alt="image"/>  
      </div>
    </div>
    
  )
}

export default Footer
