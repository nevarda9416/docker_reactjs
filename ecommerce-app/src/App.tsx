import { Provider } from 'react-redux';
import './App.css';
import { store } from "./redux/store";
import Navbar from "./components/NavBar";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import CartList from "./components/cart/CartList";
import Login from "./components/modal/Login";
import ScrollToTopButton from './components/ScrollToTopButton';
import Banner from "./components/popup/Banner";
import AppRoutes from "./routes/AppRoutes";

function App() {
    return (
        <Provider store={store}>
            <Navbar />
            <AppRoutes />
            <Toaster position="bottom-center" reverseOrder={false} />
            <Footer />
            <CartList />
            <Login />
            <ScrollToTopButton />
            <Banner />
        </Provider>
    )
}

export default App
