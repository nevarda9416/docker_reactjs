import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("../pages/Home"));
const AllProducts = React.lazy(() => import("../pages/AllProducts"));
const AllCategories = React.lazy(() => import("../pages/AllCategories"));
const SingleProduct = React.lazy(() => import("../pages/SingleProduct"));
const SingleCategory = React.lazy(() => import("../pages/SingleCategory"));
const ProtectedRoute = React.lazy(() => import("./ProtectedRoute"));
const Wishlist = React.lazy(() => import("../pages/Wishlist"));
const Profile = React.lazy(() => import("../pages/Profile"));
const UserList = React.lazy(() => import("../pages/admin/UserList"));
const MultiFileUpload = React.lazy(() => import("../pages/admin/MultiFileUpload"));
const Page404 = React.lazy(() => import("../pages/errors/Page404"));

const AppRoutes = () => {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<AllProducts />} />
                    <Route path="/categories" element={<AllCategories />} />
                    <Route path="/product/:productID" element={<SingleProduct />} />
                    <Route path="/category/:slug" element={<SingleCategory />} />
                    <Route path="/wishlist" element={<ProtectedRoute />}>
                        <Route path="/wishlist" element={<Wishlist />} />
                    </Route>
                    <Route path="/account" element={<ProtectedRoute />}>
                        <Route path="/account" element={<Profile />} />
                    </Route>
                    <Route path="/admin/users" element={<ProtectedRoute />}>
                        <Route path="/admin/users" element={<UserList />} />
                    </Route>
                    <Route path="/admin/upload" element={<ProtectedRoute />}>
                        <Route path="/admin/upload" element={<MultiFileUpload />} />
                    </Route>
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </Suspense>
        </>
    );
}

export default AppRoutes;