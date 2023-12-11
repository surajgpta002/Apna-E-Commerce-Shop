import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/layout/Header/Header.js";
import WebFont from "webfontloader";
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";
import LoginSignUp from "./component/User/LoginSignUp.js";
import { loadUser } from "./actions/userAction.js";
import { useDispatch, useSelector } from "react-redux";
import UserOptions from "./component/layout/Header/UserOptions.js";
import Profile from "./component/User/Profile.js";
import ProtectedRoute from "./component/Route/ProtectedRoute.js";
import UpdateProfile from "./component/User/UpdateProfile.js";
import UpdatePassword from "./component/User/UpdatePassword.js";
import ForgotPassword from "./component/User/ForgotPassword.js";
import ResetPassword from "./component/User/ResetPassword.js";
import Cart from "./component/Cart/Cart.js";
import Shipping from "./component/Cart/Shipping.js";
import ConfirmOrder from "./component/Cart/ConfirmOrder.js";
import axios from "axios";
import Payment from "./component/Cart/Payment.js";
import ElementsLayout from "./component/Route/ElementsLayout.js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess.js";
import MyOrders from "./component/Order/MyOrders.js";
import OrderDetails from "./component/Order/OrderDetails.js";
import Dashboard from "./component/Admin/Dashboard.js";
import ProductList from "./component/Admin/ProductList.js";
import NewProduct from "./component/Admin/NewProduct.js";
import UpdateProduct from "./component/Admin/UpdateProduct.js";
import OrderList from "./component/Admin/OrderList.js";
import ProcessOrder from "./component/Admin/ProcessOrder.js";
import UsersList from "./component/Admin/UsersList.js";
import UpdateUser from "./component/Admin/UpdateUser.js";
import ProductReviews from "./component/Admin/ProductReviews.js";
import About from "./component/layout/About/About.js";
import Contact from "./component/layout/Contact/Contact.js";
import NotFound from "./component/layout/Not Found/NotFound.js";

function App() {
  const dispatch = useDispatch();

  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    dispatch(loadUser());
    getStripeApiKey();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />

      {isAuthenticated && <UserOptions user={user} />}

      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/product/:id" element={<ProductDetails />} />

        <Route exact path="/products" element={<Products />} />

        <Route path="/products/:keyword" element={<Products />} />

        <Route exact path="/search" element={<Search />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />

        <Route element={<ProtectedRoute />}>
          <Route exact path="/account" element={<Profile />} />
          <Route exact path="/me/update" element={<UpdateProfile />} />
          <Route exact path="/password/update" element={<UpdatePassword />} />
          <Route exact path="/login/shipping" element={<Shipping />} />
          <Route exact path="/order/confirm" element={<ConfirmOrder />} />

          {stripeApiKey && (
            <Route
              element={<ElementsLayout stripe={loadStripe(stripeApiKey)} />}
            >
              <Route path="/process/payment" element={<Payment />} />
            </Route>
          )}

          <Route exact path="/success" element={<OrderSuccess />} />
          <Route exact path="/orders" element={<MyOrders />} />
          <Route exact path="/order/:id" element={<OrderDetails />} />
        </Route>

        <Route element={<ProtectedRoute isAdmin={true} />}>
          <Route exact path="/admin/dashboard" element={<Dashboard />} />
          <Route exact path="/admin/products" element={<ProductList />} />
          <Route exact path="/admin/product" element={<NewProduct />} />
          <Route exact path="/admin/product/:id" element={<UpdateProduct />} />
          <Route exact path="/admin/orders" element={<OrderList />} />
          <Route exact path="/admin/order/:id" element={<ProcessOrder />} />
          <Route exact path="/admin/users" element={<UsersList />} />
          <Route exact path="/admin/user/:id" element={<UpdateUser />} />
          <Route exact path="/admin/reviews" element={<ProductReviews />} />
        </Route>

        <Route exact path="/password/forgot" element={<ForgotPassword />} />

        <Route
          exact
          path="/password/reset/:token"
          element={<ResetPassword />}
        />

        <Route exact path="/login" element={<LoginSignUp />} />

        <Route exact path="/cart" element={<Cart />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
