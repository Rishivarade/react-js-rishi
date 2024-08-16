import axios from 'axios'
import { signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../Firebase/firebase'

const Product = () => {
  const navigate =useNavigate()
  const handlelogout=async()=>{
    await signOut (auth)
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    navigate("/signup")

  }
    const[data,setdata]=useState([])
    const getdata =()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(response => {
            setdata(response.data)
            })
            .catch(error => {
                console.error(error);
                });
    }
    useEffect(()=>{
        getdata()
    },[])
  return (
    <div>
      <h1>Product</h1>
      <button onClick={handlelogout}>Logout</button>
      <div className="div" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"10px"}}>
        {
            data.map((el)=>(
                <div key={el.id} style={{border:"2px solid",textAlign:"center"}}>
                    <h2>{el.title}</h2>
                    <img src={el.image} width={200} height={200} alt="" />
                    <p>{el.description}</p>
                    <p>Price: {el.price}</p>
                </div>    
            ))
        }
      </div>

    </div>
  )
}

export default Product
