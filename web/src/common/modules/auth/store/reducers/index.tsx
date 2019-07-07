import auth from './auth';
import {combineReducers} from 'redux';
import {AsyncAction, AsyncActionStatus} from '../../../../../utilities/asyncActions';
import {SIGNIN_USER} from '../actions/types';
import * as fromAuth from './auth';

const asyncStatuses = (state: any = {}, action: AsyncAction<typeof SIGNIN_USER>) => {
    if (action.type === 'SIGNIN_USER') {
        if (action.status !== AsyncActionStatus.FAILED) {
            return {...state, [action.type]: {status: action.status}};
        } else {
            return {...state, [action.type]: {status: action.status, message: action.payload.message}};
        }
    }
    return state;
};

const rootReducer = combineReducers({
    auth,
    asyncStatuses
});

export default rootReducer;

export type AuthModuleState = ReturnType<typeof rootReducer>;

export const getAuth = (state: any) => fromAuth.getAuth(state.auth);
export const getAsyncStatuses = (state: any) => state.asyncStatuses;
