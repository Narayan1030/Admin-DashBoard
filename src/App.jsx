import React from 'react'
import { Route, Routes } from "react-router";
import "./App.css"
import HomePage from './pages/HomePage'
import UsersPage from './pages/UsersPage';
import AccountSettings from './pages/AccountSettings';
import Orders from './pages/Orders';
import ProjectsPage from './pages/ProjectsPage';

const App = () => {
  return (
    
      <Routes>
        <Route path='/' element = {<HomePage/>}/>
        <Route path='/projects' element = {<ProjectsPage/>}/>
        <Route path='/users' element = {<UsersPage/>}/>
        <Route path='/orders' element = {<Orders/>}/>
        <Route path='/settings' element = {<AccountSettings/>} />
      </Routes>
    
  )
}

export default App
