import http from "../utils/http-common";

const url = `${http}/favoris`;

const getAll = () => {
    return url.get('/find');
}

const get = (id) => {
    return url.get(`/find/${id}`);
}

const create = (data) => {
    return url.post('/add',data);
}

const update = (data) => {
    return url.put(`/update`, data);
}

const remove = (id) => {
    return url.delete(`/delete/${id}`);
}

const favorisService = {
    getAll,
    get,
    create,
    update,
    remove
};

export default favorisService;
