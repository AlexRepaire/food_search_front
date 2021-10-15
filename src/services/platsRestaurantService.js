import http from "../utils/http-common";
import authHeader from "./security/authHeader";


const getAll = () => {
    return http.get('/platsRestaurant/find');
}

const get = (id) => {
    return http.get(`/platsRestaurant/find/${id}`, {headers:authHeader()});
}

const getListPlats = (id) => {
    return http.get(`/platsRestaurant/findListPlats/${id}`, {headers:authHeader()});
}

const create = (data) => {
    return http.post('/platsRestaurant/add',data, {headers:authHeader()});
}

const update = (data) => {
    return http.put(`/platsRestaurant/update`, data, {headers:authHeader()});
}

const remove = (id) => {
    return http.delete(`/platsRestaurant/delete/${id}`, {headers:authHeader()});
}

const platsRestaurantService = {
    getAll,
    get,
    create,
    update,
    remove,
    getListPlats
};

export default platsRestaurantService;
