import * as React from "react";
import { lazy, Suspense } from 'react';
import * as ReactDOM from "react-dom";
import configStore from './store/configStore';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import './styles.css';
import withAuthorizedUser from './common/helpers/with-authenticated-user.hoc';
import { authRouter } from './common/modules/auth';
import Client from './client/client-layout.component';
import { navigationRouterCreator } from './modules/navigation';
var AdminPanel = lazy(function () { return import('./admin.component'); });
var store = configStore();
ReactDOM.render((React.createElement(Provider, { store: store },
    React.createElement(BrowserRouter, null,
        React.createElement(Suspense, { fallback: 'Loading...' },
            React.createElement(Switch, null,
                authRouter,
                navigationRouterCreator('/admin/navigation'),
                React.createElement(Route, { path: "/admin", component: withAuthorizedUser(AdminPanel) }),
                React.createElement(Route, { path: "/", component: Client })))))), document.getElementById("root"));
//# sourceMappingURL=index.js.map