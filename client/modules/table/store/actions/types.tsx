import {Action} from 'redux';
import {NormalizedTableResponse} from '../../schema/table';

export const REQUEST_ADMIN_TABLE = 'REQUEST_FETCH_ADMIN_TABLE';
export const REQUEST_ADMIN_TABLE_SUCCESS = `${REQUEST_ADMIN_TABLE}_SUCCESS`;
export const REQUEST_ADMIN_TABLE_FAIL = `${REQUEST_ADMIN_TABLE}_FAIL`;

export interface RequestAdminTableAction extends Action {
    type: typeof REQUEST_ADMIN_TABLE
}

export interface RequestAdminTableSuccessAction extends Action {
    type: typeof REQUEST_ADMIN_TABLE_SUCCESS,
    payload: {
        response: NormalizedTableResponse,
        tableName: string
    }
}

export interface RequestAdminTableFailAction extends Action{
    type: typeof REQUEST_ADMIN_TABLE_FAIL
}

export type AdminTableActions = RequestAdminTableAction | RequestAdminTableSuccessAction | RequestAdminTableFailAction;