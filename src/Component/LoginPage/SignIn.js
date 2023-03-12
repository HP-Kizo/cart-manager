import { Fragment, useRef, useState, useEffect } from "react";
import { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ADD_CART } from "../../store/context";
import styles from "./SignIn.module.css";
// function SignIn(props) {
//   const dispatch = useDispatch();
//   const userArr = useSelector((state) => state.userArr);
//   const [dataLocal, setDataLocal] = useState(userArr);
//   const [enterEmail, setEnterEmail] = useState("");
//   let inputEmailIsvalid = false;
//   const [check, setCheck] = useState(true);
//   const [enterPassword, setEnterPassword] = useState("");
//   let inputPasswordIsvalid = false;

//   let inputIsValid = false;

//   enterEmail.includes("@")
//     ? (inputEmailIsvalid = true)
//     : (inputEmailIsvalid = false);
//   enterPassword.length > 8
//     ? (inputPasswordIsvalid = true)
//     : (inputPasswordIsvalid = false);
//   if (inputEmailIsvalid && inputPasswordIsvalid) {
//     inputIsValid = true;
//   } else {
//     inputIsValid = false;
//   }
//   function clickHandler() {
//     if (enterEmail === userArr.email && enterPassword === userArr.password) {
//       setCheck(true);
//       localStorage.setItem("ON_LOGIN", JSON.stringify(true));
//       dispatch({ type: "ON_LOGIN", userArr: userArr.name });
//     } else {
//       setCheck(false);
//       setEnterPassword("");
//     }
//   }

//   return (
//     <div className={styles.signUP}>
//       <h2 className={styles.h2}>Sign In</h2>
//       <input
//         type="email"
//         placeholder="  Email"
//         onChange={(e) => {
//           setEnterEmail(e.target.value);
//         }}
//       ></input>
//       <input
//         type="password"
//         placeholder="  Password"
//         value={enterPassword}
//         onChange={(e) => {
//           setEnterPassword(e.target.value);
//         }}
//       ></input>
//       {!check && <p className={styles.notice}>Incorrect email or password</p>}
//       <button
//         disabled={!inputIsValid}
//         onClick={clickHandler}
//         className={inputIsValid ? styles.button : styles.no_button}
//       >
//         SIGN UP
//       </button>
//       {props.children}
//     </div>
//   );
// }

// export default SignIn;
//---------------------------------------------------------------------------------------------------------------------------

// Sử dụng các useRudecer để kiểm tra các trường thông tin
const reducerEmail = (state, action) => {
  switch (action.type) {
    case "ENTER_EMAIL":
      return { value: action.value, isValid: action.value.includes("@") };
    case "CHECK_EMAIL":
      return { value: state.value, isValid: action.value.includes("@") };
    default:
      return state;
  }
};
const reducerPassword = (state, action) => {
  switch (action.type) {
    case "ENTER_PASSWORD":
      return { value: action.value, isValid: action.value.trim().length >= 8 };
    case "CHECK_PASSWORD":
      return { value: state.value, isValid: action.value.trim().length >= 8 };
    case "RESET_INPUT_PASSWORD":
      return {
        value: action.value,
        isValid: action.value.trim().length >= 8,
      };
    default:
      return state;
  }
};

const initState = {
  value: "",
  isValid: null,
};
function SignIn(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Lấy dữ liêu đã lưu dưới LocalStorage lên
  //  -----------------------------------------------------------------------------------------------------------------------
  const initialUser = JSON.parse(localStorage.getItem("data_login")) || [];
  const [userArr, setUserArr] = useState(initialUser);
  //  -----------------------------------------------------------------------------------------------------------------------

  // Kiểm tra xem các input có hợp lệ
  //  -----------------------------------------------------------------------------------------------------------------------

  const [emailState, dispatchEmail] = useReducer(reducerEmail, initState);
  const [passwordState, dispatchPassword] = useReducer(
    reducerPassword,
    initState
  );
  // Check là giá trị kiểm tra xem các input đã hợp lệ chưa, nếu chưa sẽ hiển thị lỗi
  const [check, setCheck] = useState(null);
  // FormisValid là giá trị kiểm tra xem tất cả dữ liệu đã hơp lệ chưa

  const [formIsValid, setFormIsValid] = useState(false);
  const hanlderEnterEmail = (e) => {
    dispatchEmail({ type: "ENTER_EMAIL", value: e.target.value });
    setFormIsValid(e.target.value.includes("@") && passwordState.isValid);
  };
  const hanlderEnterPassword = (e) => {
    dispatchPassword({ type: "ENTER_PASSWORD", value: e.target.value });
    setFormIsValid(emailState.isValid && e.target.value.trim().length >= 8);
    setCheck(null);
  };
  const hanlderValidateEmail = () => {
    dispatchEmail("CHECK_EMAIL");
  };
  const hanlderValidatePassword = () => {
    dispatchPassword("CHECK_PASSWORD");
  };
  //  -----------------------------------------------------------------------------------------------------------------------

  // Lấy dữ liệu người dùng
  //  -----------------------------------------------------------------------------------------------------------------------

  const sendRequest = (userData) => {
    setCheck(false);
    navigate("/");
    localStorage.setItem("isLogin", JSON.stringify(true));
  };
  const failLogin = () => {
    setCheck(true);
    dispatchPassword({ type: "RESET_INPUT_PASSWORD", value: "" });
  };

  const cart_manager_all_user = useSelector(
    (state) => state.cart_manager_all_user
  );
  function validateLogin() {
    if (userArr && Array.isArray(userArr) && userArr.length > 0) {
      const validateLogin = userArr.filter((res) => {
        return (
          res.email === emailState.value && res.password === passwordState.value
        );
      });
      if (
        validateLogin &&
        Array.isArray(validateLogin) &&
        validateLogin.length !== 0
      ) {
        setCheck(false);
        navigate("/");
        localStorage.setItem("isLogin", JSON.stringify(validateLogin));

        if (
          cart_manager_all_user &&
          Array.isArray(cart_manager_all_user) &&
          cart_manager_all_user.length !== 0
        ) {
          console.log(validateLogin[0].email);
          const cart_user_login = cart_manager_all_user.find((res) => {
            return res.email === validateLogin[0].email;
          });
          console.log(cart_user_login.cart);

          cart_user_login !== "undefined" &&
            dispatch({ type: ADD_CART, cart: cart_user_login.cart });
        }
      } else {
        setCheck(true);
        dispatchPassword({ type: "RESET_INPUT_PASSWORD", value: "" });
      }
    } else {
      setCheck(true);
      dispatchPassword({ type: "RESET_INPUT_PASSWORD", value: "" });
    }
  }

  return (
    <Fragment>
      <div className={styles.signUP}>
        <h2 className={styles.h2}>Sign In</h2>
        <div
          className={`${styles.control} ${
            emailState.isValid === false ? styles.invalid : ""
          }`}
        >
          <input
            className="px-4"
            type="email"
            placeholder="Email"
            onChange={hanlderEnterEmail}
            onBlur={hanlderValidateEmail}
          ></input>
        </div>

        <div
          className={`${styles.control} ${
            passwordState.isValid === false ? styles.invalid : ""
          }`}
        >
          <input
            className="px-4"
            type="password"
            placeholder="Password"
            value={passwordState.value}
            onChange={hanlderEnterPassword}
            onBlur={hanlderValidatePassword}
          ></input>
        </div>

        {check && <p className={styles.notice}>Incorrect email or password</p>}
        <button
          disabled={!formIsValid}
          className={
            formIsValid
              ? `${styles.button} border-0 text-light fw-normal fs-5 col-10 rounded-1 p-4`
              : `${styles.no_button} border-0 text-light fw-normal fs-5 col-10 rounded-1 p-4`
          }
          onClick={validateLogin}
        >
          SIGN UP
        </button>
        {props.children}
        <div className="container text-center ">
          <span className="mt-4">Create an account?</span>
          <NavLink
            className="border-0 text-dark fs-5 bg-transparent text-decoration-none"
            onClick={() => {}}
            to="/login/sign_up"
          >
            <span className="p-0 text-primary"> Sign up</span>
          </NavLink>
        </div>
      </div>
    </Fragment>
  );
}
export default SignIn;
