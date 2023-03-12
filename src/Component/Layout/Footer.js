import styles from "./Footer.module.css";
import { Link, NavLink } from "react-router-dom";
import ChatLive from "../Chat/Chat";
function Footer() {
  // Phần Footer chứa cả phần live chat
  //---------------------------------------------------------------------------------------------------------------------------

  return (
    <>
      <div className="container-fluid w-100 row bg-dark text-light mt-5">
        <footer className="row bg-dark text-left   ">
          <div className="col-1 col-md-1 col-lg-3   col-xl-2"></div>
          <ul className="col-3 col-md-3 col-lg-2 col-xl-3 navbar-nav fs-20 pl-2">
            <li class="nav-item  fst-italic ">
              <NavLink className="nav-link" to="/">
                <h5> CUSTOMER SERVICES </h5>
              </NavLink>
            </li>
            <li class="nav-item   fst-italic fs-7 ">
              <NavLink className="nav-link" to="/">
                Help & Contact Us
              </NavLink>
            </li>
            <li class="nav-item   fst-italic fs-7 ">
              <NavLink className="nav-link" to="/">
                Return & Refunds
              </NavLink>
            </li>
            <li class="nav-item   fst-italic fs-7 ">
              <NavLink className="nav-link" to="/">
                Online Storesx
              </NavLink>
            </li>
            <li class="nav-item   fst-italic fs-7 ">
              <NavLink className="nav-link" to="/">
                Terms & Conditions
              </NavLink>
            </li>
          </ul>
          <ul className="col-4 col-md-4 col-lg-2 col-xl-3 row navbar-nav">
            <li class="nav-item   fst-italic fs-7 ">
              <NavLink className="nav-link" to="/">
                <h5>COMPANY </h5>
              </NavLink>
            </li>
            <li class="nav-item   fst-italic fs-7 ">
              <NavLink className="nav-link" to="/">
                What We Do
              </NavLink>
            </li>
            <li class="nav-item   fst-italic fs-7 ">
              <NavLink className="nav-link" to="/">
                Avaiable Services
              </NavLink>
            </li>
            <li class="nav-item   fst-italic fs-7 ">
              <NavLink className="nav-link" to="/">
                Latest Posts
              </NavLink>
            </li>
            <li class="nav-item   fst-italic fs-7 ">
              <NavLink className="nav-link" to="/">
                FAQs
              </NavLink>
            </li>
          </ul>
          <ul className="col-3 col-md-3 col-xl-2 col-lg-2 row navbar-nav">
            <li class="nav-item   fst-italic fs-7 ">
              <Link to="/" className="nav-link">
                <h5> SOCIAL MEDIA </h5>
              </Link>
            </li>
            <li class="nav-item   fst-italic fs-7 ">
              <Link to="/" className="nav-link">
                Twitter
              </Link>
            </li>
            <li class="nav-item   fst-italic fs-7 ">
              <Link to="/" className="nav-link">
                Instagram
              </Link>
            </li>
            <li class="nav-item   fst-italic fs-7 ">
              <Link to="/" className="nav-link">
                Facebook
              </Link>
            </li>
            <li class="nav-item   fst-italic fs-7 ">
              <Link to="/" className="nav-link">
                Pinterest
              </Link>
            </li>
          </ul>
          <div className="  col-md-1 col-lg-3 col-xl-1"></div>
        </footer>
        <ChatLive></ChatLive>
      </div>
    </>
  );
}

export default Footer;
