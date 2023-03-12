import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { ON_LOGOUT, UPDATE_DATA_ALL_CART } from "../../store/context";
import { ADD_CART } from "../../store/context";
import { ON_LOGIN } from "../../store/context";
import { useState, useEffect } from "react";
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
    <nav className="navbar navbar-expand shadow-sm bg-light fixed-top">
      <div className="container-fluid row  text-center">
        <ul className="navbar-nav ">
          <div className="col-2"></div>
          <li class="nav-item col-1 fs-3 fst-italic li">
            <NavLink
              className={(navData) =>
                navData.isActive ? ` text-warning nav-link` : "nav-link"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li class="nav-item col-1 fs-3 fst-italic">
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
          <li class="nav-item col-1 fs-3 fst-italic">
            <NavLink
              className={(navData) =>
                navData.isActive ? `text-warning nav-link` : "nav-link"
              }
              to={!!userLogin ? "/cart" : "/login"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-cart-fill"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
              Cart
            </NavLink>
          </li>
          <li
            class={
              !!userLogin
                ? "nav-item col-3 fs-3 fst-italic"
                : "nav-item col-1 fs-3 fst-italic"
            }
          >
            <NavLink
              className={(navData) =>
                navData.isActive ? `text-warning nav-link` : "nav-link"
              }
              to="/login"
              onClick={handlerLogout}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-person-check-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                />
                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
              {!!userLogin ? `${userLogin[0].name} (Logout)` : "Login"}
            </NavLink>
            <div className={!!userLogin ? "col-0" : "col-2"}></div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
