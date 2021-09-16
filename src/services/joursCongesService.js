import http from "../utils/http-common";


const getAll = () => {
    return http.get('/joursConge/find');
}

const get = (id) => {
    return http.get(`/joursConge/find/${id}`);
}

const create = (data) => {
    return http.post('/joursConge/add',data);
}

const update = (data) => {
    return http.put(`/joursConge/update`, data);
}

const remove = (id) => {
    return http.delete(`/joursConge/delete/${id}`);
}

const joursCongesService = {
    getAll,
    get,
    create,
    update,
    remove
};

export default joursCongesService;
