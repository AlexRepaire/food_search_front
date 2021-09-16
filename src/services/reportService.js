import http from "../utils/http-common";


const getAll = () => {
    return http.get('/report/find');
}

const get = (id) => {
    return http.get(`/report/find/${id}`);
}

const create = (data) => {
    return http.post('/report/add',data);
}

const update = (data) => {
    return http.put(`/report/update`, data);
}

const remove = (id) => {
    return http.delete(`/report/delete/${id}`);
}

const reportService = {
    getAll,
    get,
    create,
    update,
    remove
};

export default reportService;
