import React from 'react'
import {Link} from  'react-router-dom'
import "./Header.css"

const Header = ({cart}) => {
  return (
    <div className='Navbar'>
 <div className='Logo'>Food Cart</div>

 <ul>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='Cart'>
    
    View Cart
    <span className="CartCount">{cart.length}</span>
    </Link></li>
 </ul>

    </div>
  )
}

export default Header