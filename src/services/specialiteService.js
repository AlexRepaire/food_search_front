import http from "../utils/http-common";
import authHeader from "./security/authHeader";


const getAll = () => {
    return http.get('/specialite/find');
}

const get = (id) => {
    return http.get(`/specialite/find/${id}`, {headers: authHeader()});
}

const create = (data) => {
    return http.post('/specialite/add',data);
}

const update = (data) => {
    return http.put(`/specialite/update`, data);
}

const remove = (id) => {
    return http.delete(`/specialite/delete/${id}`);
}

const specialiteService = {
    getAll,
    get,
    create,
    update,
    remove
};

export default specialiteService;
