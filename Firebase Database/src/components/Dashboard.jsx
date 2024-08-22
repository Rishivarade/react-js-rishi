import React, { useEffect, useState } from 'react'

import axios from 'axios'

const Dashboard = () => {
    const [data, setdata] = useState([])
    const getdata = () => {
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            setdata(res.data)
        })
        .catch((err)=>console.log(err))
    }
    useEffect(() => {
        getdata()
    }, [])
    return (
        <div>
            <h1>Products...</h1>
            <div className="div" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"10px"}}>
                {data.map((el)=>(
                    <div key={el.id} style={{border:"2px solid black",textAlign:"center"}} >
                        <img src={el.image} alt="" height={200} width={200} />
                        <p>{el.title}</p>
                        <p>{el.price}</p>
                        <p>{el.description}</p>
                        </div>
                ))
                }
            </div>

        </div>
    )
}

export default Dashboard
