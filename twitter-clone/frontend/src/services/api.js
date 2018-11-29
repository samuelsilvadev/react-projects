import axios from 'axios';

const API = axios.create({
	baseURL: 'http://127.0.0.1:9001',
});

export default API;
