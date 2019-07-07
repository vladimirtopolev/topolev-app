var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import auth from './auth';
import { combineReducers } from 'redux';
import { AsyncActionStatus } from '../../../../../utilities/asyncActions';
import * as fromAuth from './auth';
var asyncStatuses = function (state, action) {
    var _a, _b;
    if (state === void 0) { state = {}; }
    if (action.type === 'SIGNIN_USER') {
        if (action.status !== AsyncActionStatus.FAILED) {
            return __assign({}, state, (_a = {}, _a[action.type] = { status: action.status }, _a));
        }
        else {
            return __assign({}, state, (_b = {}, _b[action.type] = { status: action.status, message: action.payload.message }, _b));
        }
    }
    return state;
};
var rootReducer = combineReducers({
    auth: auth,
    asyncStatuses: asyncStatuses
});
export default rootReducer;
export var getAuth = function (state) { return fromAuth.getAuth(state.auth); };
export var getAsyncStatuses = function (state) { return state.asyncStatuses; };
//# sourceMappingURL=index.js.map