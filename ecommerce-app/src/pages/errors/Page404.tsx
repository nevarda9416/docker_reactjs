import {useNavigate} from "react-router-dom";
import "../../assets/Page500.scss";

const Page404 = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate("/");
    };
    return (
        <div className="section">
            <h1 className="error">404</h1>
            <div className="page">
                Oh snap!!! The page you are looking for is not found.
            </div>
            <div>
                <a className="button" onClick={handleBack}>
                    Back to home
                </a>
            </div>
        </div>
    );
};
export default Page404;