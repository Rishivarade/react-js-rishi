import React from 'react'

export default function Footer() {
    return (
        <div className="container-fluid text-decoration-none" style={{backgroundColor:"black",color:"white",textAlign:"center"}}>
            <div className="row pt-5" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div className="col-3">
                    <h3>Scaffold</h3>
                    <ul  style={{listStyle:"none"}}>
                        <li>A108 Adam Street NY 535022, USA </li>
                        <li>Phone: +1 5589 55488 55</li>
                        <li>Email: info@example.com</li>
                    </ul>
                </div>
                <div className="col-3">
                    <h3>Useful Links</h3>
                    <ul style={{listStyle:"none"}}>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Services</li>
                        <li>Terms of service</li>
                        <li>Privacy policy </li>
                    </ul>
                </div>
                <div className="col-3">
                    <h3>Our Services</h3>
                    <ul style={{listStyle:"none"}}>
                        <li>Web Design</li>
                        <li>Web Development</li>
                        <li>Product Management</li>
                        <li>Marketing</li>
                        <li>Graphic Design</li>
                    </ul>
                </div>
                <div className="col-3">
                    <input type="text" placeholder='write to search' /><button style={{backgroundColor:"blueviolet",border:"0px",color:"white"}}>SUBSCRIBE</button>
                </div>
            </div>
        </div>
    )
}
