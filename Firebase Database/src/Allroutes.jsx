import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'

import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Privatepage from './components/Privatepage'

const Allroutes = () => {
  return (
   <Routes>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/product' element={
      <Privatepage>
          <Dashboard/>
      </Privatepage>
    
      }></Route>
    <Route path='/login' element={<Login/>}></Route>
   </Routes>
  )
}

export default Allroutes
