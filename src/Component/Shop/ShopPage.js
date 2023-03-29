import { useSelector, useDispatch } from "react-redux";
import NavBar from "../Layout/NavBar";
import Popup from "../Layout/Product/Popup/Popup";
import Catogerias from "./Catogeries/Catogerias";
import { useEffect } from "react";
import { HIDE_POPUP } from "../../store/context";
import Footer from "../Layout/Footer";
function ShopPage() {
  const dispatch = useDispatch();
  // Ẩn popup lúc rời khỏi
  useEffect(() => {
    return () => {
      dispatch({ type: HIDE_POPUP });
    };
  }, []);
  const show_popup = useSelector((state) => state.show_popup);
  return (
    <>
      <NavBar></NavBar>
      <div className="container p-4 bg-light mt-5"></div>
      <div
        className="container d-flex  
      p-5 bg-light justify-content-around mt-3"
      >
        <h2 className="fw-bold mx-5 fst-italic">SHOP</h2>
        <div className="col-2"></div>
        <p className="text-secondary mx-5 fs-4">SHOP</p>
      </div>
      <div className="p-4 container bg-light"></div>
      {show_popup && <Popup></Popup>}
      <Catogerias></Catogerias>
      <Footer></Footer>
    </>
  );
}

export default ShopPage;
