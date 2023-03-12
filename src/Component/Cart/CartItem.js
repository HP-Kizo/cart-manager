import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./CartItem.module.css";
import { DELETE_CART } from "../../store/context";
import { ADD_CART } from "../../store/context";
//---------------------------------------------------------------------------------------------------------------------------
//  cart được truyền về từ CartPage thông qua props
const CartItem = ({ cart }) => {
  //---------------------------------------------------------------------------------------------------------------------------
  const dispatch = useDispatch();
  //---------------------------------------------------------------------------------------------------------------------------
  // Lấy các trường dữ liệu từ redux
  const listProduct = useSelector((state) => state.listProduct);
  const cart_manager = useSelector((state) => state.cart_manager);
  const separateNumber = useSelector((state) => state.separateNumber);
  const [infoProduct, setInfoProduct] = useState([]);

  //---------------------------------------------------------------------------------------------------------------------------
  const [cartUser, setCartUser] = useState([]);
  //---------------------------------------------------------------------------------------------------------------------------
  // Thông qua dữ liệu từ props để lấy thông tin đầy đủ của sản phầm được chọn
  useEffect(() => {
    if (listProduct && Array.isArray(listProduct) && listProduct.length !== 0) {
      const product = listProduct.find((res) => {
        return cart.productId === res._id.$oid;
      }, []);
      setInfoProduct([product]);
    }
  }, []);
  //---------------------------------------------------------------------------------------------------------------------------
  //Tạo 1 state lưu trữ tổng giá trị của sản phầm * số lượng
  const [totalPriceOneProduct, setTotalPriceOneProduct] = useState(0);
  //---------------------------------------------------------------------------------------------------------------------------
  //Mỗi khi cart_manager thay đổi thì kiểm tra lại số lượng rồi tính tổng lại
  useEffect(() => {
    infoProduct &&
      Array.isArray(infoProduct) &&
      infoProduct.length !== 0 &&
      setTotalPriceOneProduct(parseInt(infoProduct[0].price) * cart.quantity);
  }, [infoProduct, cart_manager]);
  //  -----------------------------------------------------------------------------------------------------------------------

  //Mỗi khi cart_user được cập nhật lại thì gửi 1 dispatch lên redux để cập nhật lại cart
  useEffect(() => {
    cartUser &&
      Array.isArray(cartUser) &&
      cartUser.length !== 0 &&
      dispatch({ type: ADD_CART, cart: cartUser });
  }, [cartUser]);
  function handlerClick(number) {
    if (
      cart_manager &&
      Array.isArray(cart_manager) &&
      cart_manager.length !== 0
    ) {
      const a = cart_manager.findIndex((res) => {
        return res.productId === cart.productId;
      });
      if (a !== -1) {
        const updateCart = [...cart_manager];

        updateCart[a].quantity += number;
        setCartUser(updateCart);
      }
    }
  }

  //  -----------------------------------------------------------------------------------------------------------------------
  function handlerDeleteCart() {
    const new_cart = cart_manager.filter((res) => {
      return res.productId !== cart.productId;
    });
    dispatch({ type: DELETE_CART, cart: new_cart });
  }
  return (
    infoProduct &&
    Array.isArray(infoProduct) &&
    infoProduct.length !== 0 && (
      <div className="container">
        <div className="row">
          <div className="col-2 ">
            <img className="img-thumbnail " src={`${infoProduct[0].img1}`} />
          </div>
          <div className="col-2 ">
            <p className="$font-weight-light">{infoProduct[0].name}</p>
          </div>
          <div className="col-2 ">
            <p className="">{separateNumber(infoProduct[0].price)}</p>
          </div>
          <div className="col-2 quantity   ">
            {cart.quantity >= 2 && (
              <button
                className="border-0 d-inline bg-transparent down_quantity"
                onClick={() => {
                  handlerClick(-1);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-left-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                </svg>
              </button>
            )}
            <p className="d-inline bg-transparent quantityItem">
              {cart.quantity}
            </p>
            <button
              className="border-0 d-inline bg-transparent up_quantity"
              onClick={() => {
                handlerClick(1);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-caret-right-fill"
                viewBox="0 0 16 16"
              >
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
            </button>
          </div>
          <div className="col-2 ">
            <p className="">{separateNumber(String(totalPriceOneProduct))}</p>
          </div>
          <div className="col-2 ">
            <button className="border-0" onClick={handlerDeleteCart}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash3"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default CartItem;
