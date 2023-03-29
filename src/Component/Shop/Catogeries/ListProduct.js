import { useDispatch } from "react-redux";
import { SHOW_POPUP } from "../../../store/context";
import styles from "./ListProduct.module.css";
function ListProduct({ data }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="container-fluid d-flex g-2 flex-wrap mt-5">
        {/* Hiển thị các sản phẩm thông qua dữ liêu được truyền xuống từ Catogerias*/}
        {data.map((res) => {
          return (
            <button
              className="col-6 col-md-4 border-0 button"
              onClick={() => {
                dispatch({ type: SHOW_POPUP, data_popup: res });
              }}
            >
              <img src={res.img1} className="w-100" />
            </button>
          );
        })}
      </div>
    </>
  );
}

export default ListProduct;
