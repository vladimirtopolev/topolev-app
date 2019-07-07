import axios from 'axios';
var clientApi = axios.create({
    baseURL: window.location.origin
});
export function signIn(user) {
    return clientApi.post("/api/users/signin", user);
}
//# sourceMappingURL=api.js.map