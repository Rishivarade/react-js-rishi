import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-evenly",margin:"auto",backgroundColor:"black",color:"white",padding:"10px"}}>
            <NavLink to={"/home"}>HOME</NavLink>
            <NavLink to={"/about"}>ABOUT</NavLink>
            <NavLink to={"/product"}>PRODUCT</NavLink>
            <NavLink to={"/login"}>LOGIN</NavLink>
            
        </div>
  )
}

export default Navbar
