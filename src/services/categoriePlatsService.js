import http from "../utils/http-common";


const getAll = () => {
    return http.get('/categoriePlat/find');
}

const get = (id) => {
    return http.get(`/categoriePlat/find/${id}`);
}

const create = (data) => {
    return http.post('/categoriePlat/add',data);
}

const update = (data) => {
    return http.put(`/categoriePlat/update`, data);
}

const remove = (id) => {
    return http.delete(`/categoriePlat/delete/${id}`);
}

const categoriePlatService = {
    getAll,
    get,
    create,
    update,
    remove
};

export default categoriePlatService;
