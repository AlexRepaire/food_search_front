import http from "../utils/http-common";


const getAll = () => {
    return http.get('/favoris/find');
}

const get = (id) => {
    return http.get(`/favoris/find/${id}`);
}

const create = (data) => {
    return http.post('/favoris/add',data);
}

const update = (data) => {
    return http.put(`/favoris/update`, data);
}

const remove = (id) => {
    return http.delete(`/favoris/delete/${id}`);
}

const favorisService = {
    getAll,
    get,
    create,
    update,
    remove
};

export default favorisService;
