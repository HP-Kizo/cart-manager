import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { ON_LOGOUT, UPDATE_DATA_ALL_CART } from "../../store/context";
import { ADD_CART } from "../../store/context";
import { ON_LOGIN } from "../../store/context";
import { useState, useEffect } from "react";
import { IconManager } from "../Icon/Icon";
function NavBar() {
  // Lây các trường dữ liệu từ local và redux
  const userLogin = JSON.parse(localStorage.getItem("isLogin")) || false;
  const allcart = useSelector((state) => state.cart_manager_all_user);

  const cart_manager = useSelector((state) => state.cart_manager);
  const [all_data, setAll_data] = useState([]);

  const dispatch = useDispatch();
  // Khi login thành công gửi 1 dispatch để lưu thông tin người dùng đã login
  useEffect(() => {
    if (!!userLogin) {
      dispatch({ type: ON_LOGIN, userLogin: userLogin });
    } else {
      dispatch({ type: ON_LOGIN, userLogin: false });
    }
  }, []);
  // Xử lí lúc logout
  const handlerLogout = async () => {
    dispatch({ type: ADD_CART, cart_manager: [] });
    localStorage.removeItem("isLogin");
  };

  return (
    <nav className="navbar navbar-expand-sm shadow-sm bg-light fixed-top px-5">
      <div class="container-fluid">
        <NavLink
          className="mx-5 text-warning nav-link fs-3 fst-italic d-inline d-sm-none"
          to="/"
        >
          Home
        </NavLink>
        <button
          class="navbar-toggler py-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          className="container-fluid row  text-center collapse navbar-collapse"
          id="collapsibleNavbar"
        >
          <ul className="navbar-nav ">
            <div className=" nav-item  col-sm-0 col-md-2 col-lg-2 col-xxl-2"></div>
            <li class="nav-item col-2 col-sm-2 col-md-1 fs-3 fst-italic li d-none d-sm-inline">
              <NavLink
                className={(navData) =>
                  navData.isActive ? ` text-warning nav-link` : "nav-link"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li class="nav-item col-2 col-sm-2 col-md-1 fs-3 fst-italic">
              <NavLink
                className={(navData) =>
                  navData.isActive ? `text-warning nav-link` : "nav-link"
                }
                to="/shop"
              >
                Shop
              </NavLink>
            </li>
            <li class="nav-item col-4  fs-1 fst-italic">
              <NavLink
                className={(navData) =>
                  navData.isActive ? `text-warning nav-link` : "nav-link"
                }
              >
                BOUTIQUE
              </NavLink>
            </li>
            <li class="nav-item col-2 col-lg-1 col-md-2 col-sm-2 col-xs-3 fs-3 fst-italic">
              <NavLink
                className={(navData) =>
                  navData.isActive ? `text-warning nav-link` : "nav-link"
                }
                to={!!userLogin ? "/cart" : "/login"}
              >
                <div className="d-none d-sm-inline">{IconManager.cart}</div>
                Cart
              </NavLink>
            </li>
            <li
              class={
                !!userLogin
                  ? "nav-item col-3 fs-3 fst-italic"
                  : "nav-item col-2 col-lg-1 col-md-2  col-sm-2 col-xs-2  fs-3 fst-italic"
              }
            >
              <NavLink
                className={(navData) =>
                  navData.isActive ? `text-warning nav-link` : "nav-link"
                }
                to="/login"
                onClick={handlerLogout}
              >
                <div className="d-none d-sm-inline">{IconManager.user}</div>
                {!!userLogin ? `${userLogin[0].name} (Logout)` : "Login"}
              </NavLink>
            </li>
            <div className={!!userLogin ? "col-0" : "col-2"}></div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
