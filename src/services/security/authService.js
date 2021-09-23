import http from "../../utils/http-common";
import {getItem} from "../LocalStorage/localeStorage";

const register = (data) => {
    return http.post("/auth/signup", data);
};

/**
 * Ajouter context lors de la connexion
 * et ajout local storage si l'utilisateur le desir
 *
 */

const login = (data) => {
    return http.post("/auth/signin", data)
};

const getCurrentUser = () => {
    return JSON.parse(getItem("user"));
};

export default {
    register,
    login,
    getCurrentUser,
};