import {Reducer} from 'redux';
import {GET_TABLE_ACTION, GET_TABLE_HEADERS_ACTION, GET_TABLE_ROWS_ACTION} from '../actions/types';
import {Params} from '../actions/actions';

import {AsyncAction, AsyncActionStatus, SucceededAsyncAction} from '../../../../utilities/asyncActions';
import {NormalizedTableResponse, NormalizedTableHeadersResponse, NormalizedTableRowsResponse} from '../../schema/table';

type GetTableActionSuccess = SucceededAsyncAction<typeof GET_TABLE_ACTION, NormalizedTableResponse, Params>
type GetTableHeadersActionSuccess = SucceededAsyncAction<typeof GET_TABLE_HEADERS_ACTION, NormalizedTableHeadersResponse, Params>
type GetTableRowsActionSuccess = SucceededAsyncAction<typeof GET_TABLE_ROWS_ACTION, NormalizedTableRowsResponse, Params>

export const tables: Reducer<any, AsyncAction<any, any>> = (state = {}, action) => {
    if (action.type === GET_TABLE_ACTION) {
        switch (action.status) {
            case AsyncActionStatus.SUCCEEDED:
                return requestTableSuccess(state, action as GetTableActionSuccess);
            default:
                return state;
        }
    }
    if (action.type === GET_TABLE_HEADERS_ACTION) {
        switch (action.status) {
            case AsyncActionStatus.SUCCEEDED:
                return requestTableHeadersSuccess(state, action as GetTableHeadersActionSuccess);
            default:
                return state;
        }
    }
    if (action.type === GET_TABLE_ROWS_ACTION) {
        switch (action.status) {
            case AsyncActionStatus.SUCCEEDED:
                return requestTableRowsSuccess(state, action as GetTableRowsActionSuccess);
            default:
                return state;
        }
    }
    return state;
};

const requestTableSuccess = (state: any, action: GetTableActionSuccess) => {
    const {entities} = action.payload;
    return {
        ...state,
        [action.params.tableName]: {
            ...entities
        }
    };
};

const requestTableHeadersSuccess = (state: any, action: GetTableHeadersActionSuccess) => {
    const {entities} = action.payload;
    return {
        ...state,
        [action.params.tableName]: {
            ...state[action.params.tableName],
            ...entities
        }
    };
};

const requestTableRowsSuccess = (state: any, action: GetTableRowsActionSuccess) => {
    const {entities} = action.payload;
    return {
        ...state,
        [action.params.tableName]: {
            ...state[action.params.tableName],
            ...entities
        }
    };
};
