import * as React from 'react';
import { Route } from 'react-router';
import Navigation from './components/navigation-toolbar.component';
export var navigationRouterCreator = function (domainPath) {
    return React.createElement(Route, { path: domainPath, render: function () { return React.createElement(Navigation, { domainPath: domainPath }); } });
};
//# sourceMappingURL=index.js.map