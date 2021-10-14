import http from "../utils/http-common";
import authHeader from "./security/authHeader";


const getAll = () => {
    return http.get('/message/find',{headers: authHeader()});
}

const get = (id) => {
    return http.get(`/message/find/${id}`,{headers: authHeader()});
}

const create = (data) => {
    return http.post('/message/add',data,{headers: authHeader()});
}

const update = (data) => {
    return http.put(`/message/update`, data,{headers: authHeader()});
}

const remove = (id) => {
    return http.delete(`/message/delete/${id}`,{headers: authHeader()});
}

const messageService = {
    getAll,
    get,
    create,
    update,
    remove
};

export default messageService;
