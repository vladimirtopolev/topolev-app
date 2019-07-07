import * as React from 'react';
import { Route, Switch } from 'react-router';
import AsyncComponent from './async-component';
export default (function (_a) {
    var domainPath = _a.domainPath;
    return (React.createElement(Switch, null,
        React.createElement(Route, { path: domainPath + "/tables/:tableName/rows/:locale/:rowId", render: function () { return React.createElement(AsyncComponent, { componentName: "Row" }); } }),
        ",",
        React.createElement(Route, { path: domainPath + "/tables/:tableName", render: function () { return React.createElement(AsyncComponent, { componentName: "Table", domainPath: domainPath }); } })));
});
//# sourceMappingURL=routes.js.map