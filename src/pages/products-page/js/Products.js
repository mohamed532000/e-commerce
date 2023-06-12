import "../css/products.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper , SwiperSlide } from "swiper/react";
import { Pagination , Navigation , Autoplay , A11y } from "swiper";
import Product from "../../../components/product-card/js/ProductCard";

function Products() {
    return (
        <>
            <div className="products-section">

                    <Swiper className="parent-of-slides" 
                            modules={[Navigation , Pagination , Autoplay , A11y]}
                            slidesPerView={1}
                            spaceBetween = {0}
                            speed = {2000}
                            loop = {true}
                            autoplay = {{
                                delay : 4000,
                                disableOnInteraction : false,
                            }}
                    >
                        <SwiperSlide className="slide">
                            <div className="slide-content">
                                <img src="https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                                <div className="products-section-text">
                                    <h2 className="">Shop Now</h2>
                                    <p>Welcome to our product page, tailored exclusively for our valued clients like you. Explore our premium selection of hand-picked products that are designed to exceed your expectations. Each item has been carefully chosen to deliver exceptional quality, style, and functionality !</p>
                                    <a href="products" className="to-products-btn">Discover StyleVista</a>
                                </div>
                            </div>
                        </SwiperSlide>
                        
                        <SwiperSlide className="slide">
                            <div className="slide-content">
                                <img src="https://images.pexels.com/photos/4968639/pexels-photo-4968639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                                <div className="products-section-text">
                                    <h2 className="">Securely Pay Anywhere, Anytime.</h2>
                                    <p>Experience the convenience of modern shopping with our user-friendly website, where the power to pay transcends boundaries. No matter where you are in the world, our secure and seamless payment system enables you to complete transactions effortlessly, bringing the joy of shopping right to your fingertips.!</p>
                                    <a href="products" className="to-products-btn">Discover StyleVista</a>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="slide">
                            <div className="slide-content">
                                <img src="https://images.pexels.com/photos/5632386/pexels-photo-5632386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                                <div className="products-section-text">
                                    <h2 className="">Prepare for the Ultimate Shopping Extravaganza: Black Friday Madness !</h2>
                                    <p>Attention, savvy shoppers! Brace yourself for an irresistible treat this month. Get ready to dive into a whirlwind of incredible discounts and jaw-dropping deals on our website. Our highly anticipated sale is here, offering you a golden opportunity to indulge in guilt-free shopping and score remarkable savings on a wide range of products. !</p>
                                    <a href="products" className="to-products-btn">Discover StyleVista</a>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className="container">
                        <div className="products-title">
                            <h2>Chic Curation</h2>
                            <p>Curated Collections: Discover Your Perfect Piece !</p>
                        </div>
                        <div className="products-div">
                            <div className="filter-products-sidebar">
                                <div className="cet-filter filter-div">
                                    <h2>CATEGORIES</h2>
                                    <ul>
                                        <li>ALl</li>
                                        <li>Men</li>
                                        <li>Kids</li>
                                        <li>Women</li>
                                    </ul>
                                </div>

                                <div className="price-filter filter-div">
                                    <h2>FILTER BY PRICE</h2>
                                    <ul>
                                        <li className="price">20$ - 40$</li>
                                        <li className="price">50$ - 90$</li>
                                    </ul>
                                </div>

                                <div className="size-filter filter-div">
                                    <h2>SHOP BY SIZE</h2>
                                    <ul>
                                        <li className="size">XL</li>
                                        <li className="size">XXL</li>
                                        <li className="size">S</li>
                                        <li className="size">M</li>
                                        <li className="size">L</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="products">
                                <Product />
                            </div>
                        </div>
                    </div>

            </div>
        </>
    )
}
export default Products;