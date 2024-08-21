import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../Firebase/Firebase';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const handlelogout = () => {
        signOut(auth)
            .then(() => {
                alert("logout..")
                console.log(res)
            })
            .catch((err) => { console.log(err) });
    }
  return (
    <div style={{display:"flex",justifyContent:"space-around",backgroundColor:"black",padding:"10px"}}>
        <Link style={{textDecoration:"none",color:"white"}} to={"/"}>Home</Link>
      <Link style={{textDecoration:"none",color:"white"}} to={"/product"} >Product</Link>
      <Link style={{textDecoration:"none",color:"white"}} to={"/login"} >Login</Link>
      <Link style={{textDecoration:"none",color:"white"}} to={"/addproduct"}>Add Product</Link>
      <button onClick={handlelogout}>LOG OUT</button>
    </div>
  )
}

export default Navbar
