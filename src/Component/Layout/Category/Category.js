import { NavLink } from "react-router-dom";
import Product_1 from "../Photo/product_1.png";
import Product_2 from "../Photo/product_2.png";
import Product_3 from "../Photo/product_3.png";
import Product_4 from "../Photo/product_4.png";
import Product_5 from "../Photo/product_5.png";
// Đây là component để hiển thị các category
//---------------------------------------------------------------------------------------------------------------------------

function Category() {
  return (
    <>
      <div className="section bg-light pt-5">
        <div className="container text-center">
          <p className="fs-4 fw-normal fst-italic">
            CAREFULLY CREATED CELLECTIONS
          </p>
          <p className="fs-3 fw-bold fst-italic">BROWSE OUR CATEGORIES</p>
        </div>
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <div className="container-fluid">
              <div className="row catogery g-2">
                <NavLink to="/shop" className="col-6">
                  <img src={Product_1} className="w-100" />
                </NavLink>
                <NavLink to="/shop" className="col-6">
                  <img src={Product_2} className="w-100" />
                </NavLink>
              </div>
              <div className="row catogery g-1   mt-4">
                <NavLink to="/shop" className="col-4">
                  <img className="w-100" src={Product_3} />
                </NavLink>
                <NavLink to="/shop" className="col-4">
                  <img className="w-100" src={Product_4} />
                </NavLink>
                <NavLink to="/shop" className="col-4">
                  <img className="w-100" src={Product_5} />
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </>
  );
}

export default Category;
