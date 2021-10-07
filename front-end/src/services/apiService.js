import api from './api';

const get = (id) => {
  return api.get(`/cds/list/${id}`);
};

const create = (data) => {
  return api.post("/cds", data);
};

const update = (id, data) => {
  return api.put(`/cds/update/${id}`, data);
};

const remove = (id) => {
  return api.delete(`/cds/delete/${id}`);
};

const apiService = {
  get,
  create,
  update,
  remove
};

export default apiService;