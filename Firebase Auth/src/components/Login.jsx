
// Auth.js
import React, { useState } from 'react';
import { auth, googleProvider } from '../Firebase/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import GoogleButton from 'react-google-button';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      console.log("User signed up: ", userCredential.user);
      alert('Signup Successful...')
    } catch (err) {
      console.error("Error signing up: ", err.message);
    }
  };

  const login = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in: ", userCredential.user);
      alert('Logged IN... ')
    } catch (err) {
      console.error("Error logging in: ", err.message);
    }
  };

  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("User logged in with Google: ", result.user);
    } catch (err) {
      console.error("Error logging in with Google: ", err.message);
    }
  };

  return (
    <div style={{textAlign:"center",border:"2px solid",width:"40%",margin:"auto",padding:"10px"}}>
      <h2>Email Authentication</h2><br />
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
      <button onClick={signUp}>Sign Up</button> <br /><br />
      <button onClick={login}>Login</button> <br />

      <h2>Google Authentication</h2><br />
      {/* <button onClick={googleLogin}>Login with Google</button> */}
      <GoogleButton onClick={googleLogin}/><br />
    </div>
  );
};

export default Login;

