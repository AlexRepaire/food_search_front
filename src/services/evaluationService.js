import http from "../utils/http-common";


const getAll = () => {
    return http.get('/evaluation/find');
}

const get = (id) => {
    return http.get(`/evaluation/find/${id}`);
}

const create = (data) => {
    return http.post('/evaluation/add',data);
}

const update = (data) => {
    return http.put(`/evaluation/update`, data);
}

const remove = (id) => {
    return http.delete(`/evaluation/delete/${id}`);
}

const evaluationService = {
    getAll,
    get,
    create,
    update,
    remove
};

export default evaluationService;
