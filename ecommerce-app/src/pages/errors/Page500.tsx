import {useNavigate} from "react-router-dom";

const Page500 = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate("/");
    };
    return (
        <div className="section">
            <h1 className="error">500</h1>
            <div className="page">
                Oh snap!!! You don't have permission to access this route.
            </div>
            <div>
                <a className="button" onClick={handleBack}>
                    Back to home
                </a>
            </div>
        </div>
    );
};
export default Page500;