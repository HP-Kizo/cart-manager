import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../Layout/NavBar";
import styles from "./Detail.module.css";
import { ADD_CART } from "../../store/context";
import { UPDATE_CART } from "../../store/context";
import Footer from "../Layout/Footer";
function DetailPage() {
  const param = useParams();
  const dispatch = useDispatch();
  const cart_manager = useSelector((state) => state.cart_manager);

  const listProduct = useSelector((state) => state.listProduct);
  const separateNumber = useSelector((state) => state.separateNumber);
  const [detailData, setDetailData] = useState();
  const [related, setRelated] = useState();
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(1);
  const [position, setPosition] = useState("undefined");

  // Mỗi khi cart thay đổi thì gửi 1 dispatch để cập nhật lại dữ liệu trên redux
  //---------------------------------------------------------------------------------------------------------------------------

  useEffect(() => {
    cart &&
      Array.isArray(cart) &&
      cart.length !== 0 &&
      dispatch({ type: ADD_CART, cart: cart });
  }, [cart]);
  //---------------------------------------------------------------------------------------------------------------------------
  // Lấy dữ liệu người dùng đã login dưới local
  const isLogin = JSON.parse(localStorage.getItem("isLogin")) || false;

  // XỬ lí lúc thêm vào giỏ hàng
  //  -----------------------------------------------------------------------------------------------------------------------

  const handlerClickAddcart = async () => {
    // Kiểm tra xem đã login chưa, nếu chưa thì chuyển hướng sang login
    if (!!isLogin) {
      // THêm các trường dữ liệu mới vào detailData
      detailData[0].email = isLogin[0].email;
      detailData[0].quantity = count;
      // Tạo 1 new_cart chính là dữ liệu đã nhận vào từ phía người dùng
      let new_cart = {
        productId: detailData[0]._id.$oid,
        quantity: parseInt(detailData[0].quantity),
        price: detailData[0].price,
        name: detailData[0].name,
      };
      // Xét các trường hợp để xử lý, nếu đã tồn tại thì chỉ cần cập nhật lại quantity, còn không thì thêm mới sản phẩm
      if (
        cart_manager &&
        Array.isArray(cart_manager) &&
        cart_manager.length !== 0
      ) {
        const a = cart_manager.findIndex((res) => {
          return res.productId === new_cart.productId;
        });
        if (a !== -1) {
          const updateCart = [...cart_manager];

          updateCart[a].quantity += new_cart.quantity;
          setCart(updateCart);
        } else {
          const updateCart = [...cart_manager, new_cart];
          setCart(updateCart);
        }
      } else {
        const updateCart = [new_cart];
        setCart(updateCart);
      }
    } else {
      navigate("/login");
    }
  };
  //  -----------------------------------------------------------------------------------------------------------------------

  const navigate = useNavigate();
  // Lấy toàn bộ dữ liệu của sản phẩm đã chọn
  useEffect(() => {
    listProduct &&
      Array.isArray(listProduct) &&
      listProduct.length !== 0 &&
      setDetailData(
        listProduct.filter((res) => {
          return res._id.$oid === param.id;
        })
      );
  }, [listProduct]);
  // Tìm các sản phẩm cùng category với sản phẩm chính rồi lưu lại
  //---------------------------------------------------------------------------------------------------------------------------

  useEffect(() => {
    listProduct &&
      Array.isArray(listProduct) &&
      listProduct.length !== 0 &&
      detailData &&
      detailData.length !== 0 &&
      setRelated(
        listProduct.filter((res) => {
          return (
            res.category === detailData[0].category &&
            res._id.$oid !== detailData[0]._id.$oid
          );
        })
      );
  }, [detailData]);

  return (
    <>
      <NavBar></NavBar>
      {detailData && detailData.length !== 0 && (
        <div className="container pt-5 mt-5">
          <div className="row mt-5">
            <div className="col-2">
              <img src={`${detailData[0].img4}`} className={styles.img_small} />
              <img src={`${detailData[0].img3}`} className={styles.img_small} />
              <img src={`${detailData[0].img2}`} className={styles.img_small} />
              <img src={`${detailData[0].img1}`} className={styles.img_small} />
            </div>
            <div className="col-5">
              <img src={`${detailData[0].img1}`} className={styles.img_big} />
            </div>
            <div className="col-5">
              <h2 className="fw-border fs-2 text-uppercase fst-italic">
                {detailData[0].name}
              </h2>
              <p className="fw-normal fs-4">
                {separateNumber(detailData[0].price)}
              </p>
              <p className="fst-italic px-5">{detailData[0].short_desc}</p>
              <p className="fw-normal text-uppercase">
                CATEGORY: {detailData[0].category}
              </p>
              <label className="row">
                <input
                  type="number"
                  className="col-6"
                  value={count}
                  min="1"
                  onChange={(e) => {
                    setCount(e.target.value);
                  }}
                ></input>
                <button
                  className="col-3 p-3 bg-dark text-light  "
                  onClick={handlerClickAddcart}
                >
                  Add to cart
                </button>
              </label>
            </div>
          </div>
          <div>
            <h4 className="fw-bold fs-2 mt-5">DESCRIPTION</h4>
            <h5 className="fw-bolder fs-4 mt-4">PRODUCT DESCRIPTION</h5>
            <p className="fst-italic px-5">{detailData[0].long_desc}</p>
          </div>
          <div>
            <p className="fw-bolder fs-4 mt-4">RELATED PRODUCTS</p>
            <div className="d-flex text-center">
              {related &&
                Array.isArray(related) &&
                related.length !== 0 &&
                related.map((res) => {
                  return (
                    <div className="container">
                      <img src={res.img1} className="w-50" />
                      <p className="fs-5">{res.name}</p>
                      <p className="fs-5">{res.price} VND</p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}
      <Footer></Footer>
    </>
  );
}

export default DetailPage;
