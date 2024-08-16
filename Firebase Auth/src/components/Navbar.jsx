import { signOut } from 'firebase/auth';
import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../Firebase/firebase';

const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-around"}}>
      <Link to={'/'}>Home</Link>
      <Link to={'/product'}>Product</Link>
      <Link to={'/login'}>Login</Link>
    </div>
  )
}

export default Navbar
