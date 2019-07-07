import axios from 'axios';
export function setAuthToken(token) {
    if (token) {
        axios.defaults.headers.common['Authorization'] = "JWT " + token;
    }
    else {
        delete axios.defaults.headers.common['Authorization'];
    }
}
//# sourceMappingURL=index.js.map