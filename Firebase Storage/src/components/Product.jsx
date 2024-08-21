import {collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../Firebase/Firebase'
import { Link } from 'react-router-dom'

const Product = () => {
    const [data,setdata]=useState([])

    const getfirebase=()=>{
        getDocs(collection(db,"products"))
        .then((res)=>{
            let newarray=res.docs.map((el)=>(
                {
                    ...el.data(),id:el.id
                }
            ))
            setdata(newarray)
        })
        .catch((err)=>console.log(err))
    }
    const deleteproduct=async(id)=>{

        try {
            const res=await deleteDoc(doc(db,"products",id))
            getfirebase()
            if(res){
                alert("Deleted...")
                console.log(res)
            }
            
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(()=>{
        getfirebase()
    },[])
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Product</h1>
      <div className="div" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",textAlign:"center",gap:"10px"}}>
      {
        data.map((el)=>(
            <div key={el.id} style={{border:"2px solid black",padding:"5px"}}>
                <img src={el.image} alt="" height={200} width={200} />
                <h2>{el.title}</h2>
                <h2>${el.price}</h2>
                <button><Link style={{textDecoration:"none",color:"black"}} to={`/edit/${el.id}`}>EDIT</Link></button>
                <button onClick={()=>deleteproduct(el.id)}>DELETE</button>
            </div>
        ))
      }
      </div>
    </div>
  )
}

export default Product
