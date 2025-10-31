import React from 'react'
import './Header.css'
import { useState, useEffect } from 'react'
import { BsClock } from 'react-icons/bs'

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
      <p><BsClock/>{time.toLocaleTimeString()}</p>
    </div>
  )
}

export default Header
