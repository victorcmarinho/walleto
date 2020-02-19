import axios from 'axios';

const api = axios.create({
    baseURL: 'https://walleto.herokuapp.com/',
});

export default api;
