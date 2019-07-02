import {Reducer} from 'redux';
import * as _ from 'lodash';
import * as jwt from 'jsonwebtoken';

import {SIGNIN_USER, LOGOUT_USER} from '../actions/types';
import {SignInResponse} from '../../service/api';

import {AsyncAction, AsyncActionStatus, SucceededAsyncAction} from '../../../../../utilities/asyncActions';

type UserAuthorizedSuccessfully = SucceededAsyncAction<typeof SIGNIN_USER, {token: string}>

const auth: Reducer<any, AsyncAction<any, any>> = (state = {}, action) => {
    if (action.type === SIGNIN_USER) {
        switch (action.status) {
            case AsyncActionStatus.SUCCEEDED:
                return userAuthorizedSuccessfully(state, action as UserAuthorizedSuccessfully);
            default:
                return state;
        }
    }

    if (action.type === LOGOUT_USER) {
        return null;
    }
    return state;
};

export default auth;

const userAuthorizedSuccessfully = (state: any, action: UserAuthorizedSuccessfully) => {
    const {token} = action.payload;
    const payload= jwt.decode(token) as {user: string};
    return payload.user || null;
};
