import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import AllProducts from "../pages/AllProducts";
import AllCategories from "../pages/AllCategories";
import SingleProduct from "../pages/SingleProduct";
import SingleCategory from "../pages/SingleCategory";
import Wishlist from "../pages/Wishlist";
import Profile from "../pages/Profile";
import UserList from "../pages/admin/UserList.tsx";
import Page404 from "../pages/errors/Page404";
import ProtectedRoute from './ProtectedRoute.tsx';
import MultiFileUpload from "../pages/admin/MultiFileUpload.tsx";

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<AllProducts/>}/>
                <Route path="/categories" element={<AllCategories/>}/>
                <Route path="/product/:productID" element={<SingleProduct/>}/>
                <Route path="/category/:slug" element={<SingleCategory/>}/>
                <Route path="/wishlist" element={<ProtectedRoute/>}>
                    <Route path="/wishlist" element={<Wishlist/>}/>
                </Route>
                <Route path="/account" element={<ProtectedRoute/>}>
                    <Route path="/account" element={<Profile/>}/>
                </Route>
                <Route path="/admin/users" element={<ProtectedRoute/>}>
                    <Route path="/admin/users" element={<UserList/>}/>
                </Route>
                <Route path="/admin/upload" element={<ProtectedRoute/>}>
                    <Route path="/admin/upload" element={<MultiFileUpload/>}/>
                </Route>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </>
    );
}

export default AppRoutes;