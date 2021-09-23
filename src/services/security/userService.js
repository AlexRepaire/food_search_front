import http from "../../utils/http-common";
import authHeader from "./authHeader";

const getPublicContent = () => {
    return http.get("/all");
};

const getUserBoard = () => {
    return http.get("/user", { headers: authHeader() });
};

const getRestaurantBoard = () => {
    return http.get("/restaurant", { headers: authHeader() });
};

const getAdminBoard = () => {
    return http.get("/admin", { headers: authHeader() });
};

export default {
    getPublicContent,
    getUserBoard,
    getRestaurantBoard,
    getAdminBoard,
};