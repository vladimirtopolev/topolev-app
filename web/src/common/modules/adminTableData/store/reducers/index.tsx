import {Reducer} from 'redux';
import {AsyncAction, AsyncActionStatus, SucceededAsyncAction} from '../../../../../utilities/asyncActions';
import {GET_ADMIN_TABLE_DATA} from '../actions/types';
import {NormalizedTableResponse} from '../../../../../modules/table/schema/table';
import {Params} from '../../../../../modules/table/store/actions/actions';
import * as _ from 'lodash';

type GetTableActionSuccess = SucceededAsyncAction<typeof GET_ADMIN_TABLE_DATA, NormalizedTableResponse, Params>;

const adminTableData: Reducer<any, AsyncAction<any, any>> = (state = {}, action) => {
    if (action.type === GET_ADMIN_TABLE_DATA) {
        switch (action.status) {
            case AsyncActionStatus.SUCCEEDED:
                return requestTableSuccess(state, action as GetTableActionSuccess);
            default:
                return state;
        }
    }
    return state;
};

export default adminTableData;

const requestTableSuccess = (state: any, action: GetTableActionSuccess) => {
    const {entities} = action.payload;
    const {tableName} = action.params;
    return {
        ...state,
        [tableName]: {
            ...entities,
            headerIds: entities.table[tableName].headers,
            rowIds: entities.table[tableName].rows
        }
    };
};

//selectors
export const getTable = (state: any, tableName: string) => state[tableName];

export const getTableMeta = (state: any, tableName: string) => {
    const tableMeta = getTable(state, tableName);
    return tableMeta
        ? tableMeta.table[tableName]
        : {
            name: tableName,
            title: ''
        };
};
export const getTableRows = (state: any, tableName: string) => {
    const tableMeta = getTable(state, tableName);
    console.log('--->', state, tableMeta)
    return _.get(tableMeta, 'rowIds', [])
        .map((rowKey: any) => tableMeta.rows[rowKey])
        .map((row: any) => ({
            ...row,
            cells: row.cells.map((cellKey: any) => {
                const cell = tableMeta.cells[cellKey];
                return {
                    ...cell,
                    type: tableMeta.headers[cell.header]
                };
            })
        }));
};
