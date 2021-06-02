import axios from 'axios';

const instance = axios.create({
    baseURL:'server url put here'
})

export default instance;