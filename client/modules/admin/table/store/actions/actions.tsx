import axios from 'axios';
import {normalize} from 'normalizr';
import {ThunkAction} from 'redux-thunk';
import {ActionCreator, Dispatch} from 'redux';
import {
    REQUEST_ADMIN_TABLE,
    REQUEST_ADMIN_TABLE_SUCCESS,
    REQUEST_ADMIN_TABLE_FAIL,
    RequestAdminTableAction,
    RequestAdminTableSuccessAction,
    RequestAdminTableFailAction,
    AdminTableActions
} from './types';
import {table, TableEntities} from '../../schema/table';

export const fetchAdminTable: ActionCreator<ThunkAction<Promise<AdminTableActions>, any, null, AdminTableActions>> =
    (tableName: string) => {
        return (dispatch: Dispatch) => {
            dispatch<RequestAdminTableAction>({
                type: REQUEST_ADMIN_TABLE
            });
            return axios.get(`/api/tables/${tableName}`)
                .then(response => dispatch<RequestAdminTableSuccessAction>({
                    type: REQUEST_ADMIN_TABLE_SUCCESS,
                    payload: {
                        tableName,
                        response: normalize<TableEntities, any[]>(response.data, table)
                    }
                }))
                .catch(e => dispatch<RequestAdminTableFailAction>({
                    type: REQUEST_ADMIN_TABLE_FAIL
                }));
        }
    };