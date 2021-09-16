import http from "../utils/http-common";


const getAll = () => {
    return http.get('/message/find');
}

const get = (id) => {
    return http.get(`/message/find/${id}`);
}

const create = (data) => {
    return http.post('/message/add',data);
}

const update = (data) => {
    return http.put(`/message/update`, data);
}

const remove = (id) => {
    return http.delete(`/message/delete/${id}`);
}

const messageService = {
    getAll,
    get,
    create,
    update,
    remove
};

export default messageService;
