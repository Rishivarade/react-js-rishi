import AllRoutes from './components/AllRoutes'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  

  return (
    <>
     
     <div className="div" style={{backgroundImage:"radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 10%, rgba(160,206,215,1) 71%)"}}>
     <Navbar/>
     <AllRoutes/>

     </div>
    </>
  )
}

export default App
