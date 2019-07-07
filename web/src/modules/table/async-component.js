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
import { lazy, Suspense } from 'react';
import { injectReducer } from '../../store/configStore';
import { MODULE_NAME } from './constants';
var TableRoutes = lazy(function () { return import('./routes'); });
var Table = lazy(function () { return import('./components/table/table-container.component'); });
var Row = lazy(function () { return import('./components/row/row-container.component'); });
var Components = {
    TableRoutes: TableRoutes,
    Table: Table,
    Row: Row
};
var AsyncComponent = function (props) {
    import('./store/reducers')
        .then(function (module) {
        injectReducer(MODULE_NAME, module.default);
    });
    var componentName = props.componentName;
    var Component = Components[componentName];
    return (React.createElement(Suspense, { fallback: 'Loading' },
        React.createElement(Component, __assign({}, props))));
};
export default AsyncComponent;
//# sourceMappingURL=async-component.js.map