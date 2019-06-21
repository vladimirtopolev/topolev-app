import {Reducer} from 'redux';
import {
    AdminTableActions,
    RequestAdminTableSuccessAction,
    REQUEST_ADMIN_TABLE,
    REQUEST_ADMIN_TABLE_SUCCESS,
    REQUEST_ADMIN_TABLE_FAIL
} from '../actions/types'
import {act} from 'react-dom/test-utils';

export const adminTable: Reducer<any, AdminTableActions> = (state = {}, action) => {
    switch (action.type) {
        case REQUEST_ADMIN_TABLE_SUCCESS: {
            return requestAdminTableSuccess(state, action as RequestAdminTableSuccessAction)
        }
        default:
            return state;
    }
};

const requestAdminTableSuccess = (state: any, action: RequestAdminTableSuccessAction) => {
    const {entities} = action.payload.response;
    return {
        ...state,
        [action.payload.tableName]: {
            ...entities
        }
    }
};
