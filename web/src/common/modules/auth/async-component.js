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
import { lazy } from 'react';
import { Suspense } from 'react';
var Signin = lazy(function () { return import('./components/signin-container.component'); });
var Components = {
    Signin: Signin
};
var AsyncComponent = function (props) {
    var componentName = props.componentName;
    var Component = Components[componentName];
    return (React.createElement(Suspense, { fallback: 'Loading' },
        React.createElement(Component, __assign({}, props))));
};
export default AsyncComponent;
//# sourceMappingURL=async-component.js.map