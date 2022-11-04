import { Navigate, Outlet } from "react-router-dom";
import { LOGIN } from "../../config/routes/paths";
import { useAuthContext } from "../../context/authContext";

const PrivateRoute = () => {
    const {isAuthenticated} = useAuthContext();

    if (!isAuthenticated) {
        return <Navigate to={LOGIN} />
    }
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default PrivateRoute