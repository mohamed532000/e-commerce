import "../css/cart.css";
import { Link } from "react-router-dom";
function Cart() {
    return (
        <>
            <div className="cart-section">
                <h2 className="section-title">Your Cart</h2>
                <div className="container">
                    <table className="products-table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="product-img-and-info">
                                        <img src="https://cdn.shopify.com/s/files/1/0065/8767/8835/products/product-4-1_558532ba-3ca6-4037-b3af-805286621ddc_95x95@2x.jpg?v=1532057121" alt=""/>
                                        <div className="product-info">
                                            <h3 className="product-name">The Shoulder Chiffon Blouse</h3>
                                            <p className="product-size">Size: XXL</p>
                                            <p className="product-color">Color: Red</p>
                                            <button className="remove-product-btn">Remove</button>
                                        </div>
                                    </div>
                                </td>
                                <td><h3>65$</h3></td>
                                <td><h3>1</h3></td>
                                <td><h3>65$</h3></td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="compleate-shopping">
                        <div className="add-note-div">
                            <h3>Add a note to your order</h3>
                            <textarea className="note-place"></textarea>
                        </div>
                        <div className="checkout-div">
                            <div className="total-price-div">
                                <h3>Subtotal</h3>
                                <h3>65$</h3>
                            </div>
                            <div className="shopping-and-checkout">
                                <Link to="Products" className="to-shop-btn">CONTINUE SHOPPING</Link>
                                <Link to="Products" className="checkout-btn">CHECK OUT</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Cart;