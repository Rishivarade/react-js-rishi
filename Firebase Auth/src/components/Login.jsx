
// Auth.js
import React, { useState } from 'react';
import { auth, googleProvider } from '../Firebase/firebase';
import {  signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import GoogleButton from 'react-google-button';
import { Link, useNavigate } from 'react-router-dom';


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate =useNavigate()

  const login = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      const user=userCredential.user;
      localStorage.setItem('token',user.accessToken)
      localStorage.setItem('user',JSON.stringify(user))
      navigate("/product")
    } catch (err) {
      console.error("Error signing up: ", err.message);
    }
  };



  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("User logged in with Google: ", result.user);
      navigate("product")
    } catch (err) {
      console.error("Error logging in with Google: ", err.message);
    }
  };

  return (
    <div style={{textAlign:"center",border:"2px solid",width:"40%",margin:"auto",padding:"10px"}}>
      <h2>Login</h2><br />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      /> <br /><br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      /> <br /><br />
      <button onClick={login}>Login</button> <br /><br />
       <br />

      <h2>Google Authentication</h2><br />
      {/* <button onClick={googleLogin}>Login with Google</button> */}
      <GoogleButton onClick={googleLogin}/><br />
    </div>
  );
};

export default Signup;

