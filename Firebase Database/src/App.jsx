import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./app.css"
import Allroutes from './Allroutes'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
     <div className="app">
     <Navbar/>
     <Allroutes/>
     </div>
    </>
  )
}

export default App
