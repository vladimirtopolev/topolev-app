import * as React from 'react';
import {Route, Switch} from 'react-router';
import {lazy} from 'react';

const AuthRoutes = lazy(() => import('./routes'));

export const authRouter = <Route path={'/user'} render={() => <AuthRoutes/>}/>;
