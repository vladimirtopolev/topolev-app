import axios from 'axios';

const clientApi = axios.create({
    baseURL: window.location.origin
});

// MODULE TABLE
const MODULE_TABLE_DOMAIN = 'tables';

export function getTable(tableName: string): Promise<any> {
    return clientApi.get(`/api/${MODULE_TABLE_DOMAIN}/${tableName}`);
}

export function getTableRow(tableName: string, rowId: string) {
    return clientApi.get(`/api/${MODULE_TABLE_DOMAIN}/${tableName}/rows/${rowId}`);
}
