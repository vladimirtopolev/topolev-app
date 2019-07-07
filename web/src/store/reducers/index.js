import auth from '../../common/modules/auth/store/reducers/index';
import * as fromAuth from '../../common/modules/auth/store/reducers/index';
export default {
    auth: auth
};
export var getAuth = function (state) { return fromAuth.getAuth(state.auth); };
export var getAuthAsyncStatuses = function (state) { return fromAuth.getAsyncStatuses(state.auth); };
//# sourceMappingURL=index.js.map