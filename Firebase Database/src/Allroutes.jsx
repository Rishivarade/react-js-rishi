import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Product from './components/Product'
import Home from './components/Home'
import Editpage from './components/Editpage'
import Privatepage from './components/Privatepage'
import Addproduct from './components/Addproduct'

const Allroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/addproduct" element={<Addproduct />} />
        <Route path="/product" element={
            <Privatepage>
                <Product />
            </Privatepage>
            } />
        <Route path="/edit/:id" element={<Editpage/>}/>
    </Routes>
  )
}

export default Allroutes
