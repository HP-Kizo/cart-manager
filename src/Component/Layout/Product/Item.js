import { NavLink } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Item.module.css";
import { SHOW_POPUP } from "../../../store/context";
// Đây là component nhận dữ liệu để hiển thị các sản phẩm từ list product
  //---------------------------------------------------------------------------------------------------------------------------

function Item({ data }) {
  const dispatch = useDispatch();
  const separateNumber = useSelector((state) => state.separateNumber);
  return (
    <>
      <button
        className="col-3 border-0 bg-transparent list_product"
        onClick={() => {
          dispatch({ type: SHOW_POPUP, data_popup: data });
        }}
      >
        <img src={data.img1} className="w-100" />
        <div className="  ">
          <p className="fw-bolder fs-5">{data.name}</p>
          <p className="text-secondary">{separateNumber(data.price)} VND</p>
        </div>
      </button>
    </>
  );
}

export default Item;
