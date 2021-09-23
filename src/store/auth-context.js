import React, {useState} from "react";
import {addItem, getItem, removeItem} from "../services/LocalStorage/localeStorage";
import jwtDecode from "jwt-decode";

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    user: {},
    login: (token) => {},
    logout: () => {},
});

export const AuthContextProvider = (props) => {
    const initialToken = getItem('token');
    const initialUser = getItem('user');

    const [token, setToken] = useState(initialToken);
    const [user, setUser] = useState(initialUser);
    const userIsLoggedIn = !!token;

    const loginHandler = (data) => {
        setToken(data.token);
        setUser(data.user);
        //addItem("user", JSON.stringify(user));
        //addItem("token", JSON.stringify(token));
    };

    const logoutHandler = () => {
        setToken(null);
        setUser(null);
        //removeItem("user");
        //removeItem("token");
    };

    /**
     * VERIFIER LE TRUE OU FALSE DU TOKEN
     *
     * @param token
     * @returns {boolean}
     */

    const tokenIsValid = token => {
        const { exp } = jwtDecode(token);
        return exp * 1000 > new Date().getTime();
    };

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        user: user,
        login: loginHandler,
        logout: logoutHandler
    };

    return <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
};

export default AuthContext;