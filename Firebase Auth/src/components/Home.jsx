import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../Firebase/firebase'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>hme</h1>
        <button onClick={handlelogout}>Logout</button>
      
    </div>
  )
}

export default Home
