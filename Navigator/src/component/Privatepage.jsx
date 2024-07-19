import React from 'react'
// LOgin by auth in Product page
const Privatepage = ({ children }) => {
    const isAuth = localStorage.getItem("token")
    console.log(isAuth)
    if (!isAuth) {
        window.location.href = "/login"
    }
    else{
        return children
    }

}

export default Privatepage
