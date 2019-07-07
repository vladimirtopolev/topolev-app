import * as React from 'react';
import { Route } from 'react-router';
import { lazy } from 'react';
var TableRoutes = lazy(function () { return import('./routes'); });
export var tableRouterCreator = function (domainPath) {
    return React.createElement(Route, { path: domainPath, render: function () { return React.createElement(TableRoutes, { domainPath: domainPath }); } });
};
//# sourceMappingURL=index.js.map