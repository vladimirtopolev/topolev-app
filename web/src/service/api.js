import axios from 'axios';
var API_URL_PREFIX = '/api';
var clientApi = axios.create({
    baseURL: window.location.origin
});
// UPLOAD IMAGE
export function uploadImage(body) {
    return clientApi.post(API_URL_PREFIX + "/image-upload", body);
}
//# sourceMappingURL=api.js.map