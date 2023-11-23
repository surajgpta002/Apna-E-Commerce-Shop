import React from 'react'
import { LuMouse } from "react-icons/lu";
import "./Home.css"
import Product from "./Product.js"
import Metadata from '../layout/MetaData.js';

const product = {
    name: "Blue Tshirt",
    images:[{url:"https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/g/r/p/s-tsrt-catalog-03-makemode-original-imagjugggfzyvg8b.jpeg?q=70"}],
    price :"₹3330",
    _id:"Suraj Gupta"
};

const Home = () => {
  return (
   <>

<Metadata title="ECOMMERCE"/>

    <div className="banner">
      {/* <p>Welcome to Ecommerce</p> */}
      <h1>FIND AMAZING PRODUCTS BELOW</h1>

      <a href="#container">
        <button>
          Scroll <LuMouse/>
        </button>
      </a>
    </div>

    <h2 className="homeHeading">Featured Products</h2>

    <div className="container" id='container'>
       <Product product={product}/>
       <Product product={product}/>
       <Product product={product}/>
       <Product product={product}/>
       <Product product={product}/>
       <Product product={product}/>
       <Product product={product}/>
       <Product product={product}/>
    </div>
   </>
    
   

   
  )
}

export default Home