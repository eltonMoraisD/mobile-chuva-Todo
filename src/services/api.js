import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.43.47:8081',
});

export default api;
