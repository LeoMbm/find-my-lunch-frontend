import axios from 'axios'

axios.defaults.baseURL='http://localhost:3333';
axios.defaults.withCredentials = true
axios.defaults.headers.common = `Bearer ${sessionStorage.getItem('JWT')}`;

axios.interceptors.request.use(config => {
    if (config.method === 'POST' || config.method === 'PATCH' || config.method === 'PUT')
    config.headers['Content-Type'] = 'application/json;charset=utf-8';

    config.headers.Authorization = `Bearer ${sessionStorage.getItem('JWT')}`;

  return config;
});
  