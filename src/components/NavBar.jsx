import React from 'react'
import FourbitLogo from "./../assets/fourbit logo white.png"
import { IoHome,IoSettings  } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";

import "./NavBar.css"
import { CgCopyright } from 'react-icons/cg';

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
        <li><a href="#"><IoHome />Home</a></li>
        <li><a href="#"><GrProjects />Projects</a></li>
        <li><a href="#"><IoSettings />Account Setting</a></li>
      </nav>
      <div className="footer">
        <p><CgCopyright/>FourBit</p>
      </div>
    </div>
  )
}

export default NavBar
