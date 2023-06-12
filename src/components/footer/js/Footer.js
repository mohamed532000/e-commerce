import  "../css/footer.css";

function Footer() {
    return (
        <>
        
            <div className="footer">
                <div className="footer-slides">
                    <div className="slide-div">
                        <img src="https://images.pexels.com/photos/1721937/pexels-photo-1721937.jpeg?auto=compress&cs=tinysrgb&w=600"  alt=""/>
                        <div className="go-instagram">
                            <i className="fa-brands fa-instagram"></i>
                            <a href="https://www.instagram.com">@ StyleVista</a>
                        </div>
                    </div>
                    <div className="slide-div">
                        <img src="https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=600"  alt=""/>
                        <div className="go-instagram">
                            <i className="fa-brands fa-instagram"></i>
                            <a href="https://www.instagram.com">@ StyleVista</a>
                        </div>
                    </div>
                    <div className="slide-div">
                        <img src="https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=600"  alt=""/>
                        <div className="go-instagram">
                            <i className="fa-brands fa-instagram"></i>
                            <a href="https://www.instagram.com">@ StyleVista</a>
                        </div>
                    </div>
                    <div className="slide-div">
                        <img src="https://images.pexels.com/photos/8387812/pexels-photo-8387812.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"  alt=""/>
                        <div className="go-instagram">
                            <i className="fa-brands fa-instagram"></i>
                            <a href="https://www.instagram.com">@ StyleVista</a>
                        </div>
                    </div>
                    <div className="slide-div">
                        <img src="https://images.pexels.com/photos/4938450/pexels-photo-4938450.jpeg?auto=compress&cs=tinysrgb&w=600"  alt=""/>
                        <div className="go-instagram">
                            <i className="fa-brands fa-instagram"></i>
                            <a href="https://www.instagram.com">@ StyleVista</a>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="box pay-box">
                        <img src="https://tse2.mm.bing.net/th?id=OIP.7DWXljTMZ9WRrQA-nIJd_gHaHa&pid=Api&P=0&h=180" alt=""/>
                        <p>Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit, sed do eiusmod tempor incididunt cilisis.</p>
                        <div className="pay-div">
                            <a href="#." >
                                <img src="https://preview.colorlib.com/theme/ashion/img/payment/payment-1.png" alt=""/>
                            </a>
                            <a href="#." >
                                <img src="https://preview.colorlib.com/theme/ashion/img/payment/payment-2.png" alt=""/>
                            </a>
                            <a href="#." >
                                <img src="https://preview.colorlib.com/theme/ashion/img/payment/payment-3.png" alt=""/>
                            </a>
                            <a href="#." >
                                <img src="https://preview.colorlib.com/theme/ashion/img/payment/payment-4.png" alt=""/>
                            </a>
                            <a href="#." >
                                <img src="https://preview.colorlib.com/theme/ashion/img/payment/payment-5.png" alt=""/>
                            </a>
                        </div>
                    </div>

                    <div className="box quick-links-box">
                        <h2 className="box-title">QUICK LINKS</h2>
                        <a href="">About</a>
                        <a href="">Blogs</a>
                        <a href="">Contact</a>
                        <a href="">FAQ</a>
                    </div>

                    <div className="box accounts-box">
                        <h2 className="box-title">ACCOUNT</h2>
                        <a href="">My Account</a>
                        <a href="">Orders Tracking</a>
                        <a href="">Checkout</a>
                        <a href="">Wishlist</a>
                    </div>

                    <div className="box newsltter-box">
                        <h2 className="box-title">NEWSLETTER</h2>

                        <form className="subscribe-form">
                            <div className="input-div">
                                <input placeholder="Email"/>
                                <button type="submit" className="subscribe-btn">SUBSCRIBE</button>
                            </div>
                        </form>
                        <div className="sochial-div">
                            <a href="https://www.facebook.com">
                            <i className="fa-brands fa-facebook-f"></i>
                            </a>
                            <a href="https://www.twitter.com">
                            <i className="fa-brands fa-twitter"></i>
                            </a>
                            <a href="https://www.youtube.com">
                            <i className="fa-brands fa-youtube"></i>
                            </a>
                            <a href="https://www.instagram.com">
                            <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a href="https://www.pinterest.com">
                            <i className="fa-brands fa-pinterest"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default Footer