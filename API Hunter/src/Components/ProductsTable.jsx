
import ProductCard from "./ProductCard"



function ProductsTable(data) {
 
    return (
        <table border="1px">
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
                {data.data.map((item) => {
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