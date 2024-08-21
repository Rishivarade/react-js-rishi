import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { db } from '../Firebase/Firebase'

const Addproduct = () => {
    const [formdata, setformdata] = useState({
        title: "",
        price: 0,
        image: "",
        category: ""
    })

    const handleChange = (e) => {
        setformdata({ ...formdata, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formdata)
        try {
            const res = await addDoc(collection(db, "products"), formdata)
            console.log(res)
            alert("Product Added...")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>ADD Product Here...</h1>
            <form style={{ border: "2px solid black", textAlign: "center", margin: "auto", padding: "10px", width: '30%' }} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="image"
                    name="image"
                    value={formdata.image}
                    onChange={handleChange}
                /><br /><br />
                <input
                    type="text"
                    placeholder="title"
                    name="title"
                    value={formdata.title}
                    onChange={handleChange}
                /><br /><br />
                <select
                    name="category"
                    value={formdata.category}
                    onChange={handleChange}>
                    <option value="">Select Your Category</option>
                    <option value="Mens Clothing">Mens Clothing</option>
                    <option value="Jewellery">Jewellery</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Womens Clothing">Womens Clothing</option>
                </select><br /><br />
                <input
                    type="text"
                    placeholder="price"
                    name="price"
                    value={formdata.price}
                    onChange={handleChange}
                /><br /><br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Addproduct
