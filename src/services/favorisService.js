import http from "../utils/http-common";
import authHeader from "./security/authHeader";


const getAll = () => {
    return http.get('/favoris/find', {headers: authHeader()});
}

const get = (id) => {
    return http.get(`/favoris/find/${id}`, {headers: authHeader()});
}

const create = (data) => {
    return http.post('/favoris/add',data, {headers: authHeader()});
}

const update = (data) => {
    return http.put(`/favoris/update`, data, {headers: authHeader()});
}

const remove = (id) => {
    return http.delete(`/favoris/delete/${id}`, {headers: authHeader()});
}

const favorisService = {
    getAll,
    get,
    create,
    update,
    remove
};

export default favorisService;
