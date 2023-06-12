import { Routes , Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/js/Navbar';
import { lazy , Suspense} from 'react';

let Home = lazy(()=> import("./pages/home-page/js/Home"));
let About = lazy(()=> import("./pages/about-page/js/About"))
let Cart = lazy(()=> import("./pages/cart-page/js/Cart"));
let Products = lazy(()=> import ("./pages/products-page/js/Products"));
let Details = lazy(()=> import("./pages/product-details-page/js/Details"))
let Contact = lazy(()=> import("./pages/contact-page/js/Contact"))
let Register = lazy(()=> import("./pages/register-page/js/Register"));
let Login = lazy(()=> import("./pages/log-in-page/js/Login"));
let Footer = lazy (()=> import("./components/footer/js/Footer"));


function App() {
  
  return (
    <>
      <Navbar />
      <Suspense fallback={<h2>loading...</h2>}>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='About' element={<About/>}/>
            <Route path='Cart' element={<Cart/>}/>
            <Route path='Products' element={<Products/>}/>
            <Route path='Cart/Products' element={<Products/>}/>
            <Route path='Details' element={<Details/>}/>
            <Route path='Products/Details' element={<Details/>}/>
            <Route path='Contact' element={<Contact/>}/>
            <Route path='Register' element={<Register/>}/>
            <Route path='Login' element={<Login/>}/>
          </Routes>
        </Suspense>
      <Footer/>
    </>
  );
}

export default App;
