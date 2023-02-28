import React from 'react'
import { FaCheck, FaTruck , FaExchangeAlt, FaPhoneVolume} from "react-icons/fa";



const Feature_Area = () => {
  return (
    <div className="feature_area">
        <div className="features ">
          <span> <FaCheck /></span>
          <h5>Quality Product</h5>
        </div>
        <div className="features ">
          <span><FaTruck /></span>
          <h5>Free Shipping</h5>
        </div>
        <div className="features ">
          <span> <FaExchangeAlt /></span>
          <h5>14 days Return</h5>
        </div>
        <div className="features ">
          <span> <FaPhoneVolume /></span>
          <h5>24|7 Support</h5>
        </div>
      </div>
  )
}

export default Feature_Area
