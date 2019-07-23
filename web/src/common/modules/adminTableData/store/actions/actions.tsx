import * as api from '../../service/api';
import {asyncActionCreator} from '../../../../../utilities/asyncActions';
import {GET_ADMIN_TABLE_ROWS_DATA, GET_ADMIN_TABLE_ROW_DATA} from './types';
import {NormalizedTableResponse, table} from '../../../../../modules/table/schema/table';
import {normalize} from 'normalizr';

export function getAdminTableData(tableName: string) {
    return asyncActionCreator<typeof GET_ADMIN_TABLE_ROWS_DATA, NormalizedTableResponse, any>(
        GET_ADMIN_TABLE_ROWS_DATA,
        api.getTable(tableName)
            .then(response => {
                return normalize(response.data, table);
            }),
        {tableName}
    );
}

export function getAdminTableRow(tableName:string, rowId:string) {
    return asyncActionCreator<typeof GET_ADMIN_TABLE_ROW_DATA, NormalizedTableResponse, any>(
        GET_ADMIN_TABLE_ROW_DATA,
        api.getTableRow(tableName, rowId)
            .then(response => {
                const test = normalize(response.data, table);
                console.log('TEST', test);
                return test;
            }),
        {tableName}
    );
}
