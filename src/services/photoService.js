import http from "../utils/http-common";


const getAll = () => {
    return http.get('/photo/find');
}

const get = (id) => {
    return http.get(`/photo/find/${id}`);
}

const create = (data) => {
    return http.post('/photo/add',data);
}

const update = (data) => {
    return http.put(`/photo/update`, data);
}

const remove = (id) => {
    return http.delete(`/photo/delete/${id}`);
}

const photoService = {
    getAll,
    get,
    create,
    update,
    remove
};

export default photoService;
