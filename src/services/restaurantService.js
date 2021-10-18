import http from "../utils/http-common";
import authHeader from "./security/authHeader";


const getAll = () => {
    return http.get('/restaurant/find', {headers: authHeader()});
}

const get = (id) => {
    return http.get(`/restaurant/find/${id}`,{headers: authHeader()});
}

const getRestByIdUti = (id) => {
    return http.get(`/restaurant/findByIdUti/${id}`, {headers: authHeader()});
};

const getRestByVille = (ville) => {
    return http.get(`/restaurant/findListByVille/${ville}`, {headers: authHeader()});
};

const create = (data) => {
    return http.post('/restaurant/add',data, {headers: authHeader()});
}

const update = (data) => {
    return http.put(`/restaurant/update`, data);
}

const remove = (id) => {
    return http.delete(`/restaurant/delete/${id}`);
}

const restaurantService = {
    getAll,
    get,
    create,
    update,
    remove,
    getRestByIdUti,
    getRestByVille
};

export default restaurantService;
