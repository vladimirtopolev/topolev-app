import * as jwt from 'jsonwebtoken';
import { SIGNIN_USER, LOGOUT_USER } from '../actions/types';
import { AsyncActionStatus } from '../../../../../utilities/asyncActions';
var auth = function (state, action) {
    if (state === void 0) { state = null; }
    if (action.type === SIGNIN_USER) {
        switch (action.status) {
            case AsyncActionStatus.SUCCEEDED:
                return userAuthorizedSuccessfully(state, action);
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
var userAuthorizedSuccessfully = function (state, action) {
    var token = action.payload.token;
    var payload = jwt.decode(token);
    return payload.user || null;
};
export var getAuth = function (state) { return state; };
//# sourceMappingURL=auth.js.map