import http from "../utils/http-common";
import authHeader from "./security/authHeader";


const getAll = () => {
    return http.get('/panier/find', {headers: authHeader()});
}

const get = (id) => {
    return http.get(`/panier/find/${id}`);
}

const create = (data) => {
    return http.post('/panier/add',data);
}

const update = (data) => {
    return http.put(`/panier/update`, data);
}

const remove = (id) => {
    return http.delete(`/panier/delete/${id}`);
}

const panierService = {
    getAll,
    get,
    create,
    update,
    remove
};

export default panierService;
