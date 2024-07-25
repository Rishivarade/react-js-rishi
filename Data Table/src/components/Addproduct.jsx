import axios from 'axios'
import React, { useState } from 'react'
const initialstate = {
  title: "",
  description: "",
  price: "",
  image: "",
  category: ""
}
const Addproduct = () => {
  const [formdata, setformdata] = useState(initialstate)
  const handlechange = (e) => {
    setformdata({...formdata,[e.target.name]: e.target.value})

  }
  const { title, image, description, category, price } = formdata
  const handlesubmit =(e)=>{
    e.preventDefault()
   //add product function
   axios.post("http://localhost:3000/products",formdata)
   .then((res)=>{
    alert("Product Added...")
    setformdata(initialstate)

   })
   .catch((err)=>console.log(err))

  }
  return (
    <div style={{display:"flex-column",marginTop:"20px",textAlign:"center",paddingBottom:"5%",backgroundImage:"linear-gradient(to bottom right, #0100EC, #FB36F4)"}}>
      <h1 style={{color:"white"}}>ADD PRODUCT</h1>
      <form className='add' style={{border:"2px solid black",textAlign:"center",margin:"auto",padding:"10px",backgroundImage:" linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)"}} action="" onSubmit={(e)=>handlesubmit(e)}>
        <input type="text" placeholder='image' name='image' value={image} onChange={(e) => handlechange(e)} /><br/><br/>
        <input type="text" placeholder='title' name='title' value={title} onChange={(e) => handlechange(e)} /><br/><br/>
        <select name="category" value={category} onChange={(e) => handlechange(e)} id="">
          <option value="">Select Your Category </option>
          <option value="Mens Clothing">Mens Clothing</option>
          <option value="Jwellery">Jwellery</option>
          <option value="Electronics">Electronics</option>
          <option value="Womens Clothing">Womens Clothing</option>
        </select><br/><br/>
        <input type="text" placeholder='price' name='price' value={price} onChange={(e) => handlechange(e)} /><br/><br/>
        <input type="text" placeholder='description' name='description' value={description} onChange={(e) => handlechange(e)} /><br/><br/>
        <input type="submit" />
      </form>
    </div>
  )
}

export default Addproduct
