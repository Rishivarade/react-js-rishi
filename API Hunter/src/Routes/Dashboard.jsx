import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../Context/AuthContext";
import ProductsTable from "../Components/ProductsTable";
import Loader from "../Components/Loader";

function Dashboard() {
  const [data, setdata] = useState([])
  const {user,logout}=useContext(Authcontext)
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
  console.log(user)
  return (
    loading ? <Loader /> :
    <div>
      <h3>Dashboard</h3>
      <div>
        <button style={{backgroundColor:"green"}} data-testid="logout-btn" onClick={logout}>Logout</button>
        <p>
          Token:
          <b data-testid="user-token">
            {user? user.token: "No user logged in"}
          </b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
       <ProductsTable data={data}/>
      </div>
    </div>
  );
}

export default Dashboard;
