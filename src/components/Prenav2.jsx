import React from 'react'

import { Link } from 'react-router-dom';
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoHomeSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";


const Prenav2 = () => {
  return (
    <div>
      <div className="logo"> <img src='https://stylo.pk/cdn/shop/files/110x60-Logo_45_140x.png?v=1705411679' /></div>
    

        <div className="icons">

          <Link to="/"><IoHomeSharp /></Link>
          <Link to="#"><FaShoppingCart /></Link>

          <Link to="/login" > <IoPersonCircleOutline /></Link>

        </div>

      </div>


     
    // </div>





  )
}

export default Prenav2
