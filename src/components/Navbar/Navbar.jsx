import React from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='gp3__navbar'>
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="LOGO" />
        </div>
      </div>
    </div>
  )
}

export default Navbar