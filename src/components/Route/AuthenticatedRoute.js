import React, {useContext, useEffect} from 'react';
import AuthContext from "../../store/auth-context";
import {Redirect, Route} from "react-router-dom";

const AuthenticatedRoute = ({ path, component, roleRequired }) => {
    const { isLoggedIn, user } = useContext(AuthContext);
    const userData = new Object(JSON.parse(user));

    return isLoggedIn && userData.role === roleRequired ? (
        <Route exact path={path} component={component} />
    ) : (
        <Redirect to="/home" />
    )
}

export default AuthenticatedRoute;