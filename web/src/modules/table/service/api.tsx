import axios from 'axios';
import {Row} from '../schema/models';


const API_URL_PREFIX = '/api';

const clientApi = axios.create({
    baseURL: window.location.origin
});

// MODULE TABLE
const MODULE_TABLE_DOMAIN = 'tables';

export function getTable(tableName: string): Promise<any> {
    return clientApi.get(`/api/${MODULE_TABLE_DOMAIN}/${tableName}`);
}

export function getTableHeaders(tableName: string) {
    console.log('URLLLS --->', window.location.origin, window.location);
    console.log(`/api/${MODULE_TABLE_DOMAIN}/${tableName}/headers`);
    console.log(tableName)
    return clientApi.get(`/api/${MODULE_TABLE_DOMAIN}/${tableName}/headers`);
}

export function getTableRows(tableName: string) {
    return clientApi.get(`/api/${MODULE_TABLE_DOMAIN}/${tableName}/rows`);
}

export function getTableRow(tableName: string, rowId: string) {
    return clientApi.get(`/api/${MODULE_TABLE_DOMAIN}/${tableName}/rows/${rowId}`);
}

export function saveTableRow(tableName: string, row: Row) {
    return clientApi.post(`/api/${MODULE_TABLE_DOMAIN}/${tableName}/rows`, row);
}

export function updateTableRow(tableName: string, idRow: string, row: Row) {
    return clientApi.put(`/api/${MODULE_TABLE_DOMAIN}/${tableName}/rows/${idRow}`, row);

}

export function deleteTableRow(tableName: string, idRow: string) {
    return clientApi.delete(`/api/${MODULE_TABLE_DOMAIN}/${tableName}/rows/${idRow}`);
}

export function uploadImage(body: any) {
    return clientApi.post(`/api/cloudinary/image-upload`, body);
}
