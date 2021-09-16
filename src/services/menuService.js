import http from "../utils/http-common";


const getAll = () => {
    return http.get('/menu/find');
}

const get = (id) => {
    return http.get(`/menu/find/${id}`);
}

const create = (data) => {
    return http.post('/menu/add',data);
}

const update = (data) => {
    return http.put(`/menu/update`, data);
}

const remove = (id) => {
    return http.delete(`/menu/delete/${id}`);
}

const menuService = {
    getAll,
    get,
    create,
    update,
    remove
};

export default menuService;
