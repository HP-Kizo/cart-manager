import { NavLink } from "react-router-dom";
// Lây background
import Background from "../Layout/Photo/banner1.jpg";
import styles from "./Banner.module.css";

function Banner() {
  return (
    <div className={`${styles.out} container-fluid mt-3`}>
      <img src={Background} className="col-12   w-100" id="img_banner" />
      <div className={`${styles.content_banner} row-4`} id="text_banner">
        <p className="text-muted fs-3">NEW INSPIRATION 2022 </p>
        <p className="text-dark fs-1 fw-normal fst-italic">20% OFF ON NEW</p>
        <p className="text-dark fs-1 fw-normal fst-italic">SEASON</p>
        <NavLink className="btn btn-dark fs-4 px-5  rounded-0" to="/shop">
          Browse collections
        </NavLink>
      </div>
    </div>
  );
}

export default Banner;
