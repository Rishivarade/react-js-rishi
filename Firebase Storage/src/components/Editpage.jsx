import { doc, getDoc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../Firebase/Firebase';

const Editpage = () => {
    const [formdata, setformdata] = useState({
        title: "",
        description: "",
        price: 0,
        image: "",
        category: ""
    });

    const { id } = useParams();
    const { title, image, category, price } = formdata;

    const handleChange = (e) => {
        setformdata({
            ...formdata, 
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formdata);
        try {
            await updateDoc(doc(db, "products", id), formdata);
            console.log("Document successfully updated");

        } catch (err) {
            console.log(err);
        }
    };

    const getSingleEdit = async (id) => {
        try {
            const docRef = doc(db, "products", id);
            const res = await getDoc(docRef);
            if (res.exists()) {
                console.log(res.data());
                setformdata(res.data());
            } else {
                console.log("No such document!");
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getSingleEdit(id);
    }, [id]);

    return (
        <div>
            <h1 style={{textAlign:'center'}}>Edit Product</h1>
            <form style={{border:"2px solid black",textAlign:"center",margin:"auto",padding:"10px",width:'30%'}} onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="image" 
                    name="image" 
                    value={image} 
                    onChange={handleChange} 
                /><br /><br />
                <input 
                    type="text" 
                    placeholder="title" 
                    name="title" 
                    value={title} 
                    onChange={handleChange} 
                /><br /><br />
                <select 
                    name="category" 
                    value={category} 
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
                    value={price} 
                    onChange={handleChange} 
                /><br /><br />
                <input type="submit" />
            </form>
        </div>
    );
}

export default Editpage;
