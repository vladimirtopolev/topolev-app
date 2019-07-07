import * as React from 'react';
import {Redirect} from 'react-router-dom';
import * as _ from 'lodash';
import {Form, FormApi, Text} from 'react-form';
import {UserAuthenticationFields} from '../schema/models';
import {signIn} from '../store/actions/actions';
import {History} from 'history';
import * as styles from './signin.component.styles.css';
import {SIGNIN_USER} from '../store/actions/types'
import {AsyncActionStatus} from '../../../../utilities/asyncActions'
interface SignInComponentProps {
    signIn: (user: UserAuthenticationFields) => Promise<any>,
    auth: any,
    taskStatuses: any
}

const SignInComponent = ({signIn, taskStatuses, auth}: SignInComponentProps) => {

    if (auth) {
        return <Redirect to={'/admin'}/>
    }
    const onSubmit = (user: UserAuthenticationFields) => signIn(user);

    const authStatus = _.get(taskStatuses,`${SIGNIN_USER}.status`);
    return (
        <div className={styles.Signin}>
            <div className={styles.Signin__container}>
                <div className={styles.Signin__logo}>
                    <img src={require('../../../../../sources/img/perfect-leo-logo.png')}/>
                </div>
                <Form onSubmit={onSubmit}>
                    {(formApi: FormApi) => (
                        <div className={styles.Form}>
                            {authStatus === AsyncActionStatus.FAILED && (
                                <div className={styles.Form__error}>
                                    Ошибка авторизации
                                </div>
                            )}
                        <form onSubmit={formApi.submitForm} className={styles.Form__form}>
                            <div className={styles.Form__group}>
                                <label className={styles.Form__label}>Логин</label>
                                <Text className={styles.Form__control}
                                      name="identifier"
                                      field="identifier"/>
                            </div>
                            <div className={styles.Form__group}>
                                <label className={styles.Form__label}>Пароль</label>
                                <Text className={styles.Form__control}
                                      name="password"
                                      field="password"
                                      type="password"/>
                            </div>
                            <button className={styles.Form__btn}>Авторизация</button>
                        </form>
                        </div>
                    )}
                </Form>
            </div>
        </div>
    );
};

export default SignInComponent;
