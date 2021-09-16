import http from "../utils/http-common";


const getAll = () => {
    return http.get('/commande/find');
}

const get = (id) => {
    return http.get(`/commande/find/${id}`);
}

const create = (data) => {
    return http.post('/commande/add',data);
}

const update = (data) => {
    return http.put(`/commande/update`, data);
}

const remove = (id) => {
    return http.delete(`/commande/delete/${id}`);
}

const commandeService = {
    getAll,
    get,
    create,
    update,
    remove
};

export default commandeService;
