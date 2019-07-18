import axios from 'axios';


const API_URL_PREFIX = '/api';

const clientApi = axios.create({
    baseURL: window.location.origin
});

// MODULE TABLE
const MODULE_TABLE_DOMAIN = 'properties';

export function getProperies(): Promise<any> {
    return clientApi.get(`/api/${MODULE_TABLE_DOMAIN}`);
}
