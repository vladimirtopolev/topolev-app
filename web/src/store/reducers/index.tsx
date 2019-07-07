import {combineReducers} from 'redux';
import auth from '../../common/modules/auth/store/reducers/index';

import * as fromAuth from '../../common/modules/auth/store/reducers/index';

export default {
    auth
};


export const getAuth = (state: any) => fromAuth.getAuth(state.auth);
export const getAuthAsyncStatuses = (state: any) => fromAuth.getAsyncStatuses(state.auth);


