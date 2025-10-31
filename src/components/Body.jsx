import React from 'react'
import "./Body.css"
import { GrProjects } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";
import { FaCartFlatbedSuitcase } from "react-icons/fa6";

const Body = () => {
  return (
    <div className='body-container'>
      <div className="box projects-box">
        <h3>Projects <span><GrProjects /><p>2</p></span></h3>
      </div>
      <div className="box users-box">
        <h3>Users <span><FaUserCircle /><p>2</p></span></h3>
      </div>
      <div className="box orders-box">
        <h3>Orders <span><FaCartFlatbedSuitcase /><p>2</p></span></h3>
      </div>
    </div>
  )
}

export default Body
