import axios from 'axios';

const api = {
    user: {
        login: (credentials) =>
            axios.post('/api/auth', { credentials }).then(res => res.data.user)
    }
};

export default api;