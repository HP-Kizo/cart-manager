import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HIDE_POPUP } from "../../../../store/context";
import { IconManager } from "../../../Icon/Icon";
function Popup() {
  const data_popup = useSelector((state) => state.data_popup);
  // popup nhận dữ liêu từ redux khi người dùng nhấn xem sản phẩm
  const separateNumber = useSelector((state) => state.separateNumber);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const parts = data_popup.long_desc.split("•");
  console.log(parts);

  return (
    data_popup && (
      <div className="container-fluid fixed-top background h-100 ">
        <div id="popup" className="container-fuild  g-1 bg-light">
          <div className="container-fluid container-lg-75 d-flex w-75">
            <div className="col-6 col-md-6  pt-5 ">
              <img src={data_popup.img1} className=" w-100 px-md-5 mt-lg-5" />
            </div>
            <div className="col-6 col-md-6">
              <div className=" pt-5  text-center fst-italic text_product ">
                <h2 className="name_product ">{data_popup.name}</h2>
                <h4 className="mt-4">{separateNumber(data_popup.price)} VND</h4>
                <div className="fst-italic mt-3  text-secondary d-none text-start d-lg-block short_text_popup overflow-auto">
                  <p className="px-5 fs-4 fw-bold">{parts[0]}</p>
                  {parts.map((res, index) => {
                    if (index === 0) {
                      return;
                    } else return <p className="px-5">• {res}</p>;
                  })}
                </div>
              </div>
              <div className="mt-5  fst-italic d-flex justify-content-center">
                <NavLink
                  className="border-0 p-3  bg-dark text-light fs-5   "
                  to={`/detail/${data_popup._id.$oid}`}
                >
                  <div className="d-none d-sm-inline">
                    {IconManager.cart_no_2}
                  </div>
                  <div className="text-muted d-inline">View Detail</div>
                </NavLink>
              </div>
            </div>

            <div className="col-1"></div>
          </div>
          <div className=" fst-italic mt-3  text-secondary d-block d-lg-none d-flex short_text_popup">
            <div className="col-2"></div>
            <div className="col-8 ">
              <p className="px-5 fs-2 fw-bold ">{parts[0]}</p>
              {parts.map((res, index) => {
                if (index === 0) {
                  return;
                } else return <p className="px-5">• {res}</p>;
              })}
            </div>
            <div className="col-2"></div>
          </div>
          <button
            onClick={() => {
              dispatch({ type: HIDE_POPUP });
            }}
            className="close_popup border-0 p-1 bg-light"
          >
            {IconManager.cancel}
          </button>
        </div>
      </div>
    )
  );
}

export default Popup;
