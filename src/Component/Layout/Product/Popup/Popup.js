import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HIDE_POPUP } from "../../../../store/context";
function Popup() {
  const data_popup = useSelector((state) => state.data_popup);
  // popup nhận dữ liêu từ redux khi người dùng nhấn xem sản phẩm
  const separateNumber = useSelector((state) => state.separateNumber);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    data_popup && (
      <div className="container-fluid fixed-top background h-100 ">
        <div id="popup" className="container d-flex g-1 bg-light w-75 h-75">
          <div className="col-6  pt-5 ">
            <img src={data_popup.img1} className="h-100 w-100 px-5" />
          </div>
          <div className="col-5">
            <div className=" pt-5 px-5 fst-italic text_product ">
              <h2 className="name_product">{data_popup.name}</h2>
              <h4 className="mt-4">{separateNumber(data_popup.price)} VND</h4>
              <p className="fst-italic mt-3  text-secondary">
                {data_popup.long_desc}
              </p>
            </div>
            <div className="mt-5 px-5 fst-italic">
              <NavLink
                className="border-0 p-4 bg-dark text-light fs-4  "
                to={`/detail/${data_popup._id.$oid}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="white"
                  class="bi bi-cart"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                View Detail
              </NavLink>
            </div>
          </div>

          <div className="col-1"></div>
        </div>
        <button
          onClick={() => {
            dispatch({ type: HIDE_POPUP });
          }}
          className="close_popup border-0 p-4"
        >
          X
        </button>
      </div>
    )
  );
}

export default Popup;
