import axios from 'axios'

axios.defaults.baseURL='http://localhost:3333';
axios.defaults.withCredentials = true

axios.interceptors.request.use(config => {
    if (config.method === 'POST' || config.method === 'PATCH' || config.method === 'PUT' || config.method === 'GET')
      config.headers['Content-Type'] = 'application/json;charset=utf-8';
  
    const accessToken = sessionStorage.getItem("JWT")
    if (accessToken) config.headers.Authorization = 'Bearer ' + accessToken;
  
    return config;
  });