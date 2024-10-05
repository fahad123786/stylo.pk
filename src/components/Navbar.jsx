import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
  
   
  return (
    <div>
      

      <ul className='navbar'>
        <li style={{color:"red"}}><Link className='link' to ={"/"}> Sale </Link>  </li>
        <li> <Link className='link' to ={"/eid-collection"}>Eid || collection</Link></li>
        <li><Link className='link' to ={"/summer-24"}> Summer24</Link></li>
        <li> <Link className='link' to ={"/women-shoes"}>Women Shoes</Link></li>
        <li><Link  className='link' to ={"/women-apparels"}>Women Apparels</Link></li>
        <li><Link  className='link'to ={"/bags"}>Bags</Link></li>
        <li><Link className='link' to ={"/kids"}>Kids</Link></li>
        <li><Link className='link' to ={"/accesories"}>Accessories</Link></li>
        <li><Link className='link' to ={"/fragnances"}>Fragnances</Link></li>

      </ul>
    </div>
  )
}

export default Navbar
