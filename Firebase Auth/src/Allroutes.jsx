import React from 'react'
import Home from './components/Home'
import Product from './components/Product'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'

const Allroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path='/login' element={<Login/>}></Route>
    </Routes>
  )
}

export default Allroutes
