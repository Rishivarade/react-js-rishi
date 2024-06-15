import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
export default function Header() {

    return (
        <div className="container-fluid p-0">
            <nav className="nav">
                <div className="div" style={{ fontSize: "30px" }}>
                    LOGO
                </div>
                <ul className="nav-list">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className="icons" style={{ display: "flex", justifyContent: "space-between" }}>
                    <p className="pe-2"><FaFacebookF/></p>
                    <p className="pe-2"> <FaTwitter /></p>
                    <p> <AiFillInstagram /></p>
                </div>
            </nav>

        </div>
    )
}