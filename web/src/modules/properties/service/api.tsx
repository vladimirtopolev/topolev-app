import axios from 'axios';
import {Property} from '../schema/models';


const API_URL_PREFIX = '/api';

const clientApi = axios.create({
    baseURL: window.location.origin
});

// MODULE TABLE
const MODULE_TABLE_DOMAIN = 'properties';

export function getProperties(): Promise<any> {
    return clientApi.get(`/api/${MODULE_TABLE_DOMAIN}`);
}

export function updateProperties(properties: any): Promise<any> {
    return clientApi.put(`/api/${MODULE_TABLE_DOMAIN}`, properties);
}
