import React from 'react'
import { FaWhatsapp } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Prenav2 = () => {
  return (
    <div>
      <div className="logo"> <img src='https://stylo.pk/cdn/shop/files/110x60-Logo_45_140x.png?v=1705411679' /></div>
      
      <div className='whatsapp'>
      <FaWhatsapp />
      <div className='youtube'>
        <FaYoutube />
      </div>
        </div>
        <Link to ="/signup"><button className='btn btn-primary'> Signup</button></Link>
        <Link to ="/login"><button className='btn btn-primary'> Login</button></Link>
      </div>
      
      )
}

      export default Prenav2
