import React from "react";
import "./Home.css";
import Metadata from "../layout/MetaData.js";
import { clearErrors, getProduct } from "../../actions/productAction.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Loader from "../layout/Loader/Loader.js";
import { useAlert } from "react-alert";
import ProductCard from "./ProductCard.js";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Metadata title="ECOMMERCE" />

          <div className="banner">
            <h1>Welcome to Apna E Commerce Shop</h1>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
