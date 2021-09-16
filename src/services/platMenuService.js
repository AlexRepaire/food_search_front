import http from "../utils/http-common";


const getAll = () => {
    return http.get('/platMenu/find');
}

const get = (id) => {
    return http.get(`/platMenu/find/${id}`);
}

const create = (data) => {
    return http.post('/platMenu/add',data);
}

const update = (data) => {
    return http.put(`/platMenu/update`, data);
}

const remove = (id) => {
    return http.delete(`/platMenu/delete/${id}`);
}

const platMenuService = {
    getAll,
    get,
    create,
    update,
    remove
};

export default platMenuService;
