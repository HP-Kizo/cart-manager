import { Fragment, useRef, useState, useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css";

// Khởi tạo reducer kiểm tra dữ liệu nhập vào của Name
const reducerName = (state, action) => {
  switch (action.type) {
    case "ENTER_INPUT_Name":
      return { value: action.value, isValid: action.value.trim().length > 0 };
    case "CHECk_INPUT_Name":
      return { value: state.value, isValid: action.value.trim().length > 0 };
    default:
      return state;
  }
};
let initStateName = {
  value: "",
  isValid: null,
};

// Khởi tạo reducer kiểm tra dữ liệu nhập vào của email
const reducerEmail = (state, action) => {
  switch (action.type) {
    case "ENTER_INPUT_Email":
      return { value: action.value, isValid: action.value.includes("@") };
    case "CHECk_INPUT_Email":
      return { value: state.value, isValid: action.value.includes("@") };
    default:
      return state;
  }
};
let initStateEmail = {
  value: "",
  isValid: null,
};
// Khởi tạo reducer kiểm tra dữ liệu nhập vào của Password
const reducerPassword = (state, action) => {
  switch (action.type) {
    case "ENTER_INPUT_Password":
      return { value: action.value, isValid: action.value.trim().length >= 8 };
    case "CHECk_INPUT_Password":
      return { value: action.value, isValid: action.value.trim().length >= 8 };
    default:
      return state;
  }
};
let initStatePassword = {
  value: "",
  isValid: null,
};

// Khởi tạo reducer kiểm tra dữ liệu nhập vào của Phone
const reducerPhone = (state, action) => {
  switch (action.type) {
    case "ENTER_INPUT_Phone":
      return { value: action.value, isValid: action.value.trim().length >= 9 };
    case "CHECk_INPUT_Phone":
      return { value: state.value, isValid: action.value.trim().length >= 9 };
    default:
      return state;
  }
};
let initStatePhone = {
  value: "",
  isValid: null,
};
function SignUp(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Dùng useReducer để quản lý các trường input

  const [stateName, dispatchName] = useReducer(reducerName, initStateName);
  const [stateEmail, dispatchEmail] = useReducer(reducerEmail, initStateEmail);
  const [statePassword, dispatchPassword] = useReducer(
    reducerPassword,
    initStatePassword
  );
  const [statePhone, dispatchPhone] = useReducer(reducerPhone, initStatePhone);
  const [formIsValid, setFormIsValid] = useState(false);

  function handlerChangeName(e) {
    dispatchName({ type: "ENTER_INPUT_Name", value: e.target.value });
    setFormIsValid(
      e.target.value.trim().length > 0 &&
        stateEmail.isValid &&
        statePassword.isValid &&
        statePhone.isValid
    );
  }
  function validateChangeName() {
    return dispatchName({ type: "CHECK_INPUT_Name" });
  }

  function handlerChangeEmail(e) {
    dispatchEmail({ type: "ENTER_INPUT_Email", value: e.target.value });
    setFormIsValid(
      stateName.isValid &&
        e.target.value.includes("@") &&
        statePassword.isValid &&
        statePhone.isValid
    );
    setCheck(false);
  }
  function validateChangeEmail() {
    return dispatchEmail({ type: "CHECK_INPUT_Email" });
  }
  function handlerChangePassword(e) {
    dispatchPassword({
      type: "ENTER_INPUT_Password",
      value: e.target.value,
    });
    setFormIsValid(
      stateName.isValid &&
        stateEmail.isValid &&
        e.target.value.trim().length >= 8 &&
        statePhone.isValid
    );
  }
  function validateChangePassword() {
    return dispatchPassword({ type: "CHECK_INPUT_Password" });
  }
  function handlerChangePhone(e) {
    dispatchPhone({ type: "ENTER_INPUT_Phone", value: e.target.value });
    setFormIsValid(
      stateName.isValid &&
        stateEmail.isValid &&
        statePassword.isValid &&
        e.target.value.trim().length >= 9
    );
  }
  function validateChangePhone() {
    return dispatchPhone({ type: "CHECK_INPUT_Phone" });
  }
  const initialUser = JSON.parse(localStorage.getItem("data_login")) || [];
  const [userArr, setUserArr] = useState(initialUser);
  const isLogin = !!userArr;

  // Tạo hàm xử lí lúc gửi form
  const [check, setCheck] = useState(false);
  function clickHandler() {
    let data = {
      name: stateName.value,
      email: stateEmail.value,
      password: statePassword.value,
      phone: statePhone.value,
    };
    let checkEmail =
      Array.isArray(userArr) && userArr.length > 0
        ? userArr.filter((res) => res.email === data.email)
        : [];

    if (checkEmail.length === 0) {
      if (Array.isArray(userArr) && userArr.length > 0) {
        localStorage.setItem("data_login", JSON.stringify([...userArr, data]));
      } else {
        localStorage.setItem("data_login", JSON.stringify([data]));
      }
      setCheck(false);
      navigate("/login");
    } else {
      setCheck(true);
    }
  }
  // Xử lí lưu dữ liệu

  return (
    <div className={styles.signUP}>
      <h2 className={styles.h2}>Sign Up</h2>
      <div
        className={`${styles.control} ${
          stateName.isValid === false ? styles.invalid : ""
        }`}
      >
        <input
          className="p-4"
          type="text"
          placeholder=" Full Name"
          onChange={handlerChangeName}
          onBlur={validateChangeName}
        ></input>
      </div>

      <div
        className={`${styles.control} ${
          stateEmail.isValid === false ? styles.invalid : ""
        }`}
      >
        <input
          type="email"
          className="p-4"
          placeholder=" Email"
          onChange={handlerChangeEmail}
          onBlur={validateChangeEmail}
        ></input>
      </div>
      {!stateEmail.value.includes("@") &&
        stateEmail.value.length !== 0 &&
        stateEmail.isValid !== null && (
          <div className="text-danger text-start px-5">Invalid email</div>
        )}

      <div
        className={`${styles.control} ${
          statePassword.isValid === false ? styles.invalid : ""
        }`}
      >
        <input
          type="text"
          className="p-4"
          placeholder=" Password)"
          onChange={handlerChangePassword}
          onBlur={validateChangePassword}
        ></input>
      </div>
      {statePassword.value.length !== 0 &&
        statePassword.value.length < 8 &&
        statePassword.isValid !== null && (
          <div className="text-danger text-start px-5">
            Password more than 8 characters
          </div>
        )}
      <div
        className={`${styles.control} ${
          statePhone.isValid === false ? styles.invalid : ""
        }`}
      >
        <input
          type="number"
          className="p-4"
          placeholder=" Phone"
          onChange={handlerChangePhone}
          onBlur={validateChangePhone}
        ></input>
      </div>
      {check && <p className={styles.notice}>Email already exists</p>}

      <button
        disabled={!formIsValid}
        onClick={clickHandler}
        className={
          formIsValid
            ? `${styles.button} border-0 text-light fw-normal fs-5 col-10 rounded-1 p-4`
            : `${styles.no_button} border-0 text-light fw-normal fs-5 col-10 rounded-1 p-4`
        }
      >
        SIGN UP
      </button>
      {props.children}
      <div className="container text-center ">
        <span className="mt-4">Login?</span>
        <NavLink
          className="border-0 text-dark fs-5 bg-transparent text-decoration-none"
          onClick={() => {}}
          to="/login"
        >
          <span className="p-0 text-primary"> Sign</span>
        </NavLink>
      </div>
    </div>
  );
}

export default SignUp;
