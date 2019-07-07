import axios from 'axios';
var clientApi = axios.create({
    baseURL: window.location.origin
});
export function signIn(user) {
    return clientApi.post("/api/signin", user);
}
//# sourceMappingURL=api.js.map