import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const GET_PRODUCT = "GET_PRODUCT";
export const SHOW_POPUP = "SHOW_POPUP";
export const HIDE_POPUP = "HIDE_POPUP";
export const ADD_CART = "ADD_CART";
export const UPDATE_CART = "UPDATE_CART";
export const DELETE_CART = "DELETE_CART";
export const GET_ALL_CART = "GET_ALL_CART";
export const ON_LOGOUT = "ON_LOGOUT";
export const ON_LOGIN = "ON_LOGIN";
export const UPDATE_DATA_ALL_CART = "UPDATE_DATA_ALL_CART";
// Sử dụng redux persirt để lưu các state, tránh reload bị mất
function separateNumber(data) {
  try {
    const turn = Math.ceil(data.length / 3);
    let a = "";
    for (let index = 0; index < turn; index++) {
      if (index !== turn - 1) {
        a =
          "." +
          data.slice(
            data.length - 3 * (index + 1) > 0
              ? data.length - 3 * (index + 1)
              : 0,
            data.length - 3 * index
          ) +
          a;
      } else {
        a =
          data.slice(
            data.length - 3 * (index + 1) > 0
              ? data.length - 3 * (index + 1)
              : 0,
            data.length - 3 * index
          ) + a;
      }
    }
    return a;
  } catch (error) {
    return;
  }
}
const persistConfig = {
  key: "root",
  storage,
};
const initState = {
  show_popup: false,
  cart_manager: [],
  separateNumber: separateNumber,
};
const reducerContext = (state = initState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return { ...state, listProduct: action.product };
    case SHOW_POPUP:
      return {
        ...state,
        show_popup: true,
        data_popup: action.data_popup,
      };
    case HIDE_POPUP:
      return {
        ...state,
        show_popup: false,
        data_popup: {},
      };
    case ON_LOGIN:
      return {
        ...state,
        userLogin: action.userLogin,
      };
    case UPDATE_DATA_ALL_CART:
      return {
        ...state,
        cart_manager_all_user: action.cart_manager_all_user,
      };

    case ADD_CART:
      return {
        ...state,
        cart_manager: action.cart,
      };
    case UPDATE_CART:
      return {
        ...state,
      };
    case DELETE_CART:
      return {
        ...state,
        cart_manager: action.cart,
      };

    default:
      return state;
  }
};
const persistedReducer = persistReducer(persistConfig, reducerContext);

const store = createStore(persistedReducer);
export const persistor = persistStore(store);
export default store;
