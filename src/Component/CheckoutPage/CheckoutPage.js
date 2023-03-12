import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import NavBar from "../Layout/NavBar";

function CheckOutPage() {
  const cart_manager = useSelector((state) => state.cart_manager);
  // Láy dữ liệu cart manager từ redux

  const [totalPrice, setTotalPrice] = useState(0);
  // Tính tổng giá trị của tất cả đơn hàng 
  //---------------------------------------------------------------------------------------------------------------------------

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
  }, []);
  return (
    <>
      <NavBar></NavBar>
      <div className="container-fluid d-flex justify-content-between mt-5 p-5 w-75">
        <h2 className="mt-5  fs-1 fst-italic ">CHECKOUT</h2>
        <p className="mt-5">
          HOME / CART / <span className="text-secondary">CHECKOUT</span>
        </p>
      </div>
      <div className="container-fluid f-flex  justify-content-between mt-5">
        <h2>BILLING DETAILS</h2>
        <div className="container-fluid row">
          <div className="col-8">
            <p className="  fs-3">FULL NAME:</p>
            <input
              placeholder="Enter Your Full Name Here!"
              className=" w-75 py-3 px-4"
            />
            <p className="  fs-3">EMAIL:</p>
            <input
              placeholder="Enter Your Email Here!"
              className=" w-75 py-3 px-4"
            />
            <p className="  fs-3">NUMBER:</p>
            <input
              placeholder="Enter Your Number Here!"
              className=" w-75 py-3 px-4"
            />
            <p className="  fs-3">ADDRESS:</p>
            <input
              placeholder="Enter Your Adress Here!"
              className=" w-75 py-3 px-4"
            />
            <button className="p-3 mt-4 d-block text-light bg-dark w-25 fst-italic">
              Place Order
            </button>
          </div>
          <div className="col-4 bg-light">
            <h3 className="p-4 fw-bold">YOUR ORDER</h3>
            {cart_manager &&
              Array.isArray(cart_manager) &&
              cart_manager.length !== 0 &&
              cart_manager.map((res) => {
                return (
                  <div className="px-5">
                    <span className="fw-bolder fs-4">{res.name}</span>
                    <span className="px-3 fs-5   fw-light">
                      {res.price} VND x {res.quantity}
                    </span>
                    <hr width="100%" align="center" />
                  </div>
                );
              })}
            <p className="fw-bolder">
              TOTAL: <span className="px-4 fw-normal">{totalPrice}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckOutPage;
