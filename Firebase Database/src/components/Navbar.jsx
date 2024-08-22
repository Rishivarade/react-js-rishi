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
    <div style={{ display: "flex", justifyContent: "space-around" }}>
    <Link to={"/home"} >Home</Link>
    <Link to={"/product"}>Product</Link>
    <Link to={"/login"}>Login</Link>
    <button onClick={handlelogout}>LOGOUT</button>
</div>
  )
}

export default Navbar
