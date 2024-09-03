import React from 'react'
import { FaWhatsapp } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoPersonCircleOutline } from "react-icons/io5";

const Prenav2 = () => {
  return (
    <div>
      <div className="logo"> <img src='https://stylo.pk/cdn/shop/files/110x60-Logo_45_140x.png?v=1705411679' /></div>

      
      <Link to ="/login" className='login_button' alt = "login button" title ="Login"> <IoPersonCircleOutline /></Link>
      
      
      {/* <div className='whatsapp'>
      <FaWhatsapp />
      <div className='youtube'>
        <FaYoutube /> */}
        </div>
      
    
       
    
      
      )
}

      export default Prenav2
