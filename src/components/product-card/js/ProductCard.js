import "../css/product-card.css";
import { Link } from "react-router-dom";
function Product(props) {
    return (
        <>
        
            <div className="product-card">
                <div className="product-img-and-icons">
                    <img className="first-img" src="https://images.pexels.com/photos/5632388/pexels-photo-5632388.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <img className="second-img" src="https://images.pexels.com/photos/5650020/pexels-photo-5650020.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />

                    <div className="icons-div">
                        <div className="icon view-icon" >
                            <span>Quick view</span>
                            <Link to="Details"><i class="fa-regular fa-eye"></i></Link>
                        </div>
                        <div className="icon cart-icon">
                            <span>Add to cart</span>
                            <i class="fa-solid fa-cart-shopping"></i>
                        </div>
                        <div className="icon wishlist-icon">
                            <span>Add to wishlist</span>
                            <i class="fa-regular fa-heart"></i>
                        </div>
                    </div>
                </div>
                <div className="product-info">
                    <h2 className="product-name">Tweed Blazer</h2>
                    <h3 className="product-price">60.00$</h3>
                </div>
            </div>
        
        </>
    )
}

export default Product;