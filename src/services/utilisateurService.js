import http from "../utils/http-common";
import authHeader from "./security/authHeader";


const getAll = () => {
    return http.get('/utilisateur/find',{headers: authHeader()});
}

const get = (id) => {
    return http.get(`/utilisateur/find/${id}`, {headers: authHeader()});
}

const create = (data) => {
    return http.post('/utilisateur/add',data,{headers: authHeader()});
}

const update = (data) => {
    return http.put(`/utilisateur/update`, data,{headers: authHeader()});
}

const remove = (id) => {
    return http.delete(`/utilisateur/delete/${id}`,{headers: authHeader()});
}

const utilisateurService = {
    getAll,
    get,
    create,
    update,
    remove
};

export default utilisateurService;
