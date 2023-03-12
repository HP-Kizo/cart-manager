import { Fragment, useRef, useState, useEffect } from "react";
import NavBar from "../Layout/NavBar";
import Background from "../Layout/Photo/banner1.jpg";
import { useSelector } from "react-redux";
import styles from "./LoginPage.module.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { Route, Routes, useParams } from "react-router-dom";
// Sử dụng route để điều hướng các trang signin hoặc signUp
function LoginPage() {
  return (
    <Fragment>
      <NavBar></NavBar>
      <div className={styles.div}>
        <img src={Background} className={styles.img} />
        
        <Routes>
          <Route path="/" element={<SignIn></SignIn>}></Route>
          <Route path="sign_up" element={<SignUp />}></Route>
        </Routes>
      </div>
    </Fragment>
  );
}
export default LoginPage;
