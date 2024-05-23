
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api/v1/crud', 
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getCruds() {
    return apiClient.get('/');
  },
  getCrud(id) {
    return apiClient.get(`/${id}`);
  },
  createCrud(crud) {
    return apiClient.post('/', crud);
  },
  updateCrud(id, crud) {
    return apiClient.put(`/${id}`, crud);
  },
  deleteCrud(id) {
    return apiClient.delete(`/${id}`);
  },
};
