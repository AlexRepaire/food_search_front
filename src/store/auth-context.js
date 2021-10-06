import React, {useState} from "react";
import {addItem, getItem, removeItem} from "../services/LocalStorage/localeStorage";
import jwtDecode from "jwt-decode";

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    user: {},
    loginUser: (user,token) => {},
    logout: () => {},
});

export const AuthContextProvider = (props) => {
    const initialToken = getItem('token');
    const initialUser = getItem('user');

    const [token, setToken] = useState(initialToken);
    const [user, setUser] = useState(initialUser);
    const userIsLoggedIn = !!token;

    const loginHandler = (user,token) => {
        setToken(token);
        setUser(user);
        addItem("user", JSON.stringify(user));
        addItem("token", JSON.stringify(token));

    };

    const logoutHandler = () => {
        setToken(null);
        setUser(null);
        removeItem("user");
        removeItem("token");
    };

    const calculateRemainingTime = () => {
        const exp = jwtDecode(token.exp);
        return exp * 1000 > new Date().getTime();
    };

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        user: user,
        loginUser: loginHandler,
        logout: logoutHandler
    };

    return <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
};

export default AuthContext;