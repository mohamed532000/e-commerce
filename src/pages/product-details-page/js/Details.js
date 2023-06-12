import "../css/details.css";
import { useEffect } from "react";
import Data from "../../../components/data/data";
import { createContext } from "react";

export let dataContext = createContext();

function Details() {
    useEffect(()=>{
        let mainImg = document.querySelector(".main-img-div img")
        let allImageSrc = document.querySelectorAll(".images-div img"); 
        allImageSrc.forEach(img => {
            img.onclick = ()=>{
                console.log(img.src)
                mainImg.src = img.src
            }
        })

    },[])


    return (
        <>
            <dataContext.Provider value={"data of context"}>
                <Data/>
            </dataContext.Provider>

            <div className="details-section">
                <h1>Quick View On Your Porduct.!</h1>
                <div className="container">
                    <div className="product-images">
                        <div className="main-img-div">
                            <img className="main-img" src="https://images.pexels.com/photos/5650020/pexels-photo-5650020.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                        </div>
                        <div className="images-div">
                        <img src="https://images.pexels.com/photos/5650020/pexels-photo-5650020.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                        <img src="https://images.pexels.com/photos/5650020/pexels-photo-5650020.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                        <img src="https://images.pexels.com/photos/5650020/pexels-photo-5650020.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                        <img src="https://i.ytimg.com/vi/gW-q6G9KYTg/maxresdefault.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="product-info">
                        <h2 className="product-name">product name</h2>
                        <div className="product-raiting">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <div className="quantity-and-addition">
                            <h3 className="quantity">1</h3>
                            <button className="add-to-cart-btn" onClick={()=>{

                            }}>
                                <p>Add to Cart</p>
                                <i className="fa-solid fa-cart-shopping"></i>
                            </button>
                        </div>
                        <div className="product-text">
                            <h2 className="text-title">info about product.</h2>
                            <p>Yeah i know its too late. But not
                            Today we will learn how to create a website header using html css step by step
                            This is so simple.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Details;