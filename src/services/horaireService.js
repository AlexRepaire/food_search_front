import http from "../utils/http-common";
import authHeader from "./security/authHeader";


const getAll = () => {
    return http.get('/horaires/find');
}

const get = (id) => {
    return http.get(`/horaires/find/${id}`);
}

const create = (data) => {
    return http.post('/horaires/add',data, {headers: authHeader()});
}

const update = (data) => {
    return http.put(`/horaires/update`, data);
}

const remove = (id) => {
    return http.delete(`/horaires/delete/${id}`);
}

const horaireService = {
    getAll,
    get,
    create,
    update,
    remove
};

export default horaireService;
