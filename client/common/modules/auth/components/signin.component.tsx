import * as React from 'react';
import {Form, FormApi, Text} from 'react-form';
import {UserAuthenticationFields} from '../schema/models';
import {signIn} from '../store/actions/actions';
import {History} from 'history';

interface SignInComponentProps {
    signIn: (user: UserAuthenticationFields) => Promise<any>,
    history: History
}

const SignInComponent = ({signIn}: SignInComponentProps) => {

    const onSubmit = (user: UserAuthenticationFields) => {
        signIn(user)
            .then(() => {

            });
    };

    return (
        <Form onSubmit={onSubmit}>
            {(formApi: FormApi) => (
                <form onSubmit={formApi.submitForm}>
                    <div className="form-group">
                        <label>Логин</label>
                        <Text className="form-control"
                              name="identifier"
                              field="identifier"/>
                    </div>
                    <div className="form-group">
                        <label>Пароль</label>
                        <Text className="form-control"
                              name="password"
                              field="password"
                              type="password"/>
                    </div>
                    <button className="btn btn-primary">Авторизация</button>
                </form>
            )}
        </Form>
    );
};

export default SignInComponent;
