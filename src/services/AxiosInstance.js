import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.mymemory.translated.net/',
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' },
});

export default instance;
