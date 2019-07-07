import * as React from 'react';
import { Route, Switch } from 'react-router';
import AsyncComponent from './async-component';
export default (function () {
    return (React.createElement(Switch, null,
        React.createElement(Route, { path: "/user/signin", render: function () { return React.createElement(AsyncComponent, { componentName: "Signin" }); } }),
        ";"));
});
//# sourceMappingURL=routes.js.map