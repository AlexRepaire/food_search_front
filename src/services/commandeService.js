import http from "../utils/http-common";
import authHeader from "./security/authHeader";


const getAll = () => {
    return http.get('/commande/find');
}

const get = (id) => {
    return http.get(`/commande/find/${id}`);
}

const getByRest = (id) => {
    return http.get(`/commande/findListCommandeByRest/${id}`)
}

const create = (data) => {
    return http.post('/commande/add',data, {headers: authHeader()});
}

const update = (data) => {
    return http.put(`/commande/update`, data, {headers: authHeader()});
}

const remove = (id) => {
    return http.delete(`/commande/delete/${id}`, {headers: authHeader()});
}

const commandeService = {
    getAll,
    get,
    create,
    update,
    remove,
    getByRest
};

export default commandeService;
