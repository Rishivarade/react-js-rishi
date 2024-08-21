import React from 'react'
import GoogleButton from 'react-google-button'
import { auth, provider } from '../Firebase/Firebase'
import { signInWithPopup } from 'firebase/auth'


const Login = () => {
    const handlelogin=()=>{
        signInWithPopup(auth, provider)
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
    }
  return (
    <div style={{textAlign:"center",border:"2px solid",width:'20%',margin:"auto",padding:"10px",marginTop:"5%"}}>
      <h1>login</h1>
      <div style={{border:"1px solid",margin:"auto"}}>
            <GoogleButton onClick={handlelogin  }/>
        </div>
    </div>  
  )
}

export default Login
