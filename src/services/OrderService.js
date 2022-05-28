import http from "../http-common";

const getAll = () => {
    return http.get("/order");
};

const get = id => {
    return http.get(`/orders/${id}`);
};

const create = data => {
    return http.post("/order", data);
};

const update = (id, data) => {
    return http.put(`/orders/${id}`, data);
};

const remove = id => {
    return http.delete(`/orders/${id}`);
};

const removeAll = () => {
    return http.delete(`/orders`);
};

const findByTitle = title => {
    return http.get(`/orders?title=${title}`);
};
const createCustomer = (data) => {
  return http.post("/customer", data);
};

const Orderservice = {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByTitle,
    createCustomer
};

export default Orderservice;