import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Item from "./Item";
import Popup from "./Popup/Popup";
function Product() {
  //  Nhận list product từ redux
  const listProduct = useSelector((state) => state.listProduct);
  // Quản lý popup có được hiển thị hay ko
  const show_popup = useSelector((state) => state.show_popup);

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-lg-2 col-md-1"></div>
          <div className="col-sm-12 col-md-10 col-lg-8">
            <div className="section text-center">
              <p className="fs-4 fw-normal fst-italic">MADE THE HARD WAY</p>
              <p className="fs-3 fw-bold fst-italic">TOP TRENDING PRODUCTS</p>
            </div>
            <div className="container-fluid  d-flex  flex-wrap g-1">
              {listProduct &&
                listProduct.length !== 0 &&
                listProduct.map((data) => {
                  return <Item data={data}></Item>;
                })}
            </div>
            <div className="container row mt-5 text-center">
              <div className="col-6 col-sm-4 mt-5">
                <h2 className="fs-3 fw-bold fst-italic">FREE SHIPPING</h2>
                <p className="fs-4 fst-italic">Free shipping worlwide</p>
              </div>
              <div className="col-6 col-sm-4 mt-5">
                <h2 className="fs-3 fw-bold fst-italic">24 X 7 SERVICE</h2>
                <p className="fs-4 fst-italic">Free shipping worlwide</p>
              </div>
              <div className="col-12 col-sm-4 mt-5">
                <h2 className="fs-3 fw-bold fst-italic">FESTIVAL OFFER</h2>
                <p className="fs-4 fst-italic">Free shipping worlwide</p>
              </div>
            </div>
            <div className="container-fluid row mt-5 justify-content-center">
              <div className="col-10 col-sm-6 mt-5">
                <h2 className="fs-3 fw-bold fst-italic">LET'S BE FRIENDS!</h2>
                <p className="fs-4 fst-italic">
                  Niri nisi tempor consequat labons nisi.
                </p>
              </div>
              <div className="col-10 col-sm-6 mt-5 ">
                <label className="row h-75">
                  <input
                    className="col-8 product_input"
                    placeholder="Enter your email address"
                  ></input>
                  <button className="col-4 bg-dark text-light product_input">
                    Subcribe
                  </button>
                </label>
              </div>
            </div>
            {show_popup && <Popup></Popup>}
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </>
  );
}

export default Product;
