import React from 'react'
import "./ProjectsPage.css"
import NavBar from "../components/NavBar"
import Header from "../components/Header"

const ProjectsPage = () => {
  return (
    <div className='projects-page-container'>
      <NavBar />
      <div className='projects-page-body'>
        <Header/>
      </div>
    </div>
  )
}

export default ProjectsPage
