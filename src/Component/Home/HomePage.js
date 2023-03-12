import NavBar from "../Layout/NavBar";
import Footer from "../Layout/Footer";
import Banner from "../Layout/Banner";
import Category from "../Layout/Category/Category";
import Product from "../Layout/Product/Product";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { HIDE_POPUP } from "../../store/context";
function HomePage() {
  const dispatch = useDispatch();
  // Ẩn đi popoup mỗi khi rời khỏi HomePage do thuôc tính fixed
  useEffect(() => {
    return () => {
      dispatch({ type: HIDE_POPUP });
    };
  }, []);
  return (
    <>
      <NavBar></NavBar>

      <Banner></Banner>
      <Category></Category>
      <Product></Product>
      <Footer></Footer>
    </>
  );
}

export default HomePage;
