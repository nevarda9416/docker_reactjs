import { Provider } from 'react-redux';
import './App.css';
import { store } from "./redux/store";
import Navbar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import SingleProduct from "./pages/SingleProduct";
import LoginModal from "./components/LoginModal";
import AllProducts from "./pages/AllProducts";
import ScrollToTopButton from './components/ScrollToTopButton';
import BannerPopup from "./components/BannerPopup";
import AllCategories from "./pages/AllCategories";
import SingleCateogory from "./pages/SingleCategory";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/categories" element={<AllCategories />} />
        <Route path="/product/:productID" element={<SingleProduct />} />
        <Route path="/category/:slug" element={<SingleCateogory />} />
      </Routes>
      <Toaster position="bottom-center" reverseOrder={false} />
      <Footer />
      <Cart />
      <LoginModal />
      <ScrollToTopButton />
      <BannerPopup />
    </Provider>
  )
}

export default App
