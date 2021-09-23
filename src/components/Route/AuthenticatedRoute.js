import React, {useContext} from 'react';
import AuthContext from "../../store/auth-context";
import {Redirect, Route} from "react-router-dom";

const AuthenticatedRoute = ({ path, component }) => {
    const { isAuthenticated } = useContext(AuthContext);

    return isAuthenticated ? (
        <Route exact path={path} component={component} />
    ) : (
        <Redirect to="/home" />
    )
}

export default AuthenticatedRoute;