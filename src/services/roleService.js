import http from "../utils/http-common";


const getAll = () => {
    return http.get('/role/find');
}

const get = (id) => {
    return http.get(`/role/find/${id}`);
}

const create = (data) => {
    return http.post('/role/add',data);
}

const update = (data) => {
    return http.put(`/role/update`, data);
}

const remove = (id) => {
    return http.delete(`/role/delete/${id}`);
}

const roleService = {
    getAll,
    get,
    create,
    update,
    remove
};

export default roleService;
