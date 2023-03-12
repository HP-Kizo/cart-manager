import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import NavBar from "../Layout/NavBar";
import CartItem from "./CartItem";
import styles from "./CartPage.module.css";
import { Button } from "bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "../Layout/Footer";
import { ADD_CART } from "../../store/context";
function CartPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Lấy thông tin cart từ LocalStorage
  const cart_manager = useSelector((state) => state.cart_manager);
  const separateNumber = useSelector((state) => state.separateNumber);
  const [totalPrice, setTotalPrice] = useState(0);

  //  -----------------------------------------------------------------------------------------------------------------------
  // TÍnh tổng giá trị của tất cả sản phẩm đã được thêm vào giỏ hàng
  useEffect(() => {
    if (
      cart_manager &&
      Array.isArray(cart_manager) &&
      cart_manager.length !== 0
    ) {
      setTotalPrice(
        cart_manager.reduce((total, currenValue) => {
          return total + currenValue.price * currenValue.quantity;
        }, 0)
      );
    }
  }, [cart_manager]);

  return (
    <Fragment>
      <NavBar></NavBar>
      <div className=" container   bg-light text-center">
        <div className={`${styles.header} d-flex`}>
          <h1 className="col-4 fw-bolder fst-italic">CART</h1>
          <p className="col-4 fw-bolder ">CART</p>
        </div>
        <h3>SHOPPING CART</h3>
        <div className="container row w-100 bg-transparent">
          <div className="col-12 col-lg-8">
            <div className="row">
              <p className="col-2 fw-normal fs-3">IMAGE</p>
              <p className="col-2 fw-normal fs-3">PRODUCT</p>
              <p className="col-2 fw-normal fs-3">PRICE</p>
              <p className="col-2 fw-normal fs-3">QUANTITY</p>
              <p className="col-2 fw-normal fs-3">TOTAL</p>
              <p className="col-2 fw-normal fs-3">REMOVE</p>
            </div>

            <div className="row">
              {cart_manager &&
                Array.isArray(cart_manager) &&
                cart_manager.length !== 0 &&
                cart_manager.map((res) => {
                  return <CartItem cart={res}></CartItem>;
                })}
            </div>
          </div>
          <div className="col-12 col-lg-3   p-5">
            <h2 className="mb-5 text-center">CART TOTAL</h2>
            <p className="fw-bolder p-0">
              Subtotal:
              <span className="fw-normal p-1">
                {separateNumber(String(totalPrice))}
              </span>
            </p>
            <p className="fw-bolder p-0">
              Total:
              <span className="fw-normal  p-1">
                {separateNumber(String(totalPrice))}
              </span>
            </p>
            <input className="p-3 w-75" placeholder="Enter your coupon"></input>
            <button className="w-75 text-light bg-dark p-2">
              Apply Coupon
            </button>
          </div>
        </div>
        <div className="container w-50 d-flex justify-content-between p-5">
          <button
            className="border-0 bg-light fs-4  fst-italic"
            onClick={() => {
              navigate("/shop");
            }}
          >
            Continue shopping
          </button>
          <button
            className="p-3 px-5 fs-4 fst-italic"
            onClick={() => {
              navigate("/checkout");
            }}
          >
            Proceed to checkout
          </button>
        </div>
      </div>
      <Footer></Footer>
    </Fragment>
  );
}
export default CartPage;
