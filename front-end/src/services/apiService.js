import api from './api';

const get = () => {
  return api.get(`/cds/list/`);
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