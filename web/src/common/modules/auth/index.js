import * as React from 'react';
import { Route } from 'react-router';
import { lazy } from 'react';
var AuthRoutes = lazy(function () { return import('./routes'); });
export var authRouter = React.createElement(Route, { path: '/user', render: function () { return React.createElement(AuthRoutes, null); } });
//# sourceMappingURL=index.js.map