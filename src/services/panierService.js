import http from "../utils/http-common";
import authHeader from "./security/authHeader";


const getAll = () => {
    return http.get('/panier/find', {headers: authHeader()});
}

const get = (id) => {
    return http.get(`/panier/find/${id}`, {headers: authHeader()});
}

const create = (data) => {
    return http.post('/panier/add',data, {headers: authHeader()});
}

const update = (data) => {
    return http.put(`/panier/update`, data, {headers: authHeader()});
}

const remove = (id) => {
    return http.delete(`/panier/delete/${id}`, {headers: authHeader()});
}

const panierService = {
    getAll,
    get,
    create,
    update,
    remove
};

export default panierService;
