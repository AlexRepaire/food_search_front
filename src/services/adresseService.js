import http from "../utils/http-common";


const getAll = () => {
    return http.get('/adresse/find');
}

const get = (id) => {
    return http.get(`/adresse/find/${id}`);
}

const create = (data) => {
    return http.post('/adresse/add',data);
}

const update = (data) => {
    return http.put(`/adresse/update`, data);
}

const remove = (id) => {
    return http.delete(`/adresse/delete/${id}`);
}

const adresseService = {
    getAll,
    get,
    create,
    update,
    remove
};

export default adresseService;
