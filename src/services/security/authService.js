import http from "../../utils/http-common";
import {getItem} from "../LocalStorage/localeStorage";

const register = (signupRequest) => {
    return http.post("/auth/signup", signupRequest);
};

/**
 * Ajouter context lors de la connexion
 * et ajout local storage si l'utilisateur le desir
 *
 */

const login = (loginRequest) => {
    return http.post("/auth/signin", loginRequest)
};

const getCurrentUser = () => {
    return JSON.parse(getItem("user"));
};

export default {
    register,
    login,
    getCurrentUser,
};