import axios from 'axios'
import React, { useState } from 'react'
//Login Function on regres
const Login = () => {
  const[email,setemail]=useState()
  const[password,setpassword]=useState()
  const handlesubmit=(e)=>{
    e.preventDefault()
    console.log(email,password)
    let userdata={
      email,password
    }
    axios.post("https://reqres.in/api/login",userdata).then((res)=>{
      let tokenfromserver=res.data.token
      localStorage.setItem("token",tokenfromserver)
  
    })
    .catch((err)=>console.log(err))

  }
  return (
    <div style={{margin:"auto",textAlign:"center",backgroundImage:" linear-gradient(to bottom right, #5761B2, #1FC5A8)",paddingBottom:"5%"}}>
        <h1>LOGIN</h1> 
        <form className='log' style={{border:"2px solid black",margin:"auto",padding:"10px"}} action="" onSubmit={(e)=>handlesubmit(e)}>
          <input type="email" onChange={(e)=>setemail(e.target.value)} placeholder='Enter Email...' /><br/><br/>
          <input type="password" onChange={(e)=>setpassword(e.target.value)} placeholder='Enter Password...' /><br/><br/>
          <input type="submit" />
        </form>     
    </div>
  )
}

export default Login
