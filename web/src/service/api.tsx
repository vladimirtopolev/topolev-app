import axios from 'axios';


const API_URL_PREFIX = '/api';

const clientApi = axios.create({
    baseURL: window.location.origin
});

// UPLOAD IMAGE
export function uploadImage(body: any) {
    return clientApi.post(`${API_URL_PREFIX}/image-upload`, body);
}
