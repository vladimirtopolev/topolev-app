import * as api from '../../service/api';
import { asyncActionCreator } from '../../../../../utilities/asyncActions';
import { setAuthToken } from '../../utilities';
import { SIGNIN_USER, LOGOUT_USER } from './types';
export function signIn(user) {
    return asyncActionCreator(SIGNIN_USER, api.signIn(user)
        .then(function (response) {
        var token = response.data.token;
        localStorage.setItem('jwtToken', token);
        setAuthToken(token);
        return response.data;
    }));
}
export function logout() {
    localStorage.removeItem('auth');
    setAuthToken();
    return {
        type: LOGOUT_USER
    };
}
//# sourceMappingURL=actions.js.map