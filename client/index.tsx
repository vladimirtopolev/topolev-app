import * as React from "react";
import {lazy, Suspense} from 'react';
import * as ReactDOM from "react-dom";
import configStore from './store/configStore';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import './styles.css';

import {authRouter} from './common/modules/auth';
import Client from './client/client-layout.component';

const AdminPanel = lazy(()=> import('./admin.component'));

const store = configStore();

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <Suspense fallback={'Loading...'}>
            <Switch>
                {authRouter}
                <Route path="/admin" component={AdminPanel}/>
                <Route path="/" component={Client}/>
            </Switch>
            </Suspense>
        </BrowserRouter>
    </Provider>
), document.getElementById("root"));
