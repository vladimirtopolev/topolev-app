import * as React from 'react';
import { Redirect } from 'react-router-dom';
import * as _ from 'lodash';
import { Form, Text } from 'react-form';
import * as styles from './signin.component.styles.css';
import { SIGNIN_USER } from '../store/actions/types';
import { AsyncActionStatus } from '../../../../utilities/asyncActions';
var SignInComponent = function (_a) {
    var signIn = _a.signIn, taskStatuses = _a.taskStatuses, auth = _a.auth;
    if (auth) {
        return React.createElement(Redirect, { to: '/admin' });
    }
    var onSubmit = function (user) { return signIn(user); };
    var authStatus = _.get(taskStatuses, SIGNIN_USER + ".status");
    return (React.createElement("div", { className: styles.Signin },
        React.createElement("div", { className: styles.Signin__container },
            React.createElement("div", { className: styles.Signin__logo },
                React.createElement("img", { src: require('../../../../sources/img/perfect-leo-logo.png') })),
            React.createElement(Form, { onSubmit: onSubmit }, function (formApi) { return (React.createElement("div", { className: styles.Form },
                authStatus === AsyncActionStatus.FAILED && (React.createElement("div", { className: styles.Form__error }, "\u041E\u0448\u0438\u0431\u043A\u0430 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438")),
                React.createElement("form", { onSubmit: formApi.submitForm, className: styles.Form__form },
                    React.createElement("div", { className: styles.Form__group },
                        React.createElement("label", { className: styles.Form__label }, "\u041B\u043E\u0433\u0438\u043D"),
                        React.createElement(Text, { className: styles.Form__control, name: "identifier", field: "identifier" })),
                    React.createElement("div", { className: styles.Form__group },
                        React.createElement("label", { className: styles.Form__label }, "\u041F\u0430\u0440\u043E\u043B\u044C"),
                        React.createElement(Text, { className: styles.Form__control, name: "password", field: "password", type: "password" })),
                    React.createElement("button", { className: styles.Form__btn }, "\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F")))); }))));
};
export default SignInComponent;
//# sourceMappingURL=signin.component.js.map