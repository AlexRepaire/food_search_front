import http from "../utils/http-common";
import authHeader from "./security/authHeader";


const getAll = () => {
    return http.get('/categoriePlat/find', {headers:authHeader()});
}

const get = (id) => {
    return http.get(`/categoriePlat/find/${id}`, {headers:authHeader()});
}

const create = (data) => {
    return http.post('/categoriePlat/add',data, {headers:authHeader()});
}

const update = (data) => {
    return http.put(`/categoriePlat/update`, data, {headers:authHeader()});
}

const remove = (id) => {
    return http.delete(`/categoriePlat/delete/${id}`, {headers:authHeader()});
}

const categoriePlatService = {
    getAll,
    get,
    create,
    update,
    remove
};

export default categoriePlatService;
