import "../css/register.css";
import { Link } from "react-router-dom";
function Register() {

    return (
        <>
            <div className="register-section">
                <img src="https://img.freepik.com/premium-photo/social-media-icons-logos-mobile-phone-screen-background-social-marketing-networking_125322-412.jpg?w=996"  alt="" className="first-img"/>
                <img src="https://img.freepik.com/free-vector/data-network-businessman_24908-57814.jpg?w=360&t=st=1685930657~exp=1685931257~hmac=50bfd41dc4c86ed2c70f3131def053b3ce63d758bd7b797ad7fe88ed162226b0" alt="" className="second-img" />
                <div className="container">
                    <div className="register-form">
                        <div className="title-and-from">
                            <div className="form-title">
                                <h2>Register now</h2>
                                <p>Register for a Journey Like No Other !</p>
                            </div>
                            <Link to="/">I am already member</Link>
                            <form>
                                <div className="input-div name-div">
                                    <i className="fa-solid fa-user"></i>
                                    <input type="text" placeholder="Name"/>
                                </div>
                                <div className="input-div email-div">
                                    <i className="fa-solid fa-envelope"></i>
                                    <input type="email" placeholder="E-mail"/>
                                </div>
                                <div className="input-div pass-div">
                                    <i className="fa-solid fa-lock"></i>
                                    <input type="password" placeholder="Password"/>
                                </div>
                                <div className="input-div r-pass-div">
                                    <i className="fa-solid fa-lock"></i>
                                    <input type="password" placeholder="Password"/>
                                </div>
                                <div className="checkbox-div">
                                    <input type="checkbox" id="agree-terms"/>
                                    <label htmlFor="agree-terms">I agree all statements in <Link to="/">Terms of service</Link></label>
                                </div>
                                <input type="submit" value="Register" className="register-btn"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Register;