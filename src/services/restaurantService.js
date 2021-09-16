import http from "../utils/http-common";


const getAll = () => {
    return http.get('/restaurant/find');
}

const get = (id) => {
    return http.get(`/restaurant/find/${id}`);
}

const create = (data) => {
    return http.post('/restaurant/add',data);
}

const update = (data) => {
    return http.put(`/restaurant/update`, data);
}

const remove = (id) => {
    return http.delete(`/restaurant/delete/${id}`);
}

const restaurantService = {
    getAll,
    get,
    create,
    update,
    remove
};

export default restaurantService;
