import {combineReducers} from 'redux';
import auth from '../../common/modules/auth/store/reducers';
import * as fromAuth from '../../common/modules/auth/store/reducers';

import properties from '../../common/modules/properties/store/reducers';

export default {
    auth,
    properties
};

export const getAuth = (state: any) => fromAuth.getAuth(state.auth);
export const getAuthAsyncStatuses = (state: any) => fromAuth.getAsyncStatuses(state.auth);


