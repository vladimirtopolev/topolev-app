import * as api from '../../service/api';
import {asyncActionCreator} from '../../../../utilities/asyncActions';
import {
    table,
    tableHeaders,
    tableRows,
    NormalizedTableHeadersResponse,
    NormalizedTableResponse,
    NormalizedTableRowsResponse
} from '../../schema/table';
import {normalize} from 'normalizr';
import {GET_TABLE_ACTION, GET_TABLE_HEADERS_ACTION, GET_TABLE_ROW_ACTION, GET_TABLE_ROWS_ACTION} from './types';

export const MODULE_NAME = 'tableModule';

export type Params = {
    moduleName: string,
    tableName: string,
    rowId?: string,
}

export function getTable(tableName: string) {
    return asyncActionCreator<typeof GET_TABLE_ACTION, NormalizedTableResponse, Params>(
        GET_TABLE_ACTION,
        api.getTable(tableName)
            .then(response => {
                return normalize(response.data, table);
            }),
        {tableName, moduleName: MODULE_NAME}
    );
}

export function getTableHeaders(tableName: string) {
    return asyncActionCreator<typeof GET_TABLE_HEADERS_ACTION, NormalizedTableHeadersResponse, Params>(
        GET_TABLE_HEADERS_ACTION,
        api.getTableHeaders(tableName)
            .then(response => {
                console.log('NORM', response, normalize(response.data, tableHeaders));
                return normalize(response.data, tableHeaders);
            }),
        {tableName, moduleName: MODULE_NAME}
    );
}

export function getTableRows(tableName: string) {
    return asyncActionCreator<typeof GET_TABLE_ROWS_ACTION, NormalizedTableRowsResponse, Params>(
        GET_TABLE_ROWS_ACTION,
        api.getTableRows(tableName)
            .then(response => {
                return normalize(response.data, table);
            }),
        {tableName, moduleName: MODULE_NAME}
    );
}

export function getTableRow(tableName: string, rowId: string) {
    return asyncActionCreator<typeof GET_TABLE_ROW_ACTION, NormalizedTableRowsResponse, Params>(
        GET_TABLE_ROW_ACTION,
        api.getTableRow(tableName, rowId)
            .then(response => {
                console.log(response.data);
                return normalize(response.data, table);
            }),
        {tableName, rowId, moduleName: MODULE_NAME}
    );
}
