import http from "../utils/http-common";
import authHeader from "./security/authHeader";


const getAll = () => {
    return http.get('/utilisateur/find',{headers: authHeader()});
}

const get = (id) => {
    return http.get(`/utilisateur/find/${id}`, {headers: authHeader()});
}

const create = (data) => {
    return http.post('/utilisateur/add',data);
}

const update = (data) => {
    return http.put(`/utilisateur/update`, data);
}

const remove = (id) => {
    return http.delete(`/utilisateur/delete/${id}`);
}

const utilisateurService = {
    getAll,
    get,
    create,
    update,
    remove
};

export default utilisateurService;
