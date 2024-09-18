import { useContext, useEffect, useState } from "react"
import ProductCard from "./ProductCard"
import Loader from "./Loader"


function ProductsTable() {
    const [data, setdata] = useState([])
    // const {user}=useContext(Authcontext)
    const [loading, setloading] = useState(true)
    const getdata = () => {
        setloading(true)
        fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products")
            .then(response => response.json())
            .then(data => {
                setdata(data.data)
                setloading(false)

            })
            .catch((err) => {
                console.log(err)

            })

    }
    useEffect(() => {
        getdata()
    }, [])
    return (
        loading ? <Loader /> : <table border="1px">
            <thead>
                <tr>
                    <th>Sno</th>
                    <th>Brand</th>
                    <th>Category</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {/* map through the data */}
                {data.map((item) => {
                    return (
                        <ProductCard key={item.id}
                            id={item.id}
                            brand={item.brand}
                            category={item.category}
                            price={item.price}
                        />

                        // <tr key={id}>
                        //     <td>{id}</td>
                        //     <td><Link style={{
                        //         textDecoration:"none",
                        //         color:"black"
                        //     }} to={`/products/${id}`}>{brand}</Link></td>
                        //     <td>{category}</td>
                        //     <td>{price}</td>
                        // </tr>
                    )

                })}
            </tbody>
        </table>


    )
}

export default ProductsTable