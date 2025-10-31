import React from 'react'
import "./HomePage.css"
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import Body from '../components/Body'

const HomePage = () => {
  return (
    <div className='home-container'>
      <NavBar />
      <div className='body-section'>
        <Header />
        <Body />
      </div>
    </div>
  )
}

export default HomePage
