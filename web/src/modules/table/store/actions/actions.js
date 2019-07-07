import * as api from '../../service/api';
import { asyncActionCreator } from '../../../../utilities/asyncActions';
import { table, tableHeaders, tableRows } from '../../schema/table';
import { normalize } from 'normalizr';
import { GET_TABLE_ACTION, GET_TABLE_HEADERS_ACTION, GET_TABLE_ROW_ACTION, GET_TABLE_ROWS_ACTION } from './types';
export var MODULE_NAME = 'tableModule';
export function getTable(tableName) {
    return asyncActionCreator(GET_TABLE_ACTION, api.getTable(tableName)
        .then(function (response) {
        return normalize(response.data, table);
    }), { tableName: tableName, moduleName: MODULE_NAME });
}
export function getTableHeaders(tableName) {
    return asyncActionCreator(GET_TABLE_HEADERS_ACTION, api.getTableHeaders(tableName)
        .then(function (response) {
        console.log('NORM', response, normalize(response.data, tableHeaders));
        return normalize(response.data, tableHeaders);
    }), { tableName: tableName, moduleName: MODULE_NAME });
}
export function getTableRows(tableName) {
    return asyncActionCreator(GET_TABLE_ROWS_ACTION, api.getTableRows(tableName)
        .then(function (response) {
        return normalize(response.data, tableRows);
    }), { tableName: tableName, moduleName: MODULE_NAME });
}
export function getTableRow(tableName, rowId) {
    return asyncActionCreator(GET_TABLE_ROW_ACTION, api.getTableRow(tableName, rowId)
        .then(function (response) {
        return normalize(response.data, tableRows);
    }), { tableName: tableName, rowId: rowId, moduleName: MODULE_NAME });
}
//# sourceMappingURL=actions.js.map