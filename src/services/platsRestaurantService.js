import http from "../utils/http-common";


const getAll = () => {
    return http.get('/platsRestaurant/find');
}

const get = (id) => {
    return http.get(`/platsRestaurant/find/${id}`);
}

const create = (data) => {
    return http.post('/platsRestaurant/add',data);
}

const update = (data) => {
    return http.put(`/platsRestaurant/update`, data);
}

const remove = (id) => {
    return http.delete(`/platsRestaurant/delete/${id}`);
}

const platsRestaurantService = {
    getAll,
    get,
    create,
    update,
    remove
};

export default platsRestaurantService;
