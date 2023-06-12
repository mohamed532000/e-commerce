import "../css/navbar.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Navbar() {

    useEffect (()=> {
        let navbar = document.querySelector(".navbar");

        window.onscroll = ()=> {
            window.scrollY >= 10 ? navbar.classList.add("on-scrolling") : navbar.classList.remove("on-scrolling")
        };
    });
    return (
        <>
        
            <div className="navbar">
                <div className="container">
                    
                    <div className="logo-and-dropping-list">
                        <h2 className="logo">StyleVista</h2>
                        <i className="fa-solid fa-list-ul dropping-list-btn" onClick={()=>{
                            document.querySelector(".routing-div").classList.toggle("dropped");
                        }}></i>
                    </div>
                    <div className="routing-div">
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="About">About</Link>
                                </li>
                                <li>
                                    <Link to="Products">Products</Link>
                                </li>
                                <li>
                                    <Link to="Cart">Cart</Link>
                                </li>
                                <li>
                                    <Link to="Contact">Contact</Link>
                                </li>
                            </ul>
                    </div>

                    <div className="search-div">
                        <input placeholder="Search about your product"/>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>

                    <div className="login-and-signup-div">
                            <Link to="Register" className="register-btn">Register</Link>
                            <Link to="Login" className="login-btn" >Log in</Link>
                        </div>
                </div>
            </div>
        
        </>
    );
}
export default Navbar;