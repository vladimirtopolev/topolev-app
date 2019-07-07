import axios from 'axios';
import {UserAuthenticationFields} from '../schema/models';

const clientApi = axios.create({
    baseURL: window.location.origin
});

export interface SignInResponse {
    data: { token: string }
}

export function signIn(user: UserAuthenticationFields): Promise<SignInResponse> {
    return clientApi.post(`/api/users/signin`, user);
}

