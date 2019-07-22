import {combineReducers} from 'redux';
import auth from '../../common/modules/auth/store/reducers';
import * as fromAuth from '../../common/modules/auth/store/reducers';

import properties from '../../common/modules/properties/store/reducers';

import adminTableData from '../../common/modules/adminTableData/store/reducers';
import * as fromAdminTableData from '../../common/modules/adminTableData/store/reducers';

export default {
    auth,
    properties,
    adminTableData
};

export const getAuth = (state: any) => fromAuth.getAuth(state.auth);
export const getAuthAsyncStatuses = (state: any) => fromAuth.getAsyncStatuses(state.auth);

export const getAdminTableData = (state:any, tableName: string) => fromAdminTableData.getTableRows(state.adminTableData, tableName);
