import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Loader from "../Components/Loader"

function SingleProductPage() {
    const [product, setproduct] = useState({})
    const [loading, setloading] = useState(true)
    const { id } = useParams()
    const getproduct = () => {
        setloading(true)
        fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/${id}`)
            .then(response => response.json())
            .then(data => {
                setproduct(data.data)
                setloading(false)
            })
            .catch((err) => console.log(err))

    }

    useEffect(() => {
        getproduct()
    }, [])

    return (
        loading ? <Loader /> :
            <div data-testid="products-container" key={product.id}>
                <div>
                    <h3 data-testid="product-brand">
                        {product.brand}
                    </h3>
                </div>
                <div >
                    <img data-testid="product-image" src={product.img}  width={200} alt={product.brand} height={200} />
                </div>
                <div data-testid="product-category">
                    {product.category}
                </div>

                <div data-testid="product-details">
                    {product.details}
                </div>
                <div data-testid="product-price">
                    {product.price}
                </div>

            </div>
    )
}
export default SingleProductPage