import React from 'react'
import './Header.css'
import { useState, useEffect } from 'react'

const Header = () => {
    const [time,setTime] = useState(new Date())

    useEffect(()=>{
        const timer = setInterval(() => {
            setTime(new Date())
        }, 1000);
        return ()=> clearInterval(timer)
    },[])


  return (
    <div className='header-container'>
      <h1>Hello Admin!! Welcome Back</h1>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  )
}

export default Header
