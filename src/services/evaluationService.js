import http from "../utils/http-common";
import authHeader from "./security/authHeader";


const getAll = () => {
    return http.get('/evaluation/find');
}

const get = (id) => {
    return http.get(`/evaluation/find/${id}`,{headers: authHeader()});
}

const create = (data) => {
    return http.post('/evaluation/add',data,{headers: authHeader()});
}

const createAndReturn = (data) => {
    return http.post('/evaluation/addAndReturn',data,{headers: authHeader()});
}

const update = (data) => {
    return http.put(`/evaluation/update`, data,{headers: authHeader()});
}

const remove = (id) => {
    return http.delete(`/evaluation/delete/${id}`,{headers: authHeader()});
}

const evaluationService = {
    getAll,
    get,
    create,
    update,
    remove,
    createAndReturn
};

export default evaluationService;
