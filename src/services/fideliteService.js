import http from "../utils/http-common";
import authHeader from "./security/authHeader";


const getAll = () => {
    return http.get('/fidelite/find');
}

const get = (id) => {
    return http.get(`/fidelite/find/${id}`);
}

const create = (data) => {
    return http.post('/fidelite/add',data, {headers: authHeader()});
}

const update = (data) => {
    return http.put(`/fidelite/update`, data);
}

const remove = (id) => {
    return http.delete(`/fidelite/delete/${id}`);
}

const fideliteService = {
    getAll,
    get,
    create,
    update,
    remove
};

export default fideliteService;
