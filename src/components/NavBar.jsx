import React from 'react'
import FourbitLogo from "./../assets/fourbit logo.png"
import { IoHome,IoSettings  } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";
import { FaCartFlatbedSuitcase } from "react-icons/fa6";
import { CgCopyright } from 'react-icons/cg';

import "./NavBar.css"
import { Link, Links } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
        <div className="admin-top">
                <div className="logo">
                <img src={FourbitLogo} className="logo-img" alt="4bitLogo" />
                <h1 className='logo-text'>DashBoard</h1>
            </div>
            <div className="profile">
                <span className='profile-avatar'>Profile</span>
                <h3>Admin Name</h3>
            </div>
        </div>
      <nav>
        <li><Link to='/'><IoHome />Home</Link></li>
        <li><Link to='/projects'><GrProjects />Projects</Link></li>
        <li><Link to='/users'><FaUserCircle />Users</Link></li>
        <li><Link to='/orders'><FaCartFlatbedSuitcase />Order</Link></li>
        <li><Link to='/settings'><IoSettings />Account Setting</Link></li>
      </nav>
      <div className="footer">
        <p><CgCopyright/>FourBit</p>
      </div>
    </div>
  )
}

export default NavBar
