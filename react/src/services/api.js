import axios from 'axios';
const api = axios.create({
    baseURL: 'https://www.omdbapi.com/?apikey=ac557b99&'
})

export default api;