import * as React from 'react';
import {Route, Switch} from 'react-router';
import {lazy} from 'react';

const OrderCallRoutes = lazy(() => import('./routes'));

export const orderedCallsRouterCreator = (domainPath: string) =>
    <Route path={domainPath} render={() => <OrderCallRoutes domainPath={domainPath}/>}/>;
