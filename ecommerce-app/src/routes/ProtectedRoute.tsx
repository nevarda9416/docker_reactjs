import {FC} from "react";
import {Outlet, Navigate} from "react-router-dom";
import {useAppSelector} from "../redux/hooks.ts";

const ProtectedRoute: FC = () => {
    const isLoggedIn = useAppSelector((state) => state.authReducer.isLoggedIn);
    return isLoggedIn ? <Outlet/> : <Navigate to="/"/>;
};
export default ProtectedRoute;