import axios from 'axios';
var API_URL_PREFIX = '/api';
var clientApi = axios.create({
    baseURL: window.location.origin
});
// MODULE TABLE
var MODULE_TABLE_DOMAIN = 'tables';
export function getTable(tableName) {
    return clientApi.get("/api/" + MODULE_TABLE_DOMAIN + "/" + tableName);
}
export function getTableHeaders(tableName) {
    return clientApi.get("/api/" + MODULE_TABLE_DOMAIN + "/" + tableName + "/headers");
}
export function getTableRows(tableName) {
    return clientApi.get("/api/" + MODULE_TABLE_DOMAIN + "/" + tableName + "/rows");
}
export function getTableRow(tableName, rowId) {
    return clientApi.get("/api/" + MODULE_TABLE_DOMAIN + "/" + tableName + "/rows/" + rowId);
}
export function updateCells(tableName, cells) {
    return clientApi.put("/api/" + MODULE_TABLE_DOMAIN + "/" + tableName + "/cells", cells);
}
export function saveTableRow(tableName, row) {
    return clientApi.post("/api/" + MODULE_TABLE_DOMAIN + "/" + tableName + "/rows", row);
}
export function updateTableRow(tableName, idRow, row) {
    return clientApi.put("/api/" + MODULE_TABLE_DOMAIN + "/" + tableName + "/rows/" + idRow, row);
}
export function deleteTableRow(tableName, idRow) {
    return clientApi.delete("/api/" + MODULE_TABLE_DOMAIN + "/" + tableName + "/rows/" + idRow);
}
//# sourceMappingURL=api.js.map