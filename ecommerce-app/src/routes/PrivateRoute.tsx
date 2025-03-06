import {useContext} from "react";
import {UserContext} from "../context/UserContext";
import Page500 from "../pages/errors/Page500";

const PrivateRoute = (props: { children: any; }) => {
    const {user} = useContext(UserContext);
    if (user && !user.auth) {
        return (
            <>
                <Page500/>
            </>
        );
    }
    return <>{props.children}</>;
};
export default PrivateRoute;