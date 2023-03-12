import logo from "./logo.svg";
import "./App.css";
import { Fragment, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Component/Home/HomePage";
import CartPage from "./Component/Cart/CartPage";
import LoginPage from "./Component/LoginPage/LoginPage";
import CheckOutPage from "./Component/CheckoutPage/CheckoutPage";
import RegisterPage from "./Component/RegisterPage/RegisterPage";
import ShopPage from "./Component/Shop/ShopPage";
import DetailPage from "./Component/DetailPage/DetailPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { ADD_CART, GET_PRODUCT } from "./store/context";
import { GET_ALL_CART } from "./store/context";
import { getTTFB } from "web-vitals";
import { ON_LOGOUT, UPDATE_DATA_ALL_CART } from "./store/context";
import { Steam } from "react-bootstrap-icons";

function App() {
  const dispatch = useDispatch();
  // Lays dữ liệu từ API rồi lưu vào redux
  useEffect(() => {
    fetch(
      "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
    )
      .then((res) => res.json())
      .then((data) => dispatch({ type: GET_PRODUCT, product: data }));
  }, []);
  // Lấy các trường dữ liệu từ redux và local
  const cart_manager = useSelector((state) => state.cart_manager);
  const userLogin = JSON.parse(localStorage.getItem("isLogin")) || false;
  const cart_manager_all_user = useSelector(
    (state) => state.cart_manager_all_user
  );
  // Xử lí lúc cart manager của người dùng thay đổi thì cập nhật lại cart của tất cả người dùng
  useEffect(() => {
    if (
      !!userLogin &&
      cart_manager &&
      Array.isArray(cart_manager) &&
      cart_manager.length !== 0
    ) {
      let user_manager = {
        email: userLogin[0].email,
        cart: cart_manager,
      };
      if (
        cart_manager_all_user &&
        Array.isArray(cart_manager_all_user) &&
        cart_manager_all_user.length !== 0
      ) {
        const locationUserLogin = cart_manager_all_user.findIndex((res) => {
          return res.email === userLogin[0].email;
        });
        if (locationUserLogin !== -1) {
          const updateAllCart = [...cart_manager_all_user];
          updateAllCart[locationUserLogin] = user_manager;
          dispatch({
            type: UPDATE_DATA_ALL_CART,
            cart_manager_all_user: updateAllCart,
          });
        } else {
          const updateAllCart = [...cart_manager_all_user, user_manager];
          dispatch({
            type: UPDATE_DATA_ALL_CART,
            cart_manager_all_user: updateAllCart,
          });
        }
      } else {
        const updateAllCart = [user_manager];
        dispatch({
          type: UPDATE_DATA_ALL_CART,
          cart_manager_all_user: updateAllCart,
        });
      }
    }
  }, [cart_manager]);

  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/login/*" element={<LoginPage></LoginPage>}></Route>
      <Route path="/shop" element={<ShopPage></ShopPage>}></Route>
      <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
      <Route path="/checkout" element={<CheckOutPage></CheckOutPage>}></Route>
      <Route path="/detail/:id" element={<DetailPage />}></Route>
      <Route path="/cart" element={<CartPage></CartPage>}></Route>
    </Routes>
  );
}

export default App;
