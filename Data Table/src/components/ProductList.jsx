import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom'

// Get Function
const About = () => {
  const [product, setProduct] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectCategory,setselectCategory] =useState(null)
  const [order,setorder]=useState(null)
  const [totalpage,settotalpage]=useState()
  const ProductFromServer = () => {
    axios.get(`http://localhost:3000/products?`,{
      params:{
        _page:page,
        _limit:5,
        category:selectCategory,
        _sort:"price",
        _order:order
      }
    })
      .then((res) => {
        setProduct(res.data);
        setFilteredProduct(res.data);
        settotalpage(res.headers['x-total-count']/5)
      })
      .catch((err) => console.log(err));
  };
  // Delete Data Function
  const deletePro = (id) => {
    axios.delete(`http://localhost:3000/products/${id}`)
      .then((res) => {
        alert("Deleted...");
        ProductFromServer();
      })
      .catch((err) => console.log(err));
  };

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    alert("Log Out..");
    window.location.href = "/login";
  };

  // Search Functionality
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    if (query) {
      setFilteredProduct(product.filter(p => p.title.toLowerCase().includes(query)));
    } else {
      setFilteredProduct(product);
    }
  };

  useEffect(() => {
    ProductFromServer();
  }, [page,selectCategory,order]);

  return (
    <Container>
      <div>
      <h1 style={{ textAlign: "center" }}>PRODUCT</h1>
      <Row>
      <div className="div" style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={handleLogout}>LOG OUT</button>
        <select name="" id="" onChange={(e)=>setselectCategory(e.target.value)}>
          <option value="">SELECT CATEGORY</option>
          <option value="men's clothing">MENS CLOTHING</option>
          <option value="women's clothing">WOMENS CLOTHING</option>
          <option value="electronics">ELECTRONICS</option>
          <option value="jewelery">JWELLERY</option>
        </select>
        <div className="div">
          <button onClick={()=>setorder("asc")}>LOW-TO-HIGH</button>
          <button onClick={()=>setorder("desc")}>HIGH-TO-LOW</button>
        </div>
      </div>
      </Row>
      <hr />
      <Row>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "15px" }}>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearch}
          style={{ padding: "8px", width: "300px" }}
        />
      </div>
      </Row>
      <Row>
      <div className='running'>
        {filteredProduct.map((el) => (
          <div key={el.id} style={{ boxShadow: " rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",padding:"10px" }}>
            <Link style={{ textDecoration: "none", color: "black" }} to={`/descriptionpage/${el.id}`}>
              <img src={el.image} alt="" style={{border:"2px solid white",borderRadius:"10px"}} height={200} width={200} />
              <h3>{el.title}</h3>
              <h3>{el.price}</h3>
              <p>{el.description}</p>
            </Link>
            <button><Link style={{ textDecoration: "none", color: "black" }} to={`/editproduct/${el.id}`}>Edit</Link></button>
            <button onClick={() => deletePro(el.id)}>Delete</button>
          </div>
        ))}
      </div>
      </Row>
      {/* Pagination */}
      <Row>
      <div className="div" style={{ display: "flex", justifyContent: "center", marginTop: "15px" }}>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>PREV</button>
        <span>{page}</span>
        <button onClick={() => setPage(page + 1)} disabled={page==totalpage}>NEXT</button>
      </div>
      </Row>
    </div>
    </Container>
    
  );
};

export default About;
