import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8070',

});

export default instance;