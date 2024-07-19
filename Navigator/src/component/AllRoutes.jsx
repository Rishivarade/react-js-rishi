import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Login from './Login'
import Product from './Product'
import Privatepage from './Privatepage'
const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/about' element={<About />}>
      </Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/product' element={
        <Privatepage>
          <Product/>
        </Privatepage>
      }
      ></Route>
    </Routes>
  )
}

export default AllRoutes;
