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
import * as React from 'react';
import { getAuth } from '../../store/reducers';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
var mapStateToProps = function (state) {
    console.log('STATE', state);
    return {
        auth: getAuth(state)
    };
};
export default function withAuthenticatesUser(OriginComponent) {
    var DecoratedComponent = function (props) {
        console.log('PROPS', props, props.auth === null);
        return props.auth === null
            ? React.createElement(Redirect, { to: '/user/signin' })
            : React.createElement(OriginComponent, __assign({}, props));
    };
    return connect(mapStateToProps, null)(DecoratedComponent);
}
//# sourceMappingURL=with-authenticated-user.hoc.js.map