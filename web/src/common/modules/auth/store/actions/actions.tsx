import * as api from '../../service/api';
import {asyncActionCreator} from '../../../../../utilities/asyncActions';
import {setAuthToken} from '../../utilities';
import {UserAuthenticationFields} from '../../schema/models';
import {SIGNIN_USER, LOGOUT_USER} from './types';



export function signIn(user: UserAuthenticationFields) {
    return asyncActionCreator<typeof SIGNIN_USER, {token: string}, any>(
        SIGNIN_USER,
        api.signIn(user)
            .then(response => {
                const {token} = response.data;
                localStorage.setItem('jwtToken', token);
                setAuthToken(token);
                return response.data;
            })
    );
}

export function logout() {
    localStorage.removeItem('auth');
    setAuthToken();
    return {
        type: LOGOUT_USER
    };
}
