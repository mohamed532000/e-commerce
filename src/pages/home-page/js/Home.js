import "../css/home.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Scrollbar, A11y , Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";
import { useState } from "react";

function Home() {
    let endTimeNeed = new Date("7 1 , 2023 23:59:59").getTime();
    let [days , setDays] = useState();
    let [hours , setHours] = useState();
    let [minutes , setMinutes] = useState();
    let [seconds , setSeconds] = useState();

    setInterval(()=>{
        let dateNow = new Date().getTime();
        let deffrence = endTimeNeed - dateNow;
        let dayes = Math.floor((deffrence / (1000 * 60 * 60 * 24)));
        let hours = Math.floor(deffrence % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        let minutes = Math.floor(deffrence % (1000 * 60 * 60 ) / (1000 * 60));
        let seconds = Math.floor(deffrence % (1000 * 60) / (1000));

        setDays(dayes);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
    },1000);

    return (
        <>
            <div className="heading head-of-home">
                <img src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=901&q=80" alt=""/>
                <div className="container head-of-home-contaienr">
                <Swiper className="parent-of-slides"
                modules={[Navigation, Pagination, Scrollbar, A11y , Autoplay]}
                slidesPerView={1}
                autoplay={{
                    delay: 4000, // Autoplay delay in milliseconds
                    disableOnInteraction: false, // Continue autoplay on user interaction
                }}
                loop = {true}
                speed={1000}
                spaceBetween={20}
                >
                    <SwiperSlide className="slide">
                        <div className="slide-content">
                            <div className="slide-text">
                                <h2 className="slide-title">Welcome to our online shop! - Welcome to <span>StyleVista !</span></h2>
                                <p>Welcome to our fashion haven, where style meets opportunity! Step into a world of endless possibilities, where trends are your playground and fashion is your canvas. We're thrilled to have you here as a valued customer, ready to embark on a sartorial journey unlike any other.</p>
                                <Link to="Products">Shop Now</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide">
                        <div className="slide-content">
                            <div className="slide-text">
                                <h2 className="slide-title">Step into a world of endless possibilities at our online shop!</h2>
                                <p>Get ready to embark on an electrifying shopping adventure at our online store! Discover a world of excitement, where every click brings you closer to incredible products, jaw-dropping deals, and unforgettable experiences. Join us now and let the thrill of online shopping take you to new heights!</p>
                                <Link to="Products">Shop Now</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide">
                        <div className="slide-content">
                            <div className="slide-text">
                                <h2 className="slide-title">Empower your style. Shop now !</h2>
                                <p>Unleash your inner fashionista. Explore endless possibilities.</p>
                                <Link to="Products">Shop Now</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                </div>
            </div>
            <div className="sale-section">
                <div className="container">
                    <img src="https://images.unsplash.com/photo-1603792907191-89e55f70099a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                    
                    <div className="sale-text">
                        <div className="sale-text-content">
                            <p>DISCOUNT</p>
                            <h3>Summer 2023</h3>
                            <p>SALE <span>50%</span></p>
                        </div>
                        <div className="sale-counter-div">
                            <h3 className="day-count">{days} <span>Dey</span></h3>
                            <h3 className="hour-count">{hours} <span>Hour</span></h3>
                            <h3 className="minutes-count">{minutes} <span>Min</span></h3>
                            <h3 className="seconds-count">{seconds} <span>Sec</span></h3>
                        </div>
                        <Link to="Products" className="discount-btn">Shop Now</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;


