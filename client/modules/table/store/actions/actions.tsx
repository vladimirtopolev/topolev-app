import * as api from '../../service/api';
import {asyncActionCreator, AsyncAction} from '../../../../utilities/asyncActions';
import {
    table,
    headers,
    rows,
    NormalizedTableHeadersResponse,
    NormalizedTableResponse,
    NormalizedTableRowsResponse
} from '../../schema/table';
import {normalize} from 'normalizr';
import {GET_TABLE_ACTION, GET_TABLE_HEADERS_ACTION, GET_TABLE_ROWS_ACTION} from './types';
import {MODULE_NAME} from '../../async-component';

export type Params = {
    tableName: string
    moduleName: string
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
                return normalize(response.data, headers);
            }),
        {tableName, moduleName: MODULE_NAME}
    );
}

export function getTableRows(tableName: string) {
    return asyncActionCreator<typeof GET_TABLE_ROWS_ACTION, NormalizedTableRowsResponse, Params>(
        GET_TABLE_ROWS_ACTION,
        api.getTableRows(tableName)
            .then(response => {
                return normalize(response.data, rows);
            }),
        {tableName, moduleName: MODULE_NAME}
    );
}
