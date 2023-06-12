import "../css/login.css";
import { Link } from "react-router-dom";
import loginImage from "../../../images/figma-free-login-screen-template_1628847954.jpg";

function Login() {
    return (
        <>
            <div className="loging-section">
                <img src={loginImage} alt=""/>
                <div className="container">
                    <div className="login-form-and-title">
                        <div className="login-title">
                            <h2>Welcome back !</h2>
                            <p>Log in now to access exclusive offers.</p>
                        </div>
                        <form>
                            <div className="input-div username-div">
                                <i className="fa-solid fa-user"></i>
                                <input type="text" placeholder="Username or E-mail"/>
                            </div>
                            <div className="input-div pass-div">
                                <i className="fa-solid fa-key"></i>
                                <input type="password" placeholder="Password"/>
                                <Link>Forgot Password.?</Link>
                            </div>
                            <input type="submit" value="Login" className="submit-btn"/>
                            <Link className="loging-with-google">
                                <img src="https://cdn-icons-png.flaticon.com/128/281/281764.png" alt=""/>
                                Or sign-in with google</Link>
                            <p>Not a member yet ? <Link>Register !</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;