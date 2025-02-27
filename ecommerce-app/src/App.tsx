import { Provider } from 'react-redux';
import './App.css';
import { store } from "./redux/store";
import Navbar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import LoginModal from "./components/LoginModal";
import ProtectedRoute from './components/ProtectedRoute';
import ScrollToTopButton from './components/ScrollToTopButton';
import BannerPopup from "./components/BannerPopup";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Toaster position="bottom-center" reverseOrder={false} />
      <Footer/>
      <Cart />
      <LoginModal />
      <ScrollToTopButton />
      <BannerPopup />
    </Provider>
  )
}

export default App
