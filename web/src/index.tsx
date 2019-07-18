import * as React from "react";
import {lazy, Suspense} from 'react';
import * as ReactDOM from "react-dom";
import configStore from './store/configStore';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import './styles.css';
import withAuthorizedUser from './common/helpers/with-authenticated-user.hoc';
import Spinner from './common/elements/spinner.component';


import {authRouter} from './common/modules/auth';

const Client = lazy(() => import('./client.component'));
const Admin = lazy(() => import('./admin.component'));

const store = configStore();

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <Suspense fallback={<Spinner/>}>
                <Switch>
                    {authRouter}
                    <Route path="/admin" component={withAuthorizedUser(Admin)}/>
                    <Route path="/" component={Client}/>
                </Switch>
            </Suspense>
        </BrowserRouter>
    </Provider>
), document.getElementById("root"));
