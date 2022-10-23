import { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { UserContext } from "../context/User";
import CheckLogIn from "../utils/CheckLogIn";

function PrivateRoute() {
    const user = useContext(UserContext);

    useEffect(() => {
        if (!CheckLogIn()) {
            user.setIsLoggedIn(false);
            console.log("yd", user);
        }
    }, [user]);

    return user?.isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
