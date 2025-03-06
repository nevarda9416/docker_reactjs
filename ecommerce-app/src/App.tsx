import {Provider} from 'react-redux';
import './App.css';
import {store} from "./redux/store";
import Navbar from "./components/NavBar";
import {Toaster} from "react-hot-toast";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import LoginModal from "./components/LoginModal";
import ScrollToTopButton from './components/ScrollToTopButton';
import BannerPopup from "./components/BannerPopup";
import AppRoutes from "./routes/AppRoutes";

function App() {
    return (
        <Provider store={store}>
            <Navbar/>
            <AppRoutes/>
            <Toaster position="bottom-center" reverseOrder={false}/>
            <Footer/>
            <Cart/>
            <LoginModal/>
            <ScrollToTopButton/>
            <BannerPopup/>
        </Provider>
    )
}

export default App
